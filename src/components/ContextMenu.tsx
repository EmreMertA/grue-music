import React from 'react';
import { setCurrentTrack, addQueue } from '../redux/player/playerSlice';
import { useAppDispatch } from '../redux/hooks';
import type { ContextMenuTypes } from '../types/Track';



const ContextMenu: React.FC<ContextMenuTypes> = ({ top, left, song }) => {
  const dispatch = useAppDispatch();

  const addQueuee = () => {
    dispatch(addQueue(song));
  };

  return (
    <button
      className={`absolute hover:bg-slate-700  bg-gray-800 text-white rounded-md shadow-md p-2`}
      style={{ top: `${top + 10}px`, left: `${left + 10}px` }}
      onClick={() => addQueuee()}
    >
      <h1>Add Queue</h1>
    </button>
  );
};

export default ContextMenu;
