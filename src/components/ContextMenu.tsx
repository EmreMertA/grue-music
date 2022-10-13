import React from 'react';
import { setCurrentTrack, addQueue } from '../redux/player/playerSlice';
import { useAppDispatch } from '../redux/hooks';

type Props = {
  top: number;
  left: number;
  song: {
    name: string;
    singer: string;
    cover: string;
    musicSrc: string | undefined;
  };
};

const ContextMenu: React.FC<Props> = ({ top, left, song }) => {
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
