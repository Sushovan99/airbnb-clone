import { configureStore } from '@reduxjs/toolkit';
import footerModalReducer from './feature/footerModal';
import loginModalReducre from './feature/loginModal';

const store = configureStore({
  reducer: {
    footerModal: footerModalReducer,
    loginModal: loginModalReducre,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
