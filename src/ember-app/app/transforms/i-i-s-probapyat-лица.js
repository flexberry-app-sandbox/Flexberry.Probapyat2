import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЛицаEnum from '../enums/i-i-s-probapyat-лица';

export default FlexberryEnum.extend({
  enum: ЛицаEnum,
  sourceType: 'IIS.Probapyat.Лица'
});
