import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Icon} from 'native-base';
import {colors} from '../config';

interface Props {
  IconComponent: React.ComponentType<PropsWithChildren<{name: string}>>;
  name: string;
  color?: string;
  size?: string | number;
  props?: object;
}

const AppIcon: React.FC<PropsWithChildren<Props>> = ({
  IconComponent,
  name,
  color = colors.white,
  size = 5,
  props,
}) => {
  if (!IconComponent) return null;

  return (
    <Icon
      as={<IconComponent name={name} />}
      color={color}
      size={size}
      {...props}
    />
  );
};

export default AppIcon;
