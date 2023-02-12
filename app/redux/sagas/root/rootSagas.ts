import {all} from 'redux-saga/effects';
import {authSaga} from '../auth/authSaga';
import {userSaga} from '../user/userSaga';

export function* rootSagas() {
  yield all([authSaga(), userSaga()]);
}
