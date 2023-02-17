import {all} from 'redux-saga/effects';
import {authSaga} from '../auth/authSaga';
import {searchSaga} from '../search/searchSaga';
import {userSaga} from '../user/userSaga';

export function* rootSagas() {
  yield all([authSaga(), userSaga(), searchSaga()]);
}
