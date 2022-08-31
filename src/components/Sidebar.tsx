import React from 'react';
import { AiFillHome } from 'react-icons/Ai';
import { TbWorldLongitude } from 'react-icons/tb';
import { IoIosPeople } from 'react-icons/Io';
import { Link } from 'react-router-dom';

type Props = {};

const Sidebar: React.FC<Props> = () => {
  return (
    <div className='w-52 bg-[#191624] opacity-90 h-[calc(100vh_-_5rem)]  px-4 py-5'>
      <h1 className='text-green-500 text-center'>Grue Music</h1>
      <ul className='text-[#9CA3AF] opacity-1 space-y-6 mt-10'>
        <li className=' cursor-pointer'>
          <Link to={'/'}>
            <div className='hover:text-[#22D3EE] flex flex-row  items-center space-x-3'>
              <AiFillHome className='text-xl' />
              <span className='text-sm'>Home</span>
            </div>
          </Link>
        </li>
        <li className=' cursor-pointer'>
          <Link to={'/explore'}>
            <div className='hover:text-[#22D3EE] flex flex-row  items-center space-x-3'>
              <TbWorldLongitude className='text-xl' />
              <span className='text-sm'>Explore</span>
            </div>
          </Link>
        </li>
        <li className=' cursor-pointer'>
          <Link to={'/artists'}>
            <div className='hover:text-[#22D3EE] flex flex-row  items-center space-x-3'>
              <IoIosPeople className='text-xl' />
              <span className='text-sm'>Artists</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
