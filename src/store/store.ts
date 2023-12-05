import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from "./slices/weatherSlice"
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;