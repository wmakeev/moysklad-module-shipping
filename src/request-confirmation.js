import normalizeOrder from './normalize-order';

/**
 * Выводит диалог подтверждения отправки заказов
 *
 * @param   {array} orders  список заказов МойСклад
 * @returns {array}         результат процесса подтвержения
 * @this                    sandbox
 */
export default async function requestConfirmation(orders) {
  let normOrders = await* orders.map(order => normalizeOrder.call(this, order));
  // TODO Подтвердить правильность данных заказов через внешний интерфейс

  // TODO Для каждого заказа может быть отдельная служба доставки
  // .. разбить на группы, но отправлять надо не по одному
  let results = await this.sendRequest(normOrders.map(normOrder => {
    return { order: normOrder };
  }));

  this.log.debug(results);
  this.alert('Заявки отправлены в службу доставки');
  return results;
}
