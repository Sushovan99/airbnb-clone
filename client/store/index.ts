import { configureStore } from '@reduxjs/toolkit';
import footerModalReducer from './feature/footerModal';
import loginModalReducer from './feature/loginModal';
import filterTabReducer from './feature/filterTab';
import filterOptionReducer from './feature/filterOptions';

const store = configureStore({
  reducer: {
    footerModal: footerModalReducer,
    loginModal: loginModalReducer,
    filterTab: filterTabReducer,
    filterSearch: filterOptionReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
