import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface User {
  id: number;
  username: string;
  displayName: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize(state, action: PayloadAction<User>) {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
    logout(state) {
      // eslint-disable-next-line no-param-reassign
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const {authorize, logout} = authSlice.actions;
