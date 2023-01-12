import {Dimensions} from 'react-native';

interface FontSize {
  (fontSize: number): number;
}
const fontSize: FontSize = (fontSize: number): number =>
  Dimensions.get('screen').width / fontSize;

export default {
  fontSize,
};
