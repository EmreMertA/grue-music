import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Artists from './pages/Artists';
import Explore from './pages/Explore';
import Home from './pages/Home';

type Props = {};

const App = (props: Props) => {
  return (
    <div className='w-screen h-screen bg-gradient-to-br from-green-700 via-cyan-800 to-blue-700 flex'>
      <Sidebar />

      <div className='w-full h-full'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/Artists' element={<Artists />} />
        </Routes>
      </div>

      <ReactJkMusicPlayer
        audioLists={[]}
        glassBg={true}
        mode='full'
        responsive={false}
        toggleMode={false}
        showThemeSwitch={false}
        showDownload={false}
      />
    </div>
  );
};

export default App;
