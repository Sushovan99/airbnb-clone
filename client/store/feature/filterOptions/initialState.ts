interface FilterOptionState {
  filterOptions: 'where' | 'check in' | 'who' | '';
  isFilterOpen: boolean;
  resetStateRan: boolean;
  where: {
    isActive: boolean;
    value: string;
  };

  checkIn: {
    isActive: boolean;
    value: string;
    day: number;
    month: string;
  };

  checkOut: {
    isActive: boolean;
    value: string;
    day: number;
    month: string;
  };

  who: {
    isActive: boolean;
    totalGuest: number;
    adult: {
      value: number;
    };

    children: {
      value: number;
    };

    infant: {
      value: number;
    };

    pets: {
      value: number;
    };
  };
}

export const initialState: FilterOptionState = {
  filterOptions: '',
  resetStateRan: false,
  isFilterOpen: false,

  where: {
    isActive: false,
    value: '',
  },

  checkIn: {
    isActive: false,
    value: '',
    day: 0,
    month: '',
  },

  checkOut: {
    isActive: false,
    value: '',
    day: 0,
    month: '',
  },

  who: {
    isActive: false,
    totalGuest: 0,

    adult: {
      value: 0,
    },

    children: {
      value: 0,
    },

    infant: {
      value: 0,
    },

    pets: {
      value: 0,
    },
  },
};
