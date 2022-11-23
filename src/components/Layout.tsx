import React, { useEffect } from 'react';
import Sidebar from './Layout/Sidebar';
import Navbar from './Layout/Navbar';
import Charts from './Layout/Charts';
import AudioPlayer from './AudioPlayer';
import { useCycle } from 'framer-motion';
import useWindowDimensions from '../hooks/useWindowDimensions';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [open, cycleOpen] = useCycle(true, false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    width > 768 ? cycleOpen(0) : cycleOpen(1);
  }, [width]);

  console.log(open);

  return (
    <div className='w-screen h-screen bg-gradient-to-br from-green-700 via-cyan-800 to-blue-700 flex'>
      <Sidebar open={open} cycleOpen={cycleOpen} />
      <div className='flex flex-col w-full h-full max-h-screen '>
        <Navbar cycleOpen={cycleOpen} open={open} />
        <div className='flex flex-row lg:pr-10 '>
          <div className='flex-[8]  h-[90vh]'>{children}</div>
          <Charts />
        </div>
        <AudioPlayer />
      </div>
    </div>
  );
};

export default React.memo(Layout);
