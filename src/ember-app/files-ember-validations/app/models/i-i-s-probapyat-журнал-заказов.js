import {
  defineNamespace,
  defineProjections,
  Model as ЖурналЗаказовMixin
} from '../mixins/regenerated/models/i-i-s-probapyat-журнал-заказов';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЖурналЗаказовMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
