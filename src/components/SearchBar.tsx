import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/Ai';
import { useNavigate } from 'react-router-dom';

type Props = {};

const SearchBar = (props: Props) => {
  const [search, setSearch] = useState<string>('');

  const navigate = useNavigate();

  const clearSearch = () => {
    setSearch('');
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    if (search.length < 1) return;

    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      className='flex items-center space-x-4 w-full md:pl-0 pl-3'
    >
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
    </form>
  );
};

export default SearchBar;
