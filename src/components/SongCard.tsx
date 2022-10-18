import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setCurrentTrack } from '../redux/player/playerSlice';
import { TrackType } from '../types/Track';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/Ai';

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
  const activeSong = { title: 'Belki (Akustik)' };

  return (
    <div className='w-56 flex flex-col  bg-white/25 h-72 rounded-xl cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div
          onClick={() => addToPlayer()}
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 rounded-t-xl group-hover:flex hidden`}
        >
          <AiFillPlayCircle className='text-4xl text-green-500' />
        </div>

        <img
          src={track.images?.coverart}
          alt=''
          className='rounded-t-xl h-56'
        />
      </div>

      <div className='flex flex-col justify-center  p-2 text-white'>
        <a className='hover:text-green-300 cursor-pointer line-clamp-1 '>
          {track.title}
        </a>
        <a
          href='/#'
          className='text-xs hover:text-green-400 cursor-pointer line-clamp-1 '
        >
          {track.subtitle}
        </a>
      </div>
    </div>
  );
};

export default SongCard;
