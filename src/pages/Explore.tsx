import React, { useState, useEffect } from 'react';
import { countries } from '../constants/countries';
import type { cityType } from '../types/CityType';
import { useGetChartByCityQuery } from '../services/shazamApi';
import SongCard from '../components/SongCard';
import ContextMenu from '../components/ContextMenu';

type Props = {};

const Explore = (props: Props) => {
  const [countryCode, setCountryCode] = useState('');
  const [country, setCountry] = useState<cityType | undefined>();
  const [city, setCity] = useState<string>('745044');

  const [showContextMenu, setShowContextMenu] = useState<boolean>(false);
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
    const handleClick = () => setShowContextMenu(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const data = countries.filter((city) => city.code === countryCode);
    setCountry(data[0]);
  }, [countryCode]);

  const { data, error, isLoading } = useGetChartByCityQuery(city);
  console.log(data);

  return (
    <div className='overflow-y-scroll h-full flex flex-wrap  sm:gap-y-10 sm:gap-x-2 gap-3  md:px-10  justify-around pb-20'>
      <div className='sticky w-full top-0  glassmorphism flex items-center   justify-between px-4 h-12 z-10'>
        <h1 className='sm:text-2xl text-md text-white'>Top Songs by City</h1>
        <select
          defaultValue={'DEFAULT'}
          name='category'
          className='bg-gray-700 rounded-lg text-white w-24  py-1 px-1 text-sm '
          onChange={(e) => setCountryCode(e.target.value)}
        >
          <option value='DEFAULT' disabled>
            Country
          </option>
          {countries.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>
        <select
          defaultValue={'745044'}
          name='category'
          className='bg-gray-700 rounded-lg text-white w-24  py-1 px-1 text-sm '
          onChange={(e) => setCity(e.target.value)}
        >
          <option value='745044' key={'745044'} disabled>
            City
          </option>
          {country &&
            country?.cities?.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
        </select>
      </div>
      {isLoading === true && <div> YÜKLENİYOR</div>}

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

export default Explore;
