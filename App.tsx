import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeBaseProvider} from 'native-base';

import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

const App = () => {
  return (
    <NativeBaseProvider>
      <RegisterScreen />
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
