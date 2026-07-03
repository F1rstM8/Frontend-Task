import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    firstName: 'Test',
    lastName: 'Testovich',
    displayName: 'TestName',
    role: 'creator', 
  },
  isAuth: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}, 
});

export default userSlice.reducer;