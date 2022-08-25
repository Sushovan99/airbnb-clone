interface InitialState {
  isTabPanelOpen: boolean;
  hasClickedOutside: boolean;

  location: {
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

  guest: {
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

export const initialState: InitialState = {
  isTabPanelOpen: false,
  hasClickedOutside: false,

  location: {
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

  guest: {
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
