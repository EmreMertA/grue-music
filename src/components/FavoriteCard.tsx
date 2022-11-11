import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setCurrentTrack } from '../redux/player/playerSlice';
import { TrackType } from '../types/Track';
import { AiFillPlayCircle } from 'react-icons/Ai';
import { Link } from 'react-router-dom';
import { CityCharts } from '../types/CityCharts';

type Props = {
  track: any;
};

const FavoritesCard: React.FC<Props> = ({ track }) => {
  const dispatch = useAppDispatch();

  const addToPlayer = () => {
    const audio = {
      name: track.name,
      singer: track.singer,
      cover: track.cover,
      musicSrc: track.musicSrc,
    };

    dispatch(setCurrentTrack(audio));
  };

  return (
    <div className='w-56 flex flex-col  bg-white/25 h-72 rounded-xl cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div
          onClick={() => addToPlayer()}
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 rounded-t-xl group-hover:flex hidden`}
        >
          <AiFillPlayCircle className='text-4xl text-green-500' />
        </div>

        <img src={track.cover} alt='' className='rounded-t-xl h-56' />
      </div>

      <div className='flex flex-col justify-center  p-2 text-white'>
        <Link
          to={`/songs/${track.key}`}
          className='hover:text-green-300 cursor-pointer line-clamp-1 '
        >
          {track.name}
        </Link>
        <Link
          to={`/artist/${track.adamid}`}
          className='text-xs hover:text-green-400 cursor-pointer line-clamp-1 '
        >
          {track.singer}
        </Link>
      </div>
    </div>
  );
};

export default FavoritesCard;
