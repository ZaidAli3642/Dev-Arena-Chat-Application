import {configureStore} from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';
import reducer from './reducer';

export default function () {
  return configureStore({
    reducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      createDebugger(),
    ],
  });
}
