import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbapyatЖурналЗаказовLForm from './forms/i-i-s-probapyat-журнал-заказов-l';
import IISProbapyatЗаказLForm from './forms/i-i-s-probapyat-заказ-l';
import IISProbapyatКонтрагентLForm from './forms/i-i-s-probapyat-контрагент-l';
import IISProbapyatМастерLForm from './forms/i-i-s-probapyat-мастер-l';
import IISProbapyatНоменклатураLForm from './forms/i-i-s-probapyat-номенклатура-l';
import IISProbapyatЖурналЗаказовEForm from './forms/i-i-s-probapyat-журнал-заказов-e';
import IISProbapyatЗаказEForm from './forms/i-i-s-probapyat-заказ-e';
import IISProbapyatКонтрагентEForm from './forms/i-i-s-probapyat-контрагент-e';
import IISProbapyatМастерEForm from './forms/i-i-s-probapyat-мастер-e';
import IISProbapyatНоменклатураEForm from './forms/i-i-s-probapyat-номенклатура-e';
import IISProbapyatЖурналЗаказовModel from './models/i-i-s-probapyat-журнал-заказов';
import IISProbapyatЗаказModel from './models/i-i-s-probapyat-заказ';
import IISProbapyatКонтрагентModel from './models/i-i-s-probapyat-контрагент';
import IISProbapyatМастерModel from './models/i-i-s-probapyat-мастер';
import IISProbapyatНоменклатураModel from './models/i-i-s-probapyat-номенклатура';
import IISProbapyatРасчетЗаказаModel from './models/i-i-s-probapyat-расчет-заказа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probapyat-журнал-заказов': IISProbapyatЖурналЗаказовModel,
    'i-i-s-probapyat-заказ': IISProbapyatЗаказModel,
    'i-i-s-probapyat-контрагент': IISProbapyatКонтрагентModel,
    'i-i-s-probapyat-мастер': IISProbapyatМастерModel,
    'i-i-s-probapyat-номенклатура': IISProbapyatНоменклатураModel,
    'i-i-s-probapyat-расчет-заказа': IISProbapyatРасчетЗаказаModel
  },

  'application-name': 'Probapyat',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Probapyat',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probapyat',
          title: 'Probapyat'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        заказы: {
          caption: 'Заказы',
          title: 'Заказы',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-probapyat-контрагент-l': {
              caption: 'Контрагенты',
              title: 'Контрагент'
            },
            'i-i-s-probapyat-мастер-l': {
              caption: 'Мастера',
              title: 'Мастер'
            },
            'i-i-s-probapyat-номенклатура-l': {
              caption: 'Номенклатура',
              title: 'Номенклатура'
            }
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-probapyat-журнал-заказов-l': {
              caption: 'Журнал заказов',
              title: 'Журнал заказов'
            },
            'i-i-s-probapyat-заказ-l': {
              caption: 'Оформление заказов',
              title: 'Заказ'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probapyat-журнал-заказов-l': IISProbapyatЖурналЗаказовLForm,
    'i-i-s-probapyat-заказ-l': IISProbapyatЗаказLForm,
    'i-i-s-probapyat-контрагент-l': IISProbapyatКонтрагентLForm,
    'i-i-s-probapyat-мастер-l': IISProbapyatМастерLForm,
    'i-i-s-probapyat-номенклатура-l': IISProbapyatНоменклатураLForm,
    'i-i-s-probapyat-журнал-заказов-e': IISProbapyatЖурналЗаказовEForm,
    'i-i-s-probapyat-заказ-e': IISProbapyatЗаказEForm,
    'i-i-s-probapyat-контрагент-e': IISProbapyatКонтрагентEForm,
    'i-i-s-probapyat-мастер-e': IISProbapyatМастерEForm,
    'i-i-s-probapyat-номенклатура-e': IISProbapyatНоменклатураEForm
  },

});

export default translations;
