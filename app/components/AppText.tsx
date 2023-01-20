import React, {PropsWithChildren} from 'react';
import {Text} from 'native-base';
import {colors} from '../config';
import {fonts} from '../utils';
import {fonts as customFont} from '../config';

interface Props {
  title: string | number;
  onPress?: () => void;
  color?: string;
  fontSize?: number;
  ml?: string | number;
  fontWeight?: string;
  fontFamily?: string;
  styles?: object;
}

const AppText: React.FC<PropsWithChildren<Props>> = ({
  title,
  onPress,
  color = colors.white,
  fontSize = fonts.fontSize(15),
  ml,
  fontWeight = 'normal',
  fontFamily,
  styles,
}) => {
  return (
    <Text
      style={[styles]}
      fontFamily={fontFamily}
      onPress={onPress}
      ml={ml}
      fontWeight={fontWeight}
      color={color}
      fontSize={fonts.fontSize(fontSize)}>
      {title}
    </Text>
  );
};

export default AppText;
