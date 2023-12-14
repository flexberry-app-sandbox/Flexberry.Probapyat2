import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  итог: DS.attr('decimal'),
  номерЗаказа: DS.attr('number'),
  контрагент: DS.belongsTo('i-i-s-probapyat-контрагент', { inverse: null, async: false }),
  мастер: DS.belongsTo('i-i-s-probapyat-мастер', { inverse: null, async: false }),
  расчетЗаказа: DS.hasMany('i-i-s-probapyat-расчет-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probapyat-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  итог: {
    descriptionKey: 'models.i-i-s-probapyat-заказ.validations.итог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-probapyat-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-probapyat-заказ.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  мастер: {
    descriptionKey: 'models.i-i-s-probapyat-заказ.validations.мастер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетЗаказа: {
    descriptionKey: 'models.i-i-s-probapyat-заказ.validations.расчетЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-probapyat-заказ', {
    дата: attr('Дата', { index: 0 }),
    номерЗаказа: attr('Номер заказа', { index: 1 }),
    контрагент: belongsTo('i-i-s-probapyat-контрагент', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'контрагент' }),
    мастер: belongsTo('i-i-s-probapyat-мастер', 'Мастер', {
      фИО: attr('Мастер', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    итог: attr('Итог', { index: 6 }),
    расчетЗаказа: hasMany('i-i-s-probapyat-расчет-заказа', 'Расчет заказа', {
      номенклатура: belongsTo('i-i-s-probapyat-номенклатура', 'Товар', {
        товар: attr('Товар', { index: 1, hidden: true }),
        цена: attr('Цена', { index: 2 })
      }, { index: 0, displayMemberPath: 'товар' }),
      количество: attr('Количество', { index: 3 }),
      сумма: attr('Сумма', { index: 4 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-probapyat-заказ', {
    дата: attr('Дата', { index: 0 }),
    номерЗаказа: attr('Номер заказа', { index: 1 }),
    контрагент: belongsTo('i-i-s-probapyat-контрагент', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 2 })
    }, { index: -1, hidden: true }),
    мастер: belongsTo('i-i-s-probapyat-мастер', 'Мастер', {
      фИО: attr('Мастер', { index: 3 })
    }, { index: -1, hidden: true }),
    итог: attr('Итог', { index: 4 })
  });
};
