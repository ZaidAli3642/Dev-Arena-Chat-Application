import React from 'react';
import {Icon, IconButton, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
