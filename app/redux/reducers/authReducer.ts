import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: null,
  token: null,
  success: false,
  error: null,
  imageModal: false,
  calling: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload.userInfo;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    imageModalVisibled: (state, action) => {
      state.imageModal = action.payload.imageModal;
    },
    pending: (state, action) => {
      state.loading = true;
    },
    success: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    reject: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
    login: (state, payload) => {
      state.calling = true;
    },
    register: (state, payload) => {
      state.calling = true;
    },
    userUpdate: (state, action) => {
      state.calling = true;
    },
    imageUpload: (state, action) => {
      state.calling = true;
    },
    logout: (state, action) => {
      state.userInfo = null;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const {
  pending,
  reject,
  success,
  imageModalVisibled,
  setUser,
  register,
  login,
  setToken,
  userUpdate,
  logout,
  imageUpload,
} = authSlice.actions;
