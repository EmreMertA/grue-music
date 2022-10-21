import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/Fa';
import { Link, useLocation } from 'react-router-dom';
import { useGetTracksRelatedQuery } from '../services/shazamApi';
import { useAppDispatch } from '../redux/hooks';
import { setCurrentTrack } from '../redux/player/playerSlice';
import type { TracksRelated } from '../types/TracksRelated';
import ContextMenu from './ContextMenu';

type Props = {};

const RelatedSection = (props: Props) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);

  const [selectedSong, setSelectedSong] = useState<{
    name: string;
    singer: string;
    cover: string | undefined;
    musicSrc: string | undefined;
  }>({
    name: '',
    singer: '',
    cover: '',
    musicSrc: '',
  });

  const [points, setPoints] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetTracksRelatedQuery(path);

  useEffect(() => {
    const handleClick = () => setShowContextMenu(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const addToPlayer = (track: any) => {
    const audio = {
      name: track.title,
      singer: track.subtitle,
      cover: track.images.coverart,
      musicSrc: track.hub.actions?.[1].uri,
    };

    dispatch(setCurrentTrack(audio));
  };

  return (
    <div>
      <h1 className='text-white text-2xl font-bold px-16 py-8'>
        Related Songs
      </h1>
      <ul className='px-10'>
        {data?.map((track, i) => (
          <li
            className='flex flex-row items-center justify-between px-4 py-2  text-white rounded-md
                    hover:bg-teal-200 hover:bg-opacity-20 transition-all duration-400 ease-in-out'
            onContextMenu={(e) => {
              console.log('Context Menu Opened');
              e.preventDefault();
              setSelectedSong({
                name: track.title,
                singer: track.subtitle,
                cover: track.images?.coverart,
                musicSrc: track.hub.actions?.[1].uri,
              });
              setShowContextMenu(true);
              setPoints({ x: e.pageX, y: e.pageY });
            }}
          >
            <div className='flex flex-row items-center space-x-2 pr-2'>
              <p className='text-gray-300'>{i + 1}</p>
              <img src={track.images?.coverart} alt='' className='w-14 ' />
              <div className='flex flex-col  w-52'>
                <Link
                  to={`/songs/${track.key}`}
                  className='hover:text-teal-400 cursor-pointer line-clamp-1 '
                >
                  {track.title}
                </Link>
                <span className='text-gray-300 hover:text-teal-400 cursor-pointer line-clamp-1'>
                  {track.subtitle}
                </span>
              </div>
            </div>

            <button>
              <FaPlay onClick={() => addToPlayer(track)} className='text-xl' />
            </button>
          </li>
        ))}
      </ul>
      {showContextMenu && (
        <ContextMenu top={points.y} left={points.x} song={selectedSong} />
      )}
    </div>
  );
};

export default RelatedSection;