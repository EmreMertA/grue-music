import React, { useEffect, useState } from 'react';
import ContextMenu from '../components/ContextMenu';
import FavoritesCard from '../components/FavoriteCard';

type Props = {};

const Favorites = (props: Props) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Array<object>>([]);

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

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
    const handleClick = () => setShowContextMenu(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className='overflow-y-scroll h-full flex flex-wrap  sm:gap-y-10 sm:gap-x-2 gap-3  md:px-10  justify-around pb-20'>
      <div className='sticky w-full top-0  glassmorphism flex items-center   justify-between px-4 h-12 z-10'>
        <h1 className='text-2xl text-white'>Favorites</h1>
      </div>
      {favorites?.map((item: any, i: number) => (
        <div
          key={i}
          onContextMenu={(e) => {
            console.log('Context Menu Opened');
            e.preventDefault();
            setSelectedSong({
              name: item.name,
              singer: item.singer,
              cover: item.cover,
              musicSrc: item.musicSrc,
              adamid: item.adamid,
              key: item.key,
            });
            setShowContextMenu(true);
            setPoints({ x: e.pageX, y: e.pageY });
          }}
        >
          <FavoritesCard track={item} />
        </div>
      ))}

      {showContextMenu && (
        <ContextMenu
          top={points.y}
          left={points.x}
          song={selectedSong}
          isFav={true}
        />
      )}
    </div>
  );
};

export default Favorites;
