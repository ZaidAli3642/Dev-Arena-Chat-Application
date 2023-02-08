import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: null,
  token: null,
  success: false,
  error: null,
  imageModal: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload.userInfo;
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
  },
});

export default authSlice.reducer;
export const {pending, reject, success, imageModalVisibled, setUser} =
  authSlice.actions;
