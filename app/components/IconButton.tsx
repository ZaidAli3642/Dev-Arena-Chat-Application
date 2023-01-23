import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {IconButton as NativeIconButton} from 'native-base';

import {colors} from '../config';
import AppIcon from './AppIcon';

interface Props {
  IconComponent: React.FC<PropsWithChildren<{name: string}>> | any;
  name: string;
  color?: string;
  size?: string | number;
  backgroundColor?: string;
}

const IconButton: React.FC<PropsWithChildren<Props>> = ({
  IconComponent,
  name,
  color = colors.white,
  size = 5,
  backgroundColor = colors.blue,
}) => {
  return (
    <NativeIconButton
      style={[styles.button, {backgroundColor: backgroundColor}]}
      rounded="lg"
      icon={
        <AppIcon
          IconComponent={IconComponent}
          name={name}
          color={color}
          size={size}
        />
      }
    />
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
});
