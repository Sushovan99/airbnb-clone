import { createSlice } from '@reduxjs/toolkit';

interface IState {
  stays: boolean;
  experiences: boolean;
}

const initialState: IState = {
  stays: true,
  experiences: false,
};

const tabSlice = createSlice({
  name: 'Tab',
  initialState,
  reducers: {
    staysActive(state) {
      state.stays = true;
      state.experiences = false;
    },
    experiencesActive(state) {
      state.experiences = true;
      state.stays = false;
    },
  },
});

export const { staysActive, experiencesActive } = tabSlice.actions;

export default tabSlice.reducer;
