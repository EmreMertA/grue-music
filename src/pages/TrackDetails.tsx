import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { useGetTrackDetailsQuery } from '../services/shazamApi';
import { useAppDispatch } from '../redux/hooks';
import { setCurrentTrack } from '../redux/player/playerSlice';
import RelatedSection from '../components/RelatedSection';

type Props = {};

const TrackDetails: React.FC<Props> = () => {
  const location = useLocation();

  const path = location.pathname.split('/')[2];

  const { data, error, isLoading } = useGetTrackDetailsQuery(path);

  const dispatch = useAppDispatch();

  const addToPlayer = () => {
    const audio = {
      name: data?.title,
      singer: data?.subtitle,
      cover: data?.images.coverart,
      musicSrc: data?.hub.actions?.[1].uri,
    };

    dispatch(setCurrentTrack(audio));
  };

  return (
    <div className='overflow-y-scroll h-full pb-20'>
      <div className='flex md:flex-row flex-col justify-between items-center px-16 py-14 md:bg-gradient-to-r bg-gradient-to-r from-[#191F28]  to-transparent '>
        <div className='flex md:flex-row flex-col items-center md:space-x-12 space-x-0 '>
          <img
            src={data?.images.coverart}
            alt={data?.title}
            className='w-48 border rounded-full'
          />
          <div className='md:p-10 p-5  md:text-left text-center '>
            <h1 className='text-white font-bold  text-2xl'>{data?.title}</h1>
            <a href='/#' className=' text-lg text-gray-200 hover:text-lime-500'>
              {data?.subtitle}
            </a>
            <p className='text-gray-200 text-xs'>{data?.genres.primary}</p>
          </div>
        </div>
        <FaPlay
          onClick={() => addToPlayer()}
          className='text-white text-4xl cursor-pointer'
        />
      </div>

      {/* RELATED SONGS */}
      <RelatedSection />
    </div>
  );
};

export default TrackDetails;
