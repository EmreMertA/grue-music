import React from 'react';
import SongCard from '../components/SongCard';
import { useGetTrChartsQuery } from '../services/shazamApi';

type Props = {};

const Home = (props: Props) => {
  const { data, error, isLoading } = useGetTrChartsQuery();
  console.log(data);

  return (
    <div className='overflow-y-scroll h-full flex flex-wrap  sm:gap-y-10 sm:gap-x-2 gap-3  md:px-10  justify-around pb-20'>
      {data?.map((item) => (
        <SongCard key={item.key} track={item} />
      ))}
    </div>
  );
};

export default Home;
