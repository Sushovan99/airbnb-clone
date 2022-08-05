import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterOptionSlice = createSlice({
  name: 'filterOptions',
  initialState,
  reducers: {
    selectSearchFilter(state, action) {
      state.filterOptions = action.payload;

      if (state.filterOptions === 'where') {
        state.where.isActive = true;
      }

      if (state.filterOptions === 'check in') {
        state.checkIn.isActive = true;
      }

      if (state.filterOptions === 'who') {
        state.who.isActive = true;
      }
    },

    toggleLocation(state) {
      state.where.isActive = true;
      state.checkIn.isActive = false;
      state.checkOut.isActive = false;
      state.who.isActive = false;
      state.resetStateRan = false;
    },

    toggleCheckout(state) {
      state.checkOut.isActive = !state.checkOut.isActive;
      state.checkIn.isActive = false;
      state.who.isActive = false;
      state.where.isActive = false;
      state.resetStateRan = false;
    },

    toggleCheckIn(state) {
      state.checkIn.isActive = !state.checkIn.isActive;
      state.checkOut.isActive = false;
      state.who.isActive = false;
      state.where.isActive = false;
      state.resetStateRan = false;
    },

    toggleGuest(state) {
      state.who.isActive = !state.who.isActive;
      state.checkIn.isActive = false;
      state.checkOut.isActive = false;
      state.where.isActive = false;
      state.resetStateRan = false;
    },

    // Closing all ACTIVE filters
    resetFilterState(state) {
      state.where.isActive = false;
      state.checkIn.isActive = false;
      state.checkOut.isActive = false;
      state.who.isActive = false;
      state.resetStateRan = true;
    },

    addGuest(
      state,
      action: { payload: 'adult' | 'children' | 'infant' | 'pets' }
    ) {
      if (action.payload === 'adult') {
        state.who.adult.value += 1;
      }
      if (action.payload === 'children') {
        if (state.who.children.value === 0) {
          state.who.children.value += 1;
          state.who.adult.value += 1;
        } else {
          state.who.children.value += 1;
        }
      }
      if (action.payload === 'infant') {
        if (state.who.infant.value === 0) {
          state.who.infant.value += 1;
          state.who.adult.value += 1;
        } else {
          state.who.infant.value += 1;
        }
      }
      if (action.payload === 'pets') {
        if (state.who.pets.value === 0) {
          state.who.pets.value += 1;
          state.who.adult.value += 1;
        } else {
          state.who.pets.value += 1;
        }
      }
    },

    removeGuest(
      state,
      action: { payload: 'adult' | 'children' | 'infant' | 'pets' }
    ) {
      if (action.payload === 'adult') {
        if (state.who.adult.value > 0) state.who.adult.value -= 1;
      }
      if (action.payload === 'children') {
        if (state.who.children.value > 0) state.who.children.value -= 1;
      }
      if (action.payload === 'infant') {
        if (state.who.infant.value > 0) state.who.infant.value -= 1;
      }
      if (action.payload === 'pets') {
        if (state.who.pets.value > 0) state.who.pets.value -= 1;
      }
    },

    // Reseting the values of all guest types (i.e adult, children...)
    resetGuestFilter(state) {
      state.who.isActive = !state.who.isActive;
      state.who.adult.value = 0;
      state.who.children.value = 0;
      state.who.infant.value = 0;
      state.who.pets.value = 0;
    },
  },
});

export const {
  selectSearchFilter,
  toggleCheckIn,
  toggleCheckout,
  toggleGuest,
  toggleLocation,
  resetFilterState,
  addGuest,
  removeGuest,
  resetGuestFilter,
} = filterOptionSlice.actions;

export default filterOptionSlice.reducer;
