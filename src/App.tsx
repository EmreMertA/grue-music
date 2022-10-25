import React from 'react';
import 'react-jinke-music-player/assets/index.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ArtistsDetails from './pages/ArtistDetails';
import Artists from './pages/Artists';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Search from './pages/Search';
import TrackDetails from './pages/TrackDetails';

type Props = {};

const App: React.FC = (props: Props) => {
  return (
    <Layout>
      {/* Content */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/Artists' element={<Artists />} />
        <Route path='/search/:query' element={<Search />} />
        <Route path='/songs/:trackId' element={<TrackDetails />} />
        <Route path='/artist/:artistId' element={<ArtistsDetails />} />
      </Routes>
    </Layout>
  );
};

export default App;
