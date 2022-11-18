import React, { useEffect, useState } from 'react';
import ContextMenu from '../components/ContextMenu';
import SongCard from '../components/SongCard';
import { useSearchQuery } from '../services/shazamApi';
import { genres } from '../constants/genres';
import { useLocation } from 'react-router-dom';

type Props = {};

const Search = (props: Props) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const [selectedSong, setSelectedSong] = useState<{
    name: string;
    singer: string;
    cover: string;
    musicSrc: string | undefined;
    key: string;
    adamid: string | undefined;
  }>({
    name: '',
    singer: '',
    cover: '',
    musicSrc: '',
    key: '',
    adamid: '',
  });

  const [points, setPoints] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const location = useLocation();

  const param = location.pathname.split('/')[2];

  const { data, error, isLoading } = useSearchQuery(param);

  useEffect(() => {
    const handleClick = () => setShowContextMenu(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className='overflow-y-scroll h-full flex flex-wrap  sm:gap-y-10 sm:gap-x-2 gap-3  md:px-10  justify-around pb-20'>
      <div className='sticky w-full top-0  glassmorphism flex items-center   justify-between px-4 h-12 z-10'>
        <h1 className='text-2xl text-white'>Results</h1>
      </div>
      {data?.tracks.hits?.map((item) => (
        <div
          key={item.track.key}
          onContextMenu={(e) => {
            console.log('Context Menu Opened');
            e.preventDefault();
            setSelectedSong({
              name: item.track.title,
              singer: item.track.subtitle,
              cover: item.track.images.coverart,
              musicSrc: item.track.hub.actions?.[1].uri,
              key: item.track.key,
              adamid: item.track.artists[0].adamid,
            });
            setShowContextMenu(true);
            setPoints({ x: e.pageX, y: e.pageY });
          }}
        >
          <SongCard track={item.track} />
        </div>
      ))}

      {showContextMenu && (
        <ContextMenu
          top={points.y}
          left={points.x}
          song={selectedSong}
          isFav={false}
        />
      )}
    </div>
  );
};

export default Search;
