import { createSlice } from '@reduxjs/toolkit';

interface filterTabState {
  value: string;
}

const initialState: filterTabState = {
  value: 'one',
};

const filterTabSlice = createSlice({
  name: 'filterTab',
  initialState,
  reducers: {
    setValue(state, action: { payload: string }) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = filterTabSlice.actions;
export default filterTabSlice.reducer;
