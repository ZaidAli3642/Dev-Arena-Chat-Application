import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './app/navigation';
import {Provider} from 'react-redux';
import configureStore from './app/redux/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <AuthNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
