import {combineReducers} from 'redux';
import {authReducer, messagesReducer, usersReducer} from './reducers';

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  messages: messagesReducer,
});
