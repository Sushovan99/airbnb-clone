import { createSlice } from '@reduxjs/toolkit';

interface filterModalState {
  isModalOpen: boolean;
}

const initialState: filterModalState = {
  isModalOpen: false,
};

const filterModalSlice = createSlice({
  name: 'filterModal',
  initialState,
  reducers: {
    open(state) {
      state.isModalOpen = true;
    },
    close(state) {
      state.isModalOpen = false;
    },
  },
});

export const { open, close } = filterModalSlice.actions;

export default filterModalSlice.reducer;
