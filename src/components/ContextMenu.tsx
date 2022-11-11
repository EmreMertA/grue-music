import React, { useState, useEffect } from 'react';
import { setCurrentTrack, addQueue } from '../redux/player/playerSlice';
import { useAppDispatch } from '../redux/hooks';
import type { ContextMenuTypes } from '../types/Track';

const ContextMenu: React.FC<ContextMenuTypes> = ({
  top,
  left,
  song,
  isFav,
}) => {
  const [favorites, setFavorites] = useState<Array<object>>([]);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  }, []);

  const dispatch = useAppDispatch();

  const addQueuee = () => {
    dispatch(addQueue(song));
  };

  const addToFavorites = () => {
    if (favorites) {
      const newFavorites = [...favorites, song];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    }
  };

  const removeFromFavorites = () => {
    if (favorites) {
      const newFavorites = favorites.filter(
        (item: any) => item.key !== song.key
      );
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    }
  };

  return (
    <div
      className={`absolute  bg-gray-800 text-white rounded-md shadow-md flex flex-col justify-start  py-2 px-2 space-y-2 z-50`}
      style={{ top: `${top + 10}px`, left: `${left + 10}px` }}
    >
      <button
        className={`hover:bg-slate-700 w-full text-start rounded-sm px-1`}
        onClick={() => addQueuee()}
      >
        <h1>Add to queue</h1>
      </button>

      {isFav ? (
        <button
          className={`hover:bg-slate-700 w-full text-start rounded-sm px-1`}
          onClick={() => removeFromFavorites()}
        >
          <h1>Remove From Favorites</h1>
        </button>
      ) : (
        <button
          className={`hover:bg-slate-700 w-full text-start rounded-sm px-1`}
          onClick={() => addToFavorites()}
        >
          <h1>Add to Favorites</h1>
        </button>
      )}
    </div>
  );
};

export default ContextMenu;
