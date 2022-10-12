import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';

type Props = {};

const Charts = (props: Props) => {
  return (
    /* Top Charts */
    <div className=' lg:flex justify-start hidden max-w-md flex-col p-2'>
      <div>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-md text-white font-bold'>Top Charts</h1>
          <a className='text-xs text-white hover:underline ' href='/#'>
            See More
          </a>
        </div>
        <ul>
          <li
            className='flex flex-row items-center justify-between p-2 text-white rounded-sm
         hover:bg-teal-200 hover:bg-opacity-20 transition-all duration-400 ease-in-out'
          >
            <div className='flex flex-row items-center space-x-2 pr-2'>
              <p className='text-gray-300'>1</p>
              <img src='vite.svg' alt='' className='w-14 ' />
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
              <BsFillPlayCircleFill className='text-xl' />
            </button>
          </li>
        </ul>
      </div>

      {/* Top Artists */}
      <div className='mt-3'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='text-md text-white font-bold'>Top Artists</h1>
          <a className='text-xs text-white hover:underline ' href='/#'>
            See More
          </a>
        </div>
        <ul className='flex flex-row items-center justify-around h-16 '>
          <li>
            <img
              src='vite.svg'
              alt=''
              className='w-14 hover:w-16 transition-all duration-300 ease-in-out'
            />
          </li>
          <li>
            <img
              src='vite.svg'
              alt=''
              className='w-14 hover:w-16 transition-all duration-300 ease-in-out'
            />
          </li>
          <li>
            <img
              src='vite.svg'
              alt=''
              className='w-14 hover:w-16 transition-all duration-300 ease-in-out'
            />
          </li>
          <li>
            <img
              src='vite.svg'
              alt=''
              className='w-14 hover:w-16 transition-all duration-300 ease-in-out'
            />
          </li>
          <li>
            <img
              src='vite.svg'
              alt=''
              className='w-14 hover:w-16 transition-all duration-300 ease-in-out'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Charts;
