import React, { useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import TopChartsLoaderContainer from '../Loaders/TopChartsLoader';
import TopChartsLoader from '../Loaders/TopChartsLoader';
import { useAppDispatch } from '../../redux/hooks';
import { setCurrentTrack } from '../../redux/player/playerSlice';
import { useGetWorldChartsQuery } from '../../services/shazamApi';
type Props = {};

const Charts = (props: Props) => {
  const { data, error, isLoading } = useGetWorldChartsQuery();

  const dispatch = useAppDispatch();

  console.log('re rendered');
  const addToPlayer = (track: any) => {
    const audio = {
      name: track.title,
      singer: track.subtitle,
      cover: track.images.coverart,
      musicSrc: track.hub.actions?.[1].uri,
      adamid: track.adamid,
      key: track.key,
    };

    dispatch(setCurrentTrack(audio));
  };
  return (
    /* Top Charts */
    <div className=' lg:flex justify-start hidden max-w-md flex-col p-2'>
      <div>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-md text-white font-bold'>Top Charts</h1>
        </div>
        {isLoading === true && <TopChartsLoaderContainer />}
        <ul>
          {data?.slice(0, 5).map((track: any, i: number) => (
            <li
              key={i}
              className='flex flex-row items-center justify-between p-2 text-white rounded-sm
        hover:bg-teal-200 hover:bg-opacity-20 transition-all duration-400 ease-in-out'
            >
              <div className='flex flex-row items-center space-x-2 pr-2'>
                <p className='text-gray-300'>{i + 1}</p>
                <img
                  src={track.images?.coverart}
                  alt={track.title}
                  className='w-14 '
                />
                <div className='flex flex-col  w-52'>
                  <Link
                    to={`/songs/${track.key}`}
                    className='hover:text-teal-400 cursor-pointer line-clamp-1 '
                  >
                    {track.title}
                  </Link>
                  <span className='text-gray-300 hover:text-teal-400 cursor-pointer line-clamp-1'>
                    {track.subtitle}{' '}
                  </span>
                </div>
              </div>

              <button onClick={() => addToPlayer(track)}>
                <BsFillPlayCircleFill className='text-xl' />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Charts);
