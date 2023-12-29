import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказы.caption'),
          title: i18n.t('forms.application.sitemap.заказы.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.заказы.справочники.caption'),
            title: i18n.t('forms.application.sitemap.заказы.справочники.title'),
            children: [{
              link: 'i-i-s-probapyat-контрагент-l',
              caption: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probapyat-контрагент-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probapyat-контрагент-l.title'),
              icon: 'edit',
              children: null
            }, {
              link: 'i-i-s-probapyat-мастер-l',
              caption: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probapyat-мастер-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probapyat-мастер-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-probapyat-номенклатура-l',
              caption: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probapyat-номенклатура-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.справочники.i-i-s-probapyat-номенклатура-l.title'),
              icon: 'phone',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.заказы.документация.caption'),
            title: i18n.t('forms.application.sitemap.заказы.документация.title'),
            children: [{
              link: 'i-i-s-probapyat-журнал-заказов-l',
              caption: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probapyat-журнал-заказов-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probapyat-журнал-заказов-l.title'),
              icon: 'tasks',
              children: null
            }, {
              link: 'i-i-s-probapyat-заказ-l',
              caption: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probapyat-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.заказы.документация.i-i-s-probapyat-заказ-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})