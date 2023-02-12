import {call, put, select, takeEvery} from 'redux-saga/effects';

import {
  pending,
  reject,
  setUser,
  success,
  userUpdate,
} from '../../reducers/authReducer';
import {User, userApi} from '../../../api/user/user';
import handleErrors from '../../../utils/errors';

interface UserInterface {
  type: string;
  payload: {
    userId: string;
    userInfo: User;
  };
}

function* userUpdateSaga(action: UserInterface): any {
  const token = yield select(state => state.auth.token);
  try {
    yield put(pending({}));

    const {userId, userInfo} = action.payload;
    const response = yield call(userApi(token).updateUser, userId, userInfo);

    yield put(setUser({userInfo: response.data.user}));
    yield put(success({}));
  } catch (error: any) {
    const message = handleErrors(error);

    yield put(reject({error: message}));
  }
}

export function* userSaga() {
  yield takeEvery(userUpdate.type, userUpdateSaga);
}
