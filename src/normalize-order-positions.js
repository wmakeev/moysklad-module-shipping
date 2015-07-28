export default async function normalizeOrderPositions(customerOrderPositions) {
  return await* customerOrderPositions
    // Преобразуем во внутренний формат
    .map(async position => {
      // Используем параллельную загрузку полей
      let positionGood = await position.good;
      return {
        name: positionGood.name,
        type: positionGood.instanceOf('service') ? 'service' : 'good',
        uuid: position.goodUuid,
        article: positionGood.productCode,
        quantity: position.quantity,
        weight: positionGood.weight,
        volume: positionGood.volume,
        price: position.price.sum,
      };
    });
}
