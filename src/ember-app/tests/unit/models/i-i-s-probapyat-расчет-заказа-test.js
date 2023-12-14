import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probapyat-расчет-заказа', 'Unit | Model | i-i-s-probapyat-расчет-заказа', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probapyat-журнал-заказов',
    'model:i-i-s-probapyat-заказ',
    'model:i-i-s-probapyat-контрагент',
    'model:i-i-s-probapyat-мастер',
    'model:i-i-s-probapyat-номенклатура',
    'model:i-i-s-probapyat-расчет-заказа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
