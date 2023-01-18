import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Select as AppSelect} from 'native-base';
import {colors} from '../config';
import {fonts} from '../utils';

interface OptionsInterface {
  label: string;
  value: string;
}

interface Props {
  placeholder?: string;
  backgroundColor?: string;
  onChange: () => any;
  options: OptionsInterface[];
}

const Select: React.FC<PropsWithChildren<Props>> = ({
  placeholder,
  backgroundColor = colors.lightBlack,
  onChange,
  options = [],
}) => {
  return (
    <AppSelect
      variant="unstyled"
      placeholder={placeholder}
      backgroundColor={backgroundColor}
      style={styles.select}
      letterSpacing={1}
      marginTop={2}
      marginBottom={2}
      onValueChange={onChange}>
      {options.map(option => (
        <AppSelect.Item
          label={option.label}
          value={option.value}></AppSelect.Item>
      ))}
    </AppSelect>
  );
};

export default Select;

const styles = StyleSheet.create({
  select: {
    fontSize: fonts.fontSize(16),
    color: colors.white,
    paddingRight: 10,
    paddingLeft: 10,
    aspectRatio: 1 / 0.17,
  },
});
