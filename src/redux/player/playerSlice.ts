import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TrackType } from '../../types/Track';

interface PlayerState {
  list: any[];
  currentTrack: TrackType | null;
}

const initialState: PlayerState = {
  list: [],
  currentTrack: null,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<object>) => {
      state.list.shift();
      state.list.unshift(action.payload);
    },
    updatePlayList: (state, action: PayloadAction<Array<object>>) => {
      state.list = action.payload;
    },
    addQueue: (state, action: PayloadAction<object>) => {
      state.list.push(action.payload);
    },
  },
});

export const { setCurrentTrack, updatePlayList, addQueue } =
  playerSlice.actions;

export default playerSlice.reducer;