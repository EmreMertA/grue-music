import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaPlay } from 'react-icons/Fa';
import { useGetArtistDetailsQuery } from '../services/shazamApi';
import { useAppDispatch } from '../redux/hooks';
import { setCurrentTrack } from '../redux/player/playerSlice';
import RelatedSection from '../components/RelatedSection';
import TopLists from '../components/TopLists';

type Props = {};

const ArtistsDetails: React.FC<Props> = () => {
  const location = useLocation();

  const path = location.pathname.split('/')[2];
  console.log(path);

  const { data, error, isLoading } = useGetArtistDetailsQuery(path);
  console.log(data);

  return (
    <div className='overflow-y-scroll h-full pb-20'>
      <div className='flex md:flex-row flex-col justify-between items-center px-16 py-14 md:bg-gradient-to-r bg-gradient-to-r from-[#191F28]  to-transparent '>
        <img
          src={data?.artists[path].attributes.artwork.url}
          alt={data?.artists[path].attributes.name}
          className='w-48 border rounded-full'
        />
        <div className='md:p-10 p-5  md:text-left text-center '>
          <h1 className='text-white font-bold  text-2xl'>
            {data?.artists[path].attributes.name}
          </h1>
          <p className='text-gray-200 text-xs'>
            {data?.artists[path].attributes.genreNames[0]}
          </p>
        </div>
      </div>

      {/* RELATED SONGS */}
      <TopLists data={data} />
    </div>
  );
};

export default ArtistsDetails;
