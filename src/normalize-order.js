import normalizeOrderPositions from './normalize-order-positions';
import normalizeOrderCustomer  from './normalize-order-customer';

/**
 * Преобразует заказ покупателя из объекта МойСклад во внутренний формат
 *
 * @param   {Array}   order заказ покупателя
 * @returns {Promise} нормализованный заказ
 * @this              sandbox
 */
export default async function normalizeOrder(order) {
  if (!order) {
    throw new Error('normalizeOrderData: list of orders not specified');
  }

  let normOrder = {
    name: order.name,
  };

  [normOrder.goods, normOrder.customer] = await* [
    normalizeOrderPositions.call(this, order.customerOrderPosition),
    normalizeOrderCustomer.call(this, await order.sourceAgent),
  ];

  // Отбрасываем услуги, выделяем стоимость доставки
  normOrder.goods = normOrder.goods.filter(good => {
    if (good.type !== 'service') {
      return true;
    }
    if (good.uuid === this.options.shippingServiceUuid) {
      normOrder.shippingCost = good.price;
    }
    return false;
  });

  return normOrder;
}
