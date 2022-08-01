import { createSlice } from '@reduxjs/toolkit';

interface FilterOptionState {
  filterOptions: 'where' | 'check in' | 'who' | '';
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
  },
});

export const { selectSearchFilter } = filterOptionSlice.actions;

export default filterOptionSlice.reducer;
