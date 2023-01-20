import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {colors} from '../config';

const Screen: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mediumBlack,
  },
});
