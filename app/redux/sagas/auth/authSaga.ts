import {call, put, takeEvery} from 'redux-saga/effects';

import {
  register,
  login,
  pending,
  setUser,
  success,
  reject,
  setToken,
} from '../../reducers/authReducer';
import {authApi} from '../../../api/auth/auth';
import jwtDecode from 'jwt-decode';
import {navigation} from '../../../navigation/RootNavigation';
import {routes} from '../../../routes';
import handleErrors from '../../../utils/errors';

interface UserInterface {
  _id: string;
  username: string;
  email: string;
  name: string;
}

function* registerUserSaga(action: any): any {
  try {
    yield put(pending({}));
    const response: any = yield call(
      authApi().register,
      action.payload.userInfo,
    );

    const token = response.headers['x-auth-token'];
    const user = jwtDecode(token);

    yield put(setToken({token}));
    yield put(setUser({userInfo: user}));

    yield put(success({}));
    yield put(reject({error: null}));

    navigation.navigate(routes.InfoScreen);
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      return yield put(reject({error: error.response.data.message}));
    }
    if (error.response && error.response.status === 500) {
      return yield put(reject({error: error.response.data.message}));
    }

    yield put(reject({error: error.message}));
  }
}

function* loginSaga(action: any): any {
  try {
    yield put(pending({}));
    const response: any = yield call(authApi().login, action.payload.userInfo);

    const token = response.headers['x-auth-token'];
    const user: UserInterface = jwtDecode(token);

    yield put(setToken({token}));
    yield put(setUser({userInfo: user}));

    yield put(success({}));
    yield put(reject({error: null}));

    if (user && !user.name) {
      navigation.navigate(routes.InfoScreen);
    }
  } catch (error) {
    const message = handleErrors(error);

    yield put(reject({error: message}));
  }
}

export function* authSaga() {
  yield takeEvery(register.type, registerUserSaga);
  yield takeEvery(login.type, loginSaga);
}
