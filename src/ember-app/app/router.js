import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probapyat-журнал-заказов-l');
  this.route('i-i-s-probapyat-журнал-заказов-e',
  { path: 'i-i-s-probapyat-журнал-заказов-e/:id' });
  this.route('i-i-s-probapyat-журнал-заказов-e.new',
  { path: 'i-i-s-probapyat-журнал-заказов-e/new' });
  this.route('i-i-s-probapyat-заказ-l');
  this.route('i-i-s-probapyat-заказ-e',
  { path: 'i-i-s-probapyat-заказ-e/:id' });
  this.route('i-i-s-probapyat-заказ-e.new',
  { path: 'i-i-s-probapyat-заказ-e/new' });
  this.route('i-i-s-probapyat-контрагент-l');
  this.route('i-i-s-probapyat-контрагент-e',
  { path: 'i-i-s-probapyat-контрагент-e/:id' });
  this.route('i-i-s-probapyat-контрагент-e.new',
  { path: 'i-i-s-probapyat-контрагент-e/new' });
  this.route('i-i-s-probapyat-мастер-l');
  this.route('i-i-s-probapyat-мастер-e',
  { path: 'i-i-s-probapyat-мастер-e/:id' });
  this.route('i-i-s-probapyat-мастер-e.new',
  { path: 'i-i-s-probapyat-мастер-e/new' });
  this.route('i-i-s-probapyat-номенклатура-l');
  this.route('i-i-s-probapyat-номенклатура-e',
  { path: 'i-i-s-probapyat-номенклатура-e/:id' });
  this.route('i-i-s-probapyat-номенклатура-e.new',
  { path: 'i-i-s-probapyat-номенклатура-e/new' });
});

export default Router;
