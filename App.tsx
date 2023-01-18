import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './app/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
