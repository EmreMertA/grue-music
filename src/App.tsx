import React from 'react';
import 'react-jinke-music-player/assets/index.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Artists from './pages/Artists';
import Explore from './pages/Explore';
import Home from './pages/Home';

type Props = {};

const App: React.FC = (props: Props) => {
  return (
    <Layout>
      {/* Content */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/Artists' element={<Artists />} />
      </Routes>
    </Layout>
  );
};

export default App;
