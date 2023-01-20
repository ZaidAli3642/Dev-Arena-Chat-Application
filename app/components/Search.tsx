import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Icon, Input} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    onSearch: () => void;
  }>
>;

const Search: TextInputType = ({
  placeholder,
  secureTextEntry = false,
  onChange,
  onSearch,
}) => {
  return (
    <Input
      flex={1}
      rounded={'xl'}
      placeholder={placeholder}
      style={styles.input}
      backgroundColor={colors.lightBlack}
      letterSpacing={1}
      height={45}
      borderTopWidth="0"
      borderBottomWidth="0"
      borderLeftWidth="0"
      borderRightWidth="0"
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={value => onChange(value)}
      _input={{
        cursorColor: colors.white,
        selectionColor: colors.white,
      }}
      marginTop={2}
      marginBottom={2}
      InputRightElement={
        <TouchableWithoutFeedback onPress={onSearch}>
          <View
            style={{
              width: 50,
              height: '100%',
              backgroundColor: colors.grey,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AppIcon IconComponent={FontAwesome} name="search" size={7} />
          </View>
        </TouchableWithoutFeedback>
      }
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    fontSize: fonts.fontSize(16),
    color: colors.white,
    paddingRight: 10,
    paddingLeft: 15,
  },
});
