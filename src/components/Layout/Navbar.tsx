import { Cycle } from 'framer-motion';
import React, { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import SearchBar from '../SearchBar';

type Props = {
  cycleOpen: Cycle;
  open: Boolean;
};

const Navbar: React.FC<Props> = ({ cycleOpen, open }) => {
  const [search, setSearch] = useState<string>('');

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <div className='w-full h-12 bg-transparent flex items-center px-3 '>
      <button
        className='border-r-[1px] border-slate-300 pr-3 h-full block md:hidden'
        onClick={() => cycleOpen()}
      >
        <HiMenuAlt2 className='text-slate-300  text-lg ' />
      </button>
      <SearchBar />
    </div>
  );
};

export default Navbar;
