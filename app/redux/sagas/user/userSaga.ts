import {call, put, select, takeEvery} from 'redux-saga/effects';

import {
  imageUpload,
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

function* uploadFileSaga(action: UserInterface): any {
  const token = yield select(state => state.auth.token);
  try {
    const {userInfo, userId} = action.payload;

    yield put(pending({}));

    const url = yield call(userApi(token).uploadFile, userInfo);

    const response = yield call(userApi(token).updateUser, userId, {
      type: 1,
      imageUri: url,
    });

    yield put(setUser({userInfo: response.data.user}));
    yield put(success({}));
    yield put(reject({error: null}));
  } catch (error) {
    const message = handleErrors(error);

    yield put(reject({error: message}));
  }
}

export function* userSaga() {
  yield takeEvery(userUpdate.type, userUpdateSaga);
  yield takeEvery(imageUpload.type, uploadFileSaga);
}
