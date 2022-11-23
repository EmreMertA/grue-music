import React, { useEffect, useState } from 'react';
import ContextMenu from '../components/ContextMenu';
import SongCard from '../components/SongCard';
import { useGetTrChartsQuery } from '../services/shazamApi';
import { genres } from '../constants/genres';
import CardLoader from '../components/Loaders/CardLoader';
import CardLoaderContainer from '../components/Loaders/CardLoader';

type Props = {};

const Home = (props: Props) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const [genre, setGenre] = useState<string>('ROCK');
  const [selectedSong, setSelectedSong] = useState<{
    name: string;
    singer: string;
    cover: string;
    musicSrc: string | undefined;
    adamid: string;
    key: string;
  }>({
    name: '',
    singer: '',
    cover: '',
    musicSrc: '',
    adamid: '',
    key: '',
  });

  const [points, setPoints] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const { data, error, isLoading } = useGetTrChartsQuery(genre);

  useEffect(() => {
    const handleClick = () => setShowContextMenu(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
  console.log(data);

  return (
    <div className='overflow-y-scroll h-full flex flex-wrap  sm:gap-y-10 sm:gap-x-2 gap-3  md:px-10  justify-around pb-20'>
      <div className='sticky w-full top-0  glassmorphism flex items-center   justify-between px-4 h-12 z-10'>
        <h1 className='text-2xl text-white'>Discover</h1>
        <select
          name='category'
          className='bg-gray-700 rounded-lg text-white w-24  py-1 px-1 text-sm '
          onChange={(e) => setGenre(e.target.value)}
        >
          {genres.map((genre, i) => (
            <option key={i} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      {isLoading === true && <CardLoaderContainer />}
      {data?.map((item: any) => (
        <div
          key={item.key}
          onContextMenu={(e) => {
            console.log('Context Menu Opened');
            e.preventDefault();
            setSelectedSong({
              name: item.title,
              singer: item.subtitle,
              cover: item.images.coverart,
              musicSrc: item.hub.actions?.[1].uri,
              adamid: item?.artists[0].adamid,
              key: item.key,
            });
            setShowContextMenu(true);
            setPoints({ x: e.pageX, y: e.pageY });
          }}
        >
          <SongCard track={item} />
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

export default React.memo(Home);
