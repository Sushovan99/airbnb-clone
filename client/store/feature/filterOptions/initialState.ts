interface FilterOptionState {
  filterOptions: 'where' | 'check in' | 'who' | '';
  resetStateRan: boolean;
  where: {
    isActive: boolean;
    value: string;
  };

  checkIn: {
    isActive: boolean;
    value: string;
  };

  checkOut: {
    isActive: boolean;
    value: string;
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
    value: '',
  },

  checkIn: {
    isActive: false,
    value: '',
  },

  checkOut: {
    isActive: false,
    value: '',
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
