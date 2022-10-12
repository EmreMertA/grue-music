import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/Ai';
import { HiMenuAlt2 } from 'react-icons/hi';

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
  open: Boolean;
};

const Navbar: React.FC<Props> = ({ setOpen, open }) => {
  const [search, setSearch] = useState<string>('');

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <div className='w-full h-12 bg-transparent flex items-center px-3 '>
      <button
        className='border-r-[1px] border-slate-300 pr-3 h-full block md:hidden'
        onClick={() => setOpen(!open)}
      >
        <HiMenuAlt2 className='text-slate-300  text-lg ' />
      </button>
      <div className='flex items-center space-x-4 w-full md:pl-0 pl-3'>
        <AiOutlineSearch className='text-slate-300  text-lg' />
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full bg-transparent focus:outline-none text-white text-sm '
        />
        {search.length > 0 && (
          <AiOutlineClose
            onClick={clearSearch}
            className='cursor-pointer text-sm'
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
