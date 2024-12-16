// ../store/redux/Login.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Example slice
const loginSlice = createSlice({
  name: 'login',
  initialState: { isLoggedIn: false, user: null },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      console.log(state.user)
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
