import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './player/playerSlice';
import { shazamApi } from '../services/shazamApi';

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    player: playerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
