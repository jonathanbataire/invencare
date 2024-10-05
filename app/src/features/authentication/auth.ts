import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@app/store';
import { userInfo } from '@apptypes';

export interface authState {
  userInfo: userInfo | object,
  userToken: string | null,
  error: string | null,
  isAuthenticated: boolean
}
//TODO check for persisted auth data first
const initialState: authState = {
  userInfo: {},
  userToken: null,
  error: null,
  isAuthenticated: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, authInfo: PayloadAction<authState>) => {
      state.userInfo = authInfo.payload.userInfo;
      state.userToken = authInfo.payload.userToken;
      state.isAuthenticated = true;
      //TO DO persist token
    },
    logout: (state) => {
      state.userInfo = {};
      state.userToken = null;
      state.isAuthenticated = false;
      //TO DO remove persisted token
    }
  },
});

export const { authenticate, logout } = authSlice.actions;

export const selectUserAuth = (state: RootState) => state.auth;
export default authSlice.reducer;