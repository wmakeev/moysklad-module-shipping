import _            from 'lodash';
import moysklad     from 'moysklad-client';
import Router       from 'moysklad-router';
import menuHandler  from './menu-handler';

// Шаблон элемента меню
const menuItem = {
  type: 'MenuItem',
  name: 'Заявка на доставку',
};

export default function moyskladShippingModule(sb) {
  return {
    init() {
      sb.client = moysklad.createClient();
      sb.router = (new Router()).start();
      sb.once('destroy', () => sb.router.stop());
      sb.UI.add([

        // Добавляем пункт меню в раздел "Заказы покупателей"
        _.extend({}, menuItem, {
          menu: 'Создать',
          appContext: 'customerorder',
          handler: menuHandler.bind(sb),
        }),

        // Добавляем пункт меню в редактор "Заказ покупателя"
        _.extend({}, menuItem, {
          menu: 'Действия',
          appContext: 'customerorder/edit',
          handler: menuHandler.bind(sb),
        }),
      ]);
    },

    // TODO destroy: sb.destroy,
    destroy() {
      sb.emit('destroy');
    },
  };
}
