/*global describe, it, assert, isPromise */
/*eslint no-unused-expressions: 0, no-var: 0 */

var normalizeOrderPositions = require('../lib/normalize-order-positions');

// TODO Add Promises
var positions = [
  {
    good: Promise.resolve({
      name: 'good-1',
      productCode: '111',
      weight: 100,
      volume: 30,
      instanceOf: (type) => type === 'good' ? true : false,
    }),
    price: { sum: 1000 },
    goodUuid: '123-456',
    quantity: 2,
  },
  {
    good: {
      name: 'service-1',
      productCode: '222',
      instanceOf: (type) => type === 'service' ? true : false,
    },
    price: { sum: 300 },
    goodUuid: '567-789',
    quantity: 1,
  },
];

describe('normalizeOrderPositions', () => {

  it('should normalize order positions', (done) => {
    var callResult = normalizeOrderPositions(positions);
    assert.ok(isPromise(callResult),
      'normalizeOrderPositions result should be Promise');
    callResult.then(result => {
      assert.ok(result);
      result.should.to.be.eql([
        {
          name: 'good-1',
          type: 'good',
          uuid: '123-456',
          article: '111',
          quantity: 2,
          weight: 100,
          volume: 30,
          price: 1000,
        },
        {
          name: 'service-1',
          type: 'service',
          uuid: '567-789',
          article: '222',
          quantity: 1,
          weight: void 0,
          volume: void 0,
          price: 300,
        },
      ]);
      done();
    }).catch(done);
  });

});
