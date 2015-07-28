/*global describe, before, it, expect, assert, requireWithMocks, sinon, isPromise */
/*eslint no-unused-expressions: 0, no-var: 0, object-shorthand: 0 */

var normalizeOrder = sinon.stub().returns(Promise.resolve('normalized-order'));

describe('requestConfirmation', () => {

  before(() => {
    this.requestConfirmation = requireWithMocks('../lib/request-confirmation', __dirname, {
      mocks: {
        './normalize-order': normalizeOrder,
      },
    });

    this.sb = {
      sendRequest: sinon.stub().returns(Promise.resolve('ok')),
      log: { debug: () => true },
      alert: sinon.spy(),
    };

    this.orders = [
      'order-1',
      'order-2',
    ];
  });

  it('should confirm and send request', (done) => {
    var that = this;
    var callResult = this.requestConfirmation.call(this.sb, this.orders);
    assert.ok(isPromise(callResult), 'requestConfirmation result should be Promise');
    callResult
      .then(results => {
        // normalizeOrder
        normalizeOrder.should.always.calledOn(that.sb);
        that.orders.forEach((order, index) => {
          var stubCall = normalizeOrder.getCall(index);
          assert.ok(stubCall, 'normalizeOrder call#' + index);
          assert(stubCall.args[0] === order,
            'normalizeOrder called with order argument');
        }, this);

        // sendRequest
        var spyCall = that.sb.sendRequest.firstCall;
        assert.ok(spyCall, 'sendRequest call');
        expect(spyCall.args[0], 'sendRequest arguments')
          .to.be.eql([
            { order: 'normalized-order' },
            { order: 'normalized-order' },
          ]);

        that.sb.alert.calledWith(sinon.match.string);

        expect(results).to.be.eql('ok');

        done();
      })

      .catch(done);
  });

});
