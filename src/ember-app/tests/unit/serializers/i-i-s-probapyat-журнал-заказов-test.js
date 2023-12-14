import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probapyat-журнал-заказов', 'Unit | Serializer | i-i-s-probapyat-журнал-заказов', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probapyat-журнал-заказов',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probapyat-лица',
    'transform:i-i-s-probapyat-статус',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
