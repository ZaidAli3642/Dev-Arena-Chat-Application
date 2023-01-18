import {StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Icon, Input} from 'native-base';

import {colors} from '../config';
import {fonts} from '../utils';
import AppIcon from './AppIcon';

type TextInputType = React.FC<
  PropsWithChildren<{
    placeholder?: string;
    secureTextEntry?: boolean;
    maxHeight?: number;
    multiline?: boolean;
    onChange: (value: any) => void;
    IconComponent?: React.FC<PropsWithChildren<{name?: string}>> | any;
    iconName?: string;
    iconColor?: string;
    iconSize?: string | number;
    autoFocus?: boolean;
  }>
>;

const TextInput: TextInputType = ({
  placeholder,
  secureTextEntry = false,
  maxHeight,
  multiline,
  onChange,
  IconComponent,
  iconName,
  iconColor = colors.white,
  iconSize = 5,
  autoFocus = false,
}) => {
  return (
    <Input
      placeholder={placeholder}
      style={styles.input}
      backgroundColor={colors.lightBlack}
      letterSpacing={1}
      borderTopWidth="0"
      borderBottomWidth="0"
      borderLeftWidth="0"
      borderRightWidth="0"
      autoCapitalize="none"
      autoCorrect={false}
      autoFocus={autoFocus}
      maxHeight={maxHeight}
      multiline={multiline}
      onChangeText={value => onChange(value)}
      _input={{
        cursorColor: colors.white,
        selectionColor: colors.white,
      }}
      marginTop={2}
      marginBottom={2}
      InputLeftElement={
        IconComponent && (
          <Icon
            as={IconComponent && <IconComponent name={iconName} />}
            size={iconSize}
            color={iconColor}
            ml={2}
          />
        )
      }
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    fontSize: fonts.fontSize(16),
    color: colors.white,
    paddingRight: 10,
    paddingLeft: 10,
    aspectRatio: 1 / 0.17,
  },
});
