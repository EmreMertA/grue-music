import React, { useState } from 'react';
import Sidebar from './Layout/Sidebar';
import Navbar from './Layout/Navbar';
import Charts from './Layout/Charts';
import AudioPlayer from './AudioPlayer';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <div className='w-screen h-screen bg-gradient-to-br from-green-700 via-cyan-800 to-blue-700 flex'>
      <Sidebar open={open} setOpen={setOpen} />
      <div className='flex flex-col w-full h-full max-h-screen '>
        <Navbar setOpen={setOpen} open={open} />
        <div className='flex flex-row lg:pr-10 '>
          <div className='flex-[8]  h-[90vh]'>{children}</div>
          <Charts />
        </div>
      </div>

      <AudioPlayer />
    </div>
  );
};

export default Layout;
