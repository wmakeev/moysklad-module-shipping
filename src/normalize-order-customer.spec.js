/*global describe, it, assert, expect, isPromise */
/*eslint no-var:0, object-shorthand:0 */

var normalizeOrderCustomer = require('../lib/normalize-order-customer');

var cases = [
  {
    name: 'FILI customer',
    input: {
      name: 'Иванов И.И. (ФЛ)',
      code: '1020',
      companyType: 'FILI',
      requisite: {
        legalTitle: 'Иванов Иван Иванович',
        actualAddress: '620099, г.Смольный, ул.Чайковского, д.14, кв.3',
      },
      contact: {
        phones: '+7 (922) 765-54-11',
        faxes: '+7 (922) 765-54-12',
        email: 'ivanov@foo.ru',
      },
    },
    test: {
      fullName: 'Иванов Иван Иванович',
      code: '1020',
      address: {
        source: '620099, г.Смольный, ул.Чайковского, д.14, кв.3',
      },
      company: void 0,
      email: 'ivanov@foo.ru',
      phones: [
        '+7 (922) 765-54-11',
        '+7 (922) 765-54-12',
      ],
    },
  },
  {
    name: 'URLI customer',
    input: {
      name: 'Ромашка, ООО',
      code: '1030',
      companyType: 'URLI',
      requisite: {
        legalTitle: 'ООО "Ромашка"',
        actualAddress: 'г.Смольный, ул.Чайковского, д.14, кв.3',
      },
      contactPerson: [
        {
          name: 'Сидоров Семен Викторович',
          phone: '+7 (922) 234-56-78,',
        },
      ],
      contact: {
        phones: '+7 (922) 234-56-78, +7 (922) 234-56-79 ',
        email: 'romashka@foo.ru',
      },
    },
    test: {
      fullName: 'Сидоров Семен Викторович',
      code: '1030',
      address: {
        source: 'г.Смольный, ул.Чайковского, д.14, кв.3',
      },
      company: 'ООО "Ромашка"',
      email: 'romashka@foo.ru',
      phones: [
        '+7 (922) 234-56-78',
        '+7 (922) 234-56-79',
      ],
    },
  },
];

var sb = {
  parseAddress: function (address) {
    return {
      source: address,
    };
  },
};

describe('normalizeOrderCustomer', function () {

  it('should normalize customer', function (done) {
    var results = cases.map(function (caseItem) {
      var result = normalizeOrderCustomer.call(sb, caseItem.input);
      assert(isPromise(result), 'normalizeOrderCustomer should return promise');
      return result.then(function (normCustomer) {
        expect(normCustomer, caseItem.name).to.be.eql(caseItem.test);
      });
    });

    Promise.all(results).then(function () { done(); }).catch(done);
  });

});
