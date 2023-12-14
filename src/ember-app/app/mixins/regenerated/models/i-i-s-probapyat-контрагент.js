import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  иНН: DS.attr('number'),
  кодКонтрагента: DS.attr('number'),
  контрагент: DS.attr('string'),
  лицо: DS.attr('i-i-s-probapyat-лица'),
  почта: DS.attr('string'),
  телефон: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-probapyat-контрагент.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-probapyat-контрагент.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодКонтрагента: {
    descriptionKey: 'models.i-i-s-probapyat-контрагент.validations.кодКонтрагента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-probapyat-контрагент.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  лицо: {
    descriptionKey: 'models.i-i-s-probapyat-контрагент.validations.лицо.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-probapyat-контрагент.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-probapyat-контрагент.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентE', 'i-i-s-probapyat-контрагент', {
    кодКонтрагента: attr('Код контрагента', { index: 0 }),
    контрагент: attr('Контрагент', { index: 1 }),
    лицо: attr('Лицо', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    адрес: attr('Адрес', { index: 4 }),
    телефон: attr('Телефон', { index: 5 }),
    почта: attr('Почта', { index: 6 })
  });

  modelClass.defineProjection('КонтрагентL', 'i-i-s-probapyat-контрагент', {
    кодКонтрагента: attr('Код контрагента', { index: 0 }),
    контрагент: attr('Контрагент', { index: 1 }),
    лицо: attr('Лицо', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    адрес: attr('Адрес', { index: 4 }),
    телефон: attr('Телефон', { index: 5 }),
    почта: attr('Почта', { index: 6 })
  });
};
