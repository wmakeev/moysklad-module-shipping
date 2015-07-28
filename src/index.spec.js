/*global describe, before, it, expect, requireWithMocks, sinon, _ */
/*eslint no-unused-expressions: 0, no-var: 0 */

var menuHandler = sinon.spy();

var MoyskladClient = {
  createClient: sinon.spy(),
};

function MoyskladRouter() {
  return {
    start: sinon.spy(),
  };
}

describe('module', () => {

  before(() => {
    this.index = requireWithMocks('../lib/index', __dirname, {
      allowables: ['lodash'],
      mocks: {
        'moysklad-client': MoyskladClient,
        'moysklad-router': MoyskladRouter,
        './menu-handler': menuHandler,
      },
    });

    this.sb = {
      UI: {
        add: sinon.spy(),
      },
      once: sinon.spy(),
      emit: sinon.spy(),
    };

    this.instance = this.index(this.sb);
  });

  describe('factory', () => {

    it('should be defined function', () => {
      expect(this.index)
        .to.be.ok.and
        .to.be.a('function');
    });

    it('should return instance object', () => {
      expect(this.instance)
        .to.be.ok.and
        .to.be.an('object');
    });
  });

  describe('instance', () => {

    it('should have init and destroy keys', () => {
      expect(this.instance)
        .to.have.all.keys('init', 'destroy');
    });

    describe('init', () => {

      before(() => this.instance.init());

      it('should add router and client instances to sandbox', () => {
        // Не получается через keys
        expect(this.sb).to.have.property('router');
        expect(this.sb).to.have.property('client');
      });

      it('should subscribe to destroy', () => {
        this.sb.once.calledWithMatch(sinon.match('destroy'), sinon.match.func);
      });

      it('should add UI items', () => {
        this.sb.UI.add.should.to.be.calledOnce;
        var uiAddCallArg = this.sb.UI.add.firstCall.args[0];

        expect(uiAddCallArg, 'argument')
          .to.be.instanceof(Array).and
          .have.length(2);

        var cases = [
          {
            type: 'MenuItem',
            name: 'Заявка на доставку',
            menu: 'Создать',
            appContext: 'customerorder',
          },
          {
            type: 'MenuItem',
            name: 'Заявка на доставку',
            menu: 'Действия',
            appContext: 'customerorder/edit',
          },
        ];

        cases.forEach((caseItem, index) => {
          var arg = uiAddCallArg[index];
          _.forOwn(caseItem, (value, key) => {
            expect(arg, 'Item #' + (index + 1))
              .to.have.property(key, value);
            expect(arg)
              .to.have.property('handler').and
              .to.be.a('function');
          });
        });
      });

      it('should bind menuHandler to items handler method', () => {
        var item1 = this.sb.UI.add.firstCall.args[0][0];
        var item2 = this.sb.UI.add.firstCall.args[0][1];

        item1.handler('item');
        item2.handler('item');

        menuHandler.should.be.calledTwice;
        menuHandler.should.always.calledWith('item');
        menuHandler.should.always.calledOn(this.sb);
      });
    });
  });
});
