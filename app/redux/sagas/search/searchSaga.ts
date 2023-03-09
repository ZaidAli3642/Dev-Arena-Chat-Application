import {call, put, select, takeEvery} from 'redux-saga/effects';
import {searchApi} from '../../../api/search/searchUsers';
import handleErrors from '../../../utils/errors';
import {reject} from '../../reducers/authReducer';
import {search, searchUsers} from '../../reducers/usersReducer';

function* searchUserSaga(action: any): any {
  const token = yield select(state => state.auth.token);
  try {
    const search = action.payload.search;
    const userId = action.payload.userId;

    const response = yield call(searchApi(token).searchUser, search, userId);

    yield put(searchUsers({users: response.data.users}));
    yield put(reject({error: null}));
  } catch (error: any) {
    const message = handleErrors(error);

    yield put(reject({error: message}));
  }
}

export function* searchSaga() {
  yield takeEvery(search.type, searchUserSaga);
}
