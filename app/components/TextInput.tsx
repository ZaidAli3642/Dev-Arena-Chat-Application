import {StyleSheet, View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
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
    flex?: number;
    InputRightIcon?: React.FC<PropsWithChildren<{name?: string}>> | any;
    onLayout?: (event: object) => any;
    style?: object;
    marginTop?: number;
    marginBottom?: number;
    ref?: any;
  }>
>;

const TextInput: TextInputType = React.forwardRef(
  (
    {
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
      flex,
      marginTop = 2,
      marginBottom = 2,
    },
    ref,
  ) => {
    return (
      <Input
        ref={ref}
        flex={flex}
        placeholder={placeholder}
        style={[styles.input, {maxHeight: 100}]}
        backgroundColor={colors.lightBlack}
        letterSpacing={1}
        borderTopWidth="0"
        borderBottomWidth="0"
        borderLeftWidth="0"
        borderRightWidth="0"
        autoCapitalize="none"
        rounded={'xl'}
        autoCorrect={false}
        multiline={multiline}
        maxHeight={maxHeight}
        autoFocus={autoFocus}
        padding={4}
        onChangeText={value => onChange(value)}
        _input={{
          cursorColor: colors.white,
          selectionColor: colors.white,
        }}
        marginTop={marginTop}
        marginBottom={marginBottom}
        InputLeftElement={
          IconComponent && (
            <Icon
              as={IconComponent && <IconComponent name={iconName} />}
              size={iconSize}
              color={iconColor}
              ml={3}
            />
          )
        }
        secureTextEntry={secureTextEntry}
      />
    );
  },
);

export default TextInput;

const styles = StyleSheet.create({
  input: {
    fontSize: fonts.fontSize(16),
    color: colors.white,
    paddingRight: 10,
    paddingLeft: 10,
  },
});
