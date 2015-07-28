  import _ from 'lodash';

/**
 * Преобразует данные контрагента МойСклад к стандартному виду
 *
 * @param   {object} agent  контрагент
 * @returns {object}        нормализованный контрагент
 * @this                    sandbox
 */
export default async function normalizeOrderCustomer(agent) {
  let fullName = agent.name;
  let phones = [];
  let company;

  // TODO Добавить проверку и нормализацию номеров телефонов
  function pushPhones(phonesStr) {
    if (phonesStr) {
      let res = _(phonesStr.split(','))
        .map(phone => {
          if (phone) {
            return phone.trim();
          }
        })
        .compact()
        .value();
      phones = _.uniq(phones.concat(res));
    }
  }

  // Если физическое лицо ..
  if (agent.companyType === 'FILI') {
    // .. и если заполнено наименование ФЛ, то это полное имя
    if (agent.requisite.legalTitle) {
      fullName = agent.requisite.legalTitle;
    }
  }
  // .. иначе ООО или ИП, значит нужно указать компанию
  else {
    company = agent.requisite.legalTitle;
    // имя и телефон получателя пробуем получить из первого контакта контрагента
    if (agent.contactPerson && agent.contactPerson.length) {
      fullName = agent.contactPerson[0].name;
      pushPhones(agent.contactPerson[0].phone);
    }
  }

  // Добавляем основной телефон карточки в список
  if (agent.contact.phones) {
    pushPhones(agent.contact.phones);
    pushPhones(agent.contact.faxes);
  }

  return {
    code: agent.code,
    fullName,
    company,
    phones,
    email: agent.contact.email,
    address: await this.parseAddress(agent.requisite.actualAddress),
  };
}
