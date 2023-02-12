import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import configureStore from './app/redux/store';
import Root from './app/Root';
import {navigation} from './app/navigation/RootNavigation';

const {store, persistedStore} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <NavigationContainer ref={navigation}>
          <Root />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
