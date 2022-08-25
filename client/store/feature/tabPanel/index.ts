import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const tabPanelSlice = createSlice({
  name: 'tabPanel',
  initialState,
  reducers: {
    openTabPanel(state) {
      state.isTabPanelOpen = true;
    },
    closeTabPanel(state) {
      state.isTabPanelOpen = false;
      state.hasClickedOutside = false;
      state.location.isActive = false;
      state.checkIn.isActive = false;
      state.checkOut.isActive = false;
      state.guest.isActive = false;
    },
    selectFilter(state, action: { payload: 'where' | 'check in' | 'guest' }) {
      if (action.payload === 'where') {
        state.location.isActive = true;
      }
      if (action.payload === 'check in') {
        state.checkIn.isActive = true;
      }
      if (action.payload === 'guest') {
        state.guest.isActive = true;
      }
    },
    setLocationActive(state) {
      state.location.isActive = true;
      state.checkIn.isActive = false;
      state.checkOut.isActive = false;
      state.guest.isActive = false;
      state.hasClickedOutside = false;
    },
    toggleCheckIn(state) {
      state.checkIn.isActive = !state.checkIn.isActive;
      state.guest.isActive = false;
      state.location.isActive = false;
      state.checkOut.isActive = false;
      state.hasClickedOutside = false;
    },
    toggleCheckOut(state) {
      state.checkOut.isActive = !state.checkOut.isActive;
      state.guest.isActive = false;
      state.location.isActive = false;
      state.checkIn.isActive = false;
      state.hasClickedOutside = false;
    },
    toggleGuest(state) {
      state.guest.isActive = !state.guest.isActive;
      state.checkOut.isActive = false;
      state.location.isActive = false;
      state.checkIn.isActive = false;
      state.hasClickedOutside = false;
    },
    updateLocationInput(state, action: { payload: string }) {
      const typedLocationQuery = action.payload;
      state.location.value =
        typedLocationQuery.charAt(0).toUpperCase() +
        typedLocationQuery.slice(1);
    },
    updateLocationOnClick(state, action: { payload: string }) {
      if (action.payload === "I'm flexible") {
        state.location.value = '';
        state.location.isActive = false;
        state.checkIn.isActive = true;
      } else {
        state.location.value = action.payload;
        state.location.isActive = false;
        state.checkIn.isActive = true;
      }
    },
    // Reducer logic for adding guests
    addGuest(
      state,
      action: { payload: 'adult' | 'children' | 'infant' | 'pets' }
    ) {
      if (action.payload === 'adult') {
        state.guest.adult.value += 1;
        state.guest.totalGuest += 1;
      }
      if (action.payload === 'children') {
        if (state.guest.children.value === 0) {
          state.guest.children.value += 1;
          state.guest.totalGuest += 1;
          if (!(state.guest.adult.value >= 1)) {
            state.guest.adult.value += 1;
            state.guest.totalGuest += 1;
          }
        } else {
          state.guest.children.value += 1;
          state.guest.totalGuest += 1;
        }
      }
      if (action.payload === 'infant') {
        if (state.guest.infant.value === 0) {
          state.guest.infant.value += 1;
          if (!(state.guest.adult.value >= 1)) state.guest.adult.value += 1;
        } else {
          state.guest.infant.value += 1;
        }
      }
      if (action.payload === 'pets') {
        if (state.guest.pets.value === 0) {
          state.guest.pets.value += 1;
          if (!(state.guest.adult.value >= 1)) state.guest.adult.value += 1;
        } else {
          state.guest.pets.value += 1;
        }
      }
    },

    // Reducer logic for removing guests
    removeGuest(
      state,
      action: { payload: 'adult' | 'children' | 'infant' | 'pets' }
    ) {
      if (action.payload === 'adult') {
        if (state.guest.adult.value > 0) {
          state.guest.adult.value -= 1;
          state.guest.totalGuest -= 1;
        }
      }
      if (action.payload === 'children') {
        if (state.guest.children.value > 0) {
          state.guest.children.value -= 1;
          state.guest.totalGuest -= 1;
        }
      }
      if (action.payload === 'infant') {
        if (state.guest.infant.value > 0) state.guest.infant.value -= 1;
      }
      if (action.payload === 'pets') {
        if (state.guest.pets.value > 0) state.guest.pets.value -= 1;
      }
    },

    // Reseting the values of all guest types (i.e adult, children...)
    resetGuestFilter(state) {
      state.guest.adult.value = 0;
      state.guest.children.value = 0;
      state.guest.infant.value = 0;
      state.guest.pets.value = 0;
      state.guest.totalGuest = 0;
    },

    // Updating the checkin date filter
    handleCheckIn(
      state,
      action: { payload: { value: string; day: number; month: string } }
    ) {
      state.checkIn.value = action.payload.value;
      state.checkIn.day = action.payload.day;
      state.checkIn.month = action.payload.month;
      state.checkIn.isActive = false;
      state.checkOut.isActive = true;
    },

    // Updating the checkout date filter
    handleCheckOut(
      state,
      action: { payload: { value: string; day: number; month: string } }
    ) {
      state.checkOut.value = action.payload.value;
      state.checkOut.day = action.payload.day;
      state.checkOut.month = action.payload.month;
    },

    clickedOutsideTabPanel(state) {
      state.hasClickedOutside = true;
      state.location.isActive = false;
      state.checkIn.isActive = false;
      state.checkOut.isActive = false;
      state.guest.isActive = false;
    },
  },
});

export const {
  openTabPanel,
  closeTabPanel,
  selectFilter,
  setLocationActive,
  toggleCheckIn,
  toggleCheckOut,
  handleCheckIn,
  handleCheckOut,
  updateLocationInput,
  updateLocationOnClick,
  addGuest,
  removeGuest,
  toggleGuest,
  resetGuestFilter,
  clickedOutsideTabPanel,
} = tabPanelSlice.actions;
export default tabPanelSlice.reducer;
