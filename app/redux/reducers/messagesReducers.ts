import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  conversations: [],
  conversation: {},
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setConversations: (state, action) => {
      state.conversations = action.payload.conversations;
      state.loading = false;
    },
    setConversation: (state, action) => {
      state.conversation = action.payload.conversation;
      state.loading = false;
    },
    conversations: (state, action) => {
      state.loading = true;
    },
    createConversation: (state, action) => {
      state.loading = true;
    },
    setMessages: (state, action) => {
      state.messages = [...state.messages, ...action.payload];
      state.loading = false;
    },
    clearMessages: (state, action) => {
      state.messages = [];
    },
    messages: (state, action) => {
      state.loading = true;
    },
    getMessages: (state, action) => {
      state.loading = true;
    },
  },
});

export default messagesSlice.reducer;
export const {
  setConversations,
  conversations,
  setMessages,
  setConversation,
  createConversation,
  messages,
  getMessages,
  clearMessages,
} = messagesSlice.actions;
