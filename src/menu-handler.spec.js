/*global describe, before, it, expect, assert, requireWithMocks, sinon, _,
isPromise */
/*eslint no-unused-expressions: 0, no-var: 0 */

var mockOrders = require('../test/res/mocks/orders');

var sb = {
  UI: {
    getSelectedRowsUuids: () => {
      return Promise.resolve([
        '660df488-08f7-4f43-ad24-3ddc4500765a',
        'bf6bc7ce-444e-4fd2-9826-3134ce89c54b',
      ]);
    },
  },
  router: {
    getQuery: () => {
      return {
        id: '660df488-08f7-4f43-ad24-3ddc4500765a',
      };
    },
  },
};

var requestConfirmation = sinon.spy();

describe('menu handler', function() {
  before(() => {
    this.menuHandler = requireWithMocks('../lib/menu-handler', __dirname, {
      mocks: {
        './request-confirmation': requestConfirmation,
      },
    });

    sb.client = {
      from: (type) => {
        expect(type, 'client.from() argument').to.be.equal('customerOrder');
        return {
          uuids: (uuids) => {
            expect(uuids, 'uuids').to.be.instanceof(Array);
            return {
              load: () => {
                return _.filter(mockOrders, function(order) {
                  return uuids.indexOf(order.uuid) !== -1;
                });
              },
            };
          },
        };
      },
    };
  });

  it('should be defined function', function() {
    return expect(this.menuHandler).to.be.ok.and.to.be.a('function');
  });

  it('should call request confirmation with order data for several orders', function(done) {
    var result;
    result = this.menuHandler.call(sb, {
      appContext: 'customerorder',
    });
    assert.ok(result, 'menuHandler result should be defined');
    assert(isPromise(result), 'menuHandler should return Promise');
    return result.then(() => {
      var spyCall;
      requestConfirmation.should.calledOnce;
      spyCall = requestConfirmation.firstCall;
      spyCall.should.calledOn(sb);
      spyCall.should.calledWith(sinon.match.array);
      requestConfirmation.reset();
      return done();
    }).catch(done);
  });

  it('should call request confirmation with order data for single order', function(done) {
    var result;
    result = this.menuHandler.call(sb, {
      appContext: 'customerorder/edit',
    });
    assert.ok(result, 'menuHandler result should be defined');
    assert(isPromise(result), 'menuHandler should return Promise');
    result.then(() => {
      var spyCall;
      requestConfirmation.should.calledOnce;
      spyCall = requestConfirmation.firstCall;
      spyCall.should.calledOn(sb);
      spyCall.should.calledWith(sinon.match.array);
      requestConfirmation.reset();
      return done();
    }).catch(done);
  });
});
