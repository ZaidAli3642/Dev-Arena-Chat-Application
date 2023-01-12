import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeBaseProvider} from 'native-base';

import LoginScreen from './app/screens/LoginScreen';

const App = () => {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
