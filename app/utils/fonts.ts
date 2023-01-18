import {Dimensions, PixelRatio} from 'react-native';

interface FontSize {
  (fontSize: number): number;
}

const fontSize: FontSize = (fontSize: number): number => {
  const {width, fontScale, scale} = Dimensions.get('screen');

  return fontSize * fontScale;
};
export default {
  fontSize,
};
