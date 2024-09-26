import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store';
import { authenticate } from './authAPI';

export type userInfo = {
  name: string,
  username: string
  role: Array<string>
}

export type Credentials = {
  username: string
  password: string
}

export interface authState {
  userInfo: userInfo | object,
  userToken: string | null,
  error: string | null,
  status: 'failed' | 'success' | 'loading' | 'idle'

}

const initialState: authState = {
  userInfo: {},
  userToken: null,
  error: null,
  status: 'idle'
}

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials) => {
    const response = await authenticate(credentials);
    return response;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //TODO: add logout reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'success';
        state.userInfo = action.payload;
        state.userToken = 'qwertyr';

      })
      .addCase(login.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectUserInfo = (state: RootState) => state.auth;
export default authSlice.reducer;