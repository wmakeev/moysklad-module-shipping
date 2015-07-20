import _        from 'lodash';
import moysklad from 'moysklad-client';

let client;

// Шаблон элемента меню
const menuItem = {
  type: 'MenuItem',
  name: 'Заявка на доставку'
};

function deliveryRequest(customerOrders) {
  customerOrders.forEach(order => {
    this.log.debug(order.name)
  })
}

/**
 * Обработчик нажатия на пункт меню
 */
async function menuHandler(menu) {
  let ordersUuids = menu.appContext === 'customerorder'
    ? UI.getSelectedRowsUuids()
    : [this.router.getQuery().id];

  if (ordersUuids.length > 0) {
    let orders = await client
      .from('customerOrder').uuids(ordersUuids).load();
    deliveryRequest.call(this, orders);
  }
  else {
    // Ошибка не должна возникать т.к.
    // меню 'Создать' не активно когда докумены не выбраны
    UI.error(new Error('Заказы не выбраны'))
  }
}

export default function moyskladShippingModule(sb) {
  let { UI } = sb;
  return {
    async init(options) {
      client = moysklad.createClient();

      // Добавляем пункт меню в раздел "Заказы покупателей"
      UI.add(_.extend({}, menuItem, {
        menu: 'Создать',
        appContext: 'customerorder',
        handler: menuHandler.bind(sb)
      }));

      // Добавляем пункт меню в редактор "Заказ покупателя"
      UI.add(_.extend({}, menuItem, {
        menu: 'Действия',
        appContext: 'customerorder/edit',
        handler: menuHandler.bind(sb)
      }));
    }
  }
}
