import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  searchUsersResult: [],
  calling: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    searchUsers: (state, action) => {
      state.searchUsersResult = action.payload.users;
    },
    search: (state, action) => {
      state.calling = true;
    },
  },
});

export default usersSlice.reducer;
export const {searchUsers, search} = usersSlice.actions;
