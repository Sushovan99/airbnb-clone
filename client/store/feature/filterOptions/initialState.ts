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
