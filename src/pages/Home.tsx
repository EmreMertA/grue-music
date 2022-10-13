import React, { useEffect, useState } from 'react';
import ContextMenu from '../components/ContextMenu';
import SongCard from '../components/SongCard';
import { useGetTrChartsQuery } from '../services/shazamApi';

type Props = {};

const Home = (props: Props) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const [selectedSong, setSelectedSong] = useState<{
    name: string;
    singer: string;
    cover: string;
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

  const { data, error, isLoading } = useGetTrChartsQuery();

  useEffect(() => {
    const handleClick = () => setShowContextMenu(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);


  return (
    <div className='overflow-y-scroll h-full flex flex-wrap  sm:gap-y-10 sm:gap-x-2 gap-3  md:px-10  justify-around pb-20'>
      {data?.map((item) => (
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
            });
            setShowContextMenu(true);
            setPoints({ x: e.pageX, y: e.pageY });
          }}
        >
          <SongCard track={item} />
        </div>
      ))}

      {showContextMenu && (
        <ContextMenu top={points.y} left={points.x} song={selectedSong} />
      )}
    </div>
  );
};

export default Home;
