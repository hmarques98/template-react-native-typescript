import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { log } from '../utils/console';
import { ENV } from '@env';

export type RootState = ReturnType<typeof store.getState>;
log({ ENV });

const middlewares: any[] = [];

const dev = ENV === 'dev';

if (dev) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
const store = configureStore({
  reducer: rootReducer,
  devTools: dev,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
