import {combineReducers} from 'redux';
import {authReducer, usersReducer} from './reducers';

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
});
