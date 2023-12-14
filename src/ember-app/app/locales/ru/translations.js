import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probapyat',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probapyat',
          title: 'Probapyat'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
