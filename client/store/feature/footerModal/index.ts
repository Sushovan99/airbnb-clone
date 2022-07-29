import { createSlice } from '@reduxjs/toolkit';

interface footerModalState {
  isModalOpen: boolean;
}

const initialState: footerModalState = {
  isModalOpen: false,
};

const footerModalSlice = createSlice({
  name: 'footerModal',
  initialState,
  reducers: {
    modalOpen(state): void {
      state.isModalOpen = true;
    },
    modalClose(state): void {
      state.isModalOpen = false;
    },
  },
});

export const { modalOpen, modalClose } = footerModalSlice.actions;

export default footerModalSlice.reducer;
