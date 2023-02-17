import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';
import {persistStore, persistReducer} from 'redux-persist';
import Reactotron from '../../ReactotronConfig';

import createSagaMiddleware from 'redux-saga';
import {rootSagas} from './sagas/root/rootSagas';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export default function () {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({serializableCheck: false}),
      sagaMiddleware,
    ],

    enhancers: [Reactotron.createEnhancer!()],
  });

  sagaMiddleware.run(rootSagas);

  const persistedStore = persistStore(store);
  return {store, persistedStore};
}
