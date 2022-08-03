import { createSlice } from '@reduxjs/toolkit';

interface FilterOptionState {
  filterOptions: 'where' | 'check in' | 'who' | '';
  resetStateRan: boolean;
  where: {
    isActive: boolean;
  };
  checkIn: {
    isActive: boolean;
  };
  checkOut: {
    isActive: boolean;
  };
  who: {
    isActive: boolean;
  };
}

const initialState: FilterOptionState = {
  filterOptions: '',
  resetStateRan: false,
  where: {
    isActive: false,
  },
  checkIn: {
    isActive: false,
  },

  checkOut: {
    isActive: false,
  },

  who: {
    isActive: false,
  },
};

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
    },

    toggleCheckout(state) {
      state.checkOut.isActive = !state.checkOut.isActive;
      state.checkIn.isActive = false;
      state.who.isActive = false;
      state.where.isActive = false;
    },

    toggleCheckIn(state) {
      state.checkIn.isActive = !state.checkIn.isActive;
      state.checkOut.isActive = false;
      state.who.isActive = false;
      state.where.isActive = false;
    },

    toggleGuest(state) {
      state.who.isActive = !state.who.isActive;
      state.checkIn.isActive = false;
      state.checkOut.isActive = false;
      state.where.isActive = false;
    },

    resetFilterState(state) {
      state.where.isActive = false;
      state.checkIn.isActive = false;
      state.checkOut.isActive = false;
      state.who.isActive = false;
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
} = filterOptionSlice.actions;

export default filterOptionSlice.reducer;
