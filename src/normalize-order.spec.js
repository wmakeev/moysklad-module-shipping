/*global describe, before, it, expect, assert, requireWithMocks,
isPromise, sinon */
/*eslint no-unused-expressions: 0, no-var: 0 */

var normalizedGoods = [
  {
    type: 'good',
    uuid: '1',
    name: 'good-1',
    price: 100,
  },
  {
    type: 'good',
    uuid: '2',
    name: 'good-2',
    price: 200,
  },
];

var noramalizedService = {
  type: 'service',
  uuid: '3',
  name: 'service-1',
  price: 300,
};

var noramalizedAgent = {
  name: 'agent-1',
};

var thisSpy = sinon.spy();

function normalizeOrderPositions() {
  thisSpy.call(this);
  return normalizedGoods.concat([noramalizedService]);
}

function normalizeOrderCustomer() {
  thisSpy.call(this);
  return noramalizedAgent;
}

describe('normalizeOrder', () => {

  before(() => {
    this.normalizeOrder = requireWithMocks('../lib/normalize-order', __dirname, {
      mocks: {
        './normalize-order-positions': normalizeOrderPositions,
        './normalize-order-customer': normalizeOrderCustomer,
      },
    });
  });

  it('should be defined function', () => {
    expect(this.normalizeOrder)
      .to.be.ok.and
      .to.be.a('function');
  });

  it('should normalize order', done => {
    var orders = [
      {
        name: 'order-1',
        customerOrderPosition: [],
        sourceAgent: {},
      },
      {
        name: 'order-2',
        customerOrderPosition: [],
        sourceAgent: new Promise(resolve => setTimeout(() => {
          return resolve({});
        }, 10)),
      },
    ];

    var sb = {
      options: {
        shippingServiceUuid: noramalizedService.uuid,
      },
    };

    var results = orders.map(order =>
      this.normalizeOrder.call(sb, order), this);

    assert.ok(results, 'result should be defined');
    results.should.be.instanceof(Array);
    assert(results.length === 2, 'should return 2 orders');
    results.forEach(result =>
      assert.ok(isPromise(result), 'normalizeOrder result should be Promise'));

    Promise.all(results).then(normOrders => {
      normOrders.forEach((normOrder, index) => {
        assert.ok(normOrder, 'normalized order');
        normOrder.should.have.property('name').and.equal(orders[index].name);
        normOrder.should.have.property('goods').and.eql(normalizedGoods);
        normOrder.should.have.property('customer').and.eql(noramalizedAgent);
        return normOrder.should.have.property('shippingCost').and.equal(noramalizedService.price);
      });

      thisSpy.should.always.calledOn(sb);
      done();
    }).catch(done);
  });
});
