import React from 'react';
import { AiFillHome, AiOutlineCloseCircle, AiFillHeart } from 'react-icons/ai';
import { TbWorldLongitude } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { Cycle, motion, AnimatePresence } from 'framer-motion';

type Props = {
  open: Boolean;
  cycleOpen: Cycle;
};

const Sidebar: React.FC<Props> = ({ open, cycleOpen }) => {
  let location = useLocation();

  console.log(location.pathname);

  /* 06B6D4 */
  console.log(open);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{ width: '208px' }}
          exit={{
            width: 0,
            transition: { duration: 0.3 },
          }}
          className={`w-52 bg-[#191624]  opacity-90 h-[calc(100vh_-_5rem)] md:relative absolute z-20  px-4 py-5  md:block ${
            open === false ? 'hidden' : ''
          } `}
        >
          <button
            onClick={() => cycleOpen(1)}
            className='absolute -right-12 top-6 md:hidden'
          >
            <AiOutlineCloseCircle className='text-4xl text-white/80' />
          </button>

          <motion.h1
            initial={{ visibility: 'initial' }}
            exit={{
              visibility: 'hidden',
              transition: { duration: 0.3 },
            }}
            className='text-green-500 text-center'
          >
            Grue Music
          </motion.h1>
          <ul className='text-[#9CA3AF] opacity-1 space-y-6 mt-10'>
            <motion.li
              initial={{ visibility: 'initial' }}
              exit={{
                visibility: 'hidden',
                transition: { duration: 0.3 },
              }}
              className=' cursor-pointer'
            >
              <Link to={'/'}>
                <div
                  className={`hover:text-[#22D3EE] flex flex-row  items-center space-x-3 ${
                    location.pathname === '/' && 'text-[#06B6D4]'
                  }`}
                >
                  <AiFillHome className='text-xl' />
                  <span className='text-sm'>Home</span>
                </div>
              </Link>
            </motion.li>
            <motion.li
              initial={{ visibility: 'initial' }}
              exit={{
                visibility: 'hidden',
                transition: { duration: 0.3 },
              }}
              className=' cursor-pointer'
            >
              <Link to={'/explore'}>
                <div
                  className={`hover:text-[#22D3EE] flex flex-row  items-center space-x-3 ${
                    location.pathname === '/explore' && 'text-[#06B6D4]'
                  }`}
                >
                  <TbWorldLongitude className='text-xl' />
                  <span className='text-sm'>Explore</span>
                </div>
              </Link>
            </motion.li>
            <motion.li
              initial={{ visibility: 'initial' }}
              exit={{
                visibility: 'hidden',
                transition: { duration: 0.3 },
              }}
              className=' cursor-pointer'
            >
              <Link to={'/favorites'}>
                <div
                  className={`hover:text-[#22D3EE] flex flex-row  items-center space-x-3 ${
                    location.pathname === '/favorites' && 'text-[#06B6D4]'
                  }`}
                >
                  <AiFillHeart className='text-xl' />
                  <span className='text-sm'>Favorites</span>
                </div>
              </Link>
            </motion.li>
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
