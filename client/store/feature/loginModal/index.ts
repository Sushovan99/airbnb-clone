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
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = loginModalSlice.actions;

export default loginModalSlice.reducer;
