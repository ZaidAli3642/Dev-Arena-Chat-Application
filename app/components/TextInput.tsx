import {StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Icon, Input} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../config';
import {fonts} from '../utils';

type TextInputType = React.FC<
  PropsWithChildren<{
    placeholder?: string;
    secureTextEntry?: boolean;
    maxHeight?: number;
    multiline?: boolean;
    onChange: (value: any) => void;
  }>
>;

const TextInput: TextInputType = ({
  placeholder,
  secureTextEntry,
  maxHeight,
  multiline,
  onChange,
}) => {
  return (
    <Input
      placeholder={placeholder}
      style={styles.input}
      backgroundColor={colors.lightBlack}
      borderWidth={2}
      paddingLeft={5}
      letterSpacing={2}
      borderTopWidth="0"
      borderBottomWidth="0"
      borderLeftWidth="0"
      borderRightWidth="0"
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
        <Icon
          as={<MaterialCommunityIcons name="email" />}
          color={colors.white}
          size={5}
          ml={2}
        />
      }
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    fontSize: fonts.fontSize(25),
    color: colors.white,
    paddingLeft: 10,
    paddingRight: 10,
    aspectRatio: 1 / 0.17,
  },
});
