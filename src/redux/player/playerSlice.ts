import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface PlayerState {
  value: any[];
}

const initialState: PlayerState = {
  value: [],
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<object>) => {
      state.value.push(action.payload);
    },
    updatePlayList: (state, action: PayloadAction<Array<object>>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentTrack, updatePlayList } = playerSlice.actions;

export default playerSlice.reducer;
 