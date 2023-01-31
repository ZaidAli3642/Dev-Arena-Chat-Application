import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: {},
  token: null,
  success: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
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
export const {pending, reject, success} = authSlice.actions;
