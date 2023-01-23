import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../config';

const Seperator = () => {
  return <View style={styles.seperator} />;
};

export default Seperator;

const styles = StyleSheet.create({
  seperator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
});
