import {
  // createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

// const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (userId, thunkAPI) => {
//   const response = await userAPI.fetchById(userId);
//   return response.data;
// });
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
  },
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
  },
});

export const { setToken } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
