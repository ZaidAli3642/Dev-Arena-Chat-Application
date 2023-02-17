import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Icon, Input} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {colors} from '../config';
import {fonts} from '../utils';
import AppIcon from './AppIcon';
import ErrorMessage from './ErrorMessage';

type TextInputType = React.FC<
  PropsWithChildren<{
    placeholder?: string;
    maxHeight?: number;
    multiline?: boolean;
    onChange: (value: any) => void;
    onSearch: () => void;
    flex?: number;
    marginLeft?: number;
    marginRight?: number;
    error?: string;
  }>
>;

const Search: TextInputType = ({
  placeholder,
  onChange,
  onSearch,
  flex,
  marginLeft,
  marginRight,
}) => {
  return (
    <Input
      flex={flex}
      rounded={'xl'}
      placeholder={placeholder}
      style={styles.input}
      backgroundColor={colors.lightBlack}
      letterSpacing={1}
      height={45}
      marginLeft={marginLeft}
      marginRight={marginRight}
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
