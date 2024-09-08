import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signOut } from 'next-auth/react';

export const signInUser = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        return rejectWithValue(result.error);
      }
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const signOutUser = createAsyncThunk('auth/signOut', async () => {
  await signOut({ redirect: false });
});

interface AuthState {
  user: { id: string; email: string; name: string } | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;