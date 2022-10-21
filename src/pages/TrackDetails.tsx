import React from 'react';
import { FaPlay } from 'react-icons/Fa';

type Props = {};

const TrackDetails: React.FC<Props> = () => {
  return (
    <div className='overflow-y-scroll h-full pb-20'>
      <div className='flex flex-row justify-between items-center px-16 py-14 bg-gradient-to-r from-[#191F28]  to-transparent '>
        <div className='flex flex-row items-center space-x-12 '>
          <img
            src='/uzi.jpg's
            alt='Metallica'
            className='w-48 border rounded-full'
          />
          <div className='p-10'>
            <h1 className='text-white font-bold  text-2xl'>Enter Sandman</h1>
            <a href='/#' className=' text-lg text-gray-200 hover:text-lime-500'>
              Metallica
            </a>
            <p className='text-gray-200 text-xs'>Metal</p>
          </div>
        </div>
        <FaPlay className='text-white text-4xl' />
      </div>

      {/* RELATED SONGS */}

      <div>
        <h1 className='text-white text-2xl font-bold px-16 py-8'>
          Related Songs
        </h1>
        <ul className='px-10'>
          <li
            className='flex flex-row items-center justify-between px-4 py-2  text-white rounded-md
         hover:bg-teal-200 hover:bg-opacity-20 transition-all duration-400 ease-in-out'
          >
            <div className='flex flex-row items-center space-x-2 pr-2'>
              <p className='text-gray-300'>1</p>
              <img src='/vite.svg' alt='' className='w-14 ' />
              <div className='flex flex-col  w-52'>
                <span className='hover:text-teal-400 cursor-pointer line-clamp-1 '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  ullam?
                </span>
                <span className='text-gray-300 hover:text-teal-400 cursor-pointer line-clamp-1'>
                  Lorem.
                </span>
              </div>
            </div>

            <button>
              <FaPlay className='text-xl' />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrackDetails;
