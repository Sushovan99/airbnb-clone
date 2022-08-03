import { createSlice } from '@reduxjs/toolkit';

interface loginModalState {
  isOpen: boolean;
}

const initialState: loginModalState = {
  isOpen: false,
};

const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    toggle(state): void {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = loginModalSlice.actions;

export default loginModalSlice.reducer;
