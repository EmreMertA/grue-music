import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setCurrentTrack } from '../redux/player/playerSlice';
import { TrackType } from '../types/Track';

type Props = {
  track: TrackType;
};

const SongCard: React.FC<Props> = ({ track }) => {
  const dispatch = useAppDispatch();

  const addToPlayer = () => {
    const audio = {
      name: track.title,
      singer: track.subtitle,
      cover: track.images.coverart,
      musicSrc: track.hub.actions?.[1].uri,
    };

    dispatch(setCurrentTrack(audio));
  };

  return (
    <div
      className='w-[220px] flex flex-col  bg-white/25 h-72 rounded-xl cursor-pointer'
      onClick={() => addToPlayer()}
    >
      <img src={track.images?.coverart} alt='' className=' rounded-t-xl' />
      <div className='flex flex-col justify-center  p-2 text-white'>
        <a className='hover:text-green-300 cursor-pointer line-clamp-1 '>
          {track.title}
        </a>
        <a className='text-xs hover:text-green-400 cursor-pointer line-clamp-1 '>
          {track.subtitle}
        </a>
      </div>
    </div>
  );
};

export default SongCard;
