import { configureStore } from '@reduxjs/toolkit';
import footerModalReducer from './feature/footerModal';
import loginModalReducre from './feature/loginModal';
import filterModalReducer from './feature/filterModal';
import filterTabReducer from './feature/filterTab';

const store = configureStore({
  reducer: {
    footerModal: footerModalReducer,
    loginModal: loginModalReducre,
    filterModal: filterModalReducer,
    filterTab: filterTabReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
