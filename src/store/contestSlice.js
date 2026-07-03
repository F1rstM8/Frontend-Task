import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentContest: {
    id: 1,
    title: 'Contest1',
    typeOfName: 'Company',
    styleOfName: 'Classic',
    prize: 100,
    entries: 2,
    contestHolder: {
      displayName: 'buyerfn buyerln buyerdn',
      email: 'buyer@example.com' // <-- Саме цей email ми маємо дістати і показати!
    }
  }
};

const contestSlice = createSlice({
  name: 'contest',
  initialState,
  reducers: {},
});

export default contestSlice.reducer;