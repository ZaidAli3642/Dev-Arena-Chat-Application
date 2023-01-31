import React, {useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './app/navigation';
import {Provider, useDispatch} from 'react-redux';
import configureStore from './app/redux/store';
import {success} from './app/redux/reducers/authReducer';

const store = configureStore();

console.log('store : ', store);

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
