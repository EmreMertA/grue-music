import React, { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/Fa';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { setCurrentTrack } from '../redux/player/playerSlice';
import { ArtistDetails } from '../types/ArtistDetails';
import ContextMenu from './ContextMenu';

type Props = {
  data?: ArtistDetails | null;
};

const TopLists: React.FC<Props> = ({ data }) => {
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
  const [showMoreSongs, setShowMoreSongs] = useState<boolean>(false);
  const [showMoreAlbums, setShowMoreAlbums] = useState<boolean>(false);

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

  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleClick = () => setShowContextMenu(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const addToPlayer = (track: any) => {
    const audio = {
      name: track?.attributes.name,
      singer: track?.attributes.artistName,
      cover: track?.attributes.artwork.url,
      musicSrc: track?.attributes.previews[0].url,
    };

    dispatch(setCurrentTrack(audio));
  };

  console.log(data);

  return (
    <div>
      <h1 className='text-white text-2xl font-bold px-16 py-4'>Top Songs</h1>
      <ul className='px-10'>
        {data !== undefined &&
          Object.values(data?.songs)
            .reverse()
            .slice(0, showMoreSongs ? 10 : 5)
            .map((track: any, i) => (
              <li
                key={track.id}
                className='flex flex-row items-center justify-between px-4 py-2  text-white rounded-md
                     hover:bg-teal-200 hover:bg-opacity-20 transition-all duration-400 ease-in-out'
                onContextMenu={(e) => {
                  console.log('Context Menu Opened');
                  e.preventDefault();
                  setSelectedSong({
                    name: track?.attributes.name,
                    singer: track?.attributes.artistName,
                    cover: track?.attributes.artwork.url,
                    musicSrc: track?.attributes.previews[0].url,
                  });
                  setShowContextMenu(true);
                  setPoints({ x: e.pageX, y: e.pageY });
                }}
              >
                <div className='flex flex-row items-center space-x-2 pr-2'>
                  <p className='text-gray-300 w-6'>{i + 1}</p>
                  <img
                    src={track?.attributes.artwork.url}
                    alt={track?.attributes.name}
                    className='w-14 '
                  />
                  <div className='flex flex-col  w-52'>
                    <Link
                      to={`/songs/{track.key}`}
                      className='hover:text-teal-400 cursor-pointer line-clamp-1 '
                    >
                      {track?.attributes.name}
                    </Link>
                    <span className='text-gray-300 hover:text-teal-400 cursor-pointer line-clamp-1'>
                      {track?.attributes.artistName}
                    </span>
                  </div>
                </div>

                <button>
                  <FaPlay
                    onClick={() => addToPlayer(track)}
                    className='text-xl'
                  />
                </button>
              </li>
            ))}
        <button
          onClick={() => setShowMoreSongs(!showMoreSongs)}
          className=' w-28 hover:bg-white hover:bg-opacity-25 px-2 py-1 text-gray-300 rounded-md'
        >
          {showMoreSongs ? 'Show Less' : 'Show More'}
        </button>
      </ul>
      {/* TOP ALBUMS */}
      <h1 className='text-white text-2xl font-bold px-16 py-4'>Top Albums</h1>
      <ul className='px-10'>
        {data !== undefined &&
          Object.values(data?.albums)
            .filter((album: any) => album.attributes.trackCount > 1)
            .slice(0, showMoreAlbums ? 10 : 5)
            .map((album, i) => (
              <li
                key={album.id}
                className='flex flex-row items-center justify-between px-4 py-2  text-white rounded-md
                     hover:bg-teal-200 hover:bg-opacity-20 transition-all duration-400 ease-in-out'
              >
                <div className='flex flex-row items-center space-x-2 pr-2'>
                  <p className='text-gray-300 w-6'>{i + 1}</p>
                  <img
                    src={album.attributes?.artwork.url}
                    alt=''
                    className='w-14 '
                  />
                  <div className='flex flex-col  '>
                    <Link
                      to={`/songs/{track.key}`}
                      className='hover:text-teal-400 cursor-pointer line-clamp-1 '
                    >
                      {album?.attributes?.name}
                    </Link>
                    <span className='text-gray-300 hover:text-teal-400 cursor-pointer line-clamp-1'>
                      {album?.attributes?.artistName}
                    </span>
                  </div>
                </div>
              </li>
            ))}
        <button
          onClick={() => setShowMoreAlbums(!showMoreAlbums)}
          className=' w-28 hover:bg-white hover:bg-opacity-25 px-2 py-1 text-gray-300 rounded-md'
        >
          {showMoreAlbums ? 'Show Less' : 'Show More'}
        </button>
      </ul>
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

export default TopLists;
