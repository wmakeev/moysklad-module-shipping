import requestConfirmation from './request-confirmation';

/**
 * Обработчик нажатия на пункт меню
 *
 * @param {object} Элемент нажатого пункта меню
 * @returns {Promise} Promise
 */
export default async function menuHandler({ appContext }) {
  let ordersUuids = appContext === 'customerorder'
    ? await this.UI.getSelectedRowsUuids()
    : [this.router.getQuery().id];

  if (ordersUuids.length > 0) {
    let orders = await this.client
      .from('customerOrder').uuids(ordersUuids).load();
    this.client
      .createLazyLoader().attach(orders, ['Position.good', 'sourceAgent']);
    requestConfirmation.call(this, orders);
  }
  else {
    // Ошибка не должна возникать т.к.
    // меню 'Создать' не активно когда докумены не выбраны
    this.UI.error(new Error('Заказы не выбраны'));
  }
}
