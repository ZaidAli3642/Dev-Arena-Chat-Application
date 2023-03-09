import {call, put, select, takeEvery} from 'redux-saga/effects';
import {conversationApi} from '../../../api/messages/conversation';
import {socket} from '../../../socket/socket';
import handleErrors from '../../../utils/errors';
import {reject} from '../../reducers/authReducer';
import {
  conversations,
  createConversation,
  getMessages,
  messages,
  setConversation,
  setConversations,
  setMessages,
} from '../../reducers/messagesReducers';

function* userConversationSaga(action: any): any {
  const token = yield select(state => state.auth.token);
  const user = yield select(state => state.auth.userInfo);
  try {
    const response = yield call(
      conversationApi(token).getConversation,
      user._id,
    );

    yield put(setConversations({conversations: response.data.conversation}));
    yield put(reject({error: null}));
  } catch (error: any) {
    const message = handleErrors(error);

    yield put(reject({error: message}));
  }
}

function* createUserConversationSaga(action: any): any {
  const token = yield select(state => state.auth.token);
  const user = yield select(state => state.auth.userInfo);
  try {
    const receiverId = action.payload.receiverId;
    const response = yield call(
      conversationApi(token).createConversation,
      user._id,
      receiverId,
    );

    yield put(setConversation({conversation: response.data.conversation[0]}));

    const {_id} = response.data.conversation[0];

    const messagesResponse = yield call(
      conversationApi(token).getMessages,
      _id,
    );

    yield put(setMessages(messagesResponse.data.messages));

    yield put(reject({error: null}));
  } catch (error: any) {
    const message = handleErrors(error);

    yield put(reject({error: message}));
  }
}

function* sendMessageSaga(action: any): any {
  const token = yield select(state => state.auth.token);
  try {
    const {
      message,
      conversationId,
      senderId: sender,
      receiverId,
    } = action.payload;
    const response = yield call(
      conversationApi(token).sendMessage,
      message,
      conversationId,
      sender,
    );

    socket.emit('send_message', {...response.data.message, receiverId});
    yield put(setMessages([response.data.message]));
    yield put(reject({error: null}));
  } catch (error: any) {
    const message = handleErrors(error);

    yield put(reject({error: message}));
  }
}

function* getMessagesSaga(action: any): any {
  const token = yield select(state => state.auth.token);
  try {
    const conversationId = action.payload.conversationId;

    const response = yield call(
      conversationApi(token).getMessages,
      conversationId,
    );

    yield put(setMessages({message: response.data.messages}));
    yield put(reject({error: null}));
  } catch (error: any) {
    const message = handleErrors(error);

    yield put(reject({error: message}));
  }
}

export function* conversationSaga() {
  yield takeEvery(conversations.type, userConversationSaga);
  yield takeEvery(createConversation.type, createUserConversationSaga);
  yield takeEvery(messages.type, sendMessageSaga);
  yield takeEvery(getMessages.type, getMessagesSaga);
}
