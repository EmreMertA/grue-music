import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';

type Props = {};

const App = (props: Props) => {
  const audioLists = [
    {
      cover:
        'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/02/74/5a/02745ac2-cbfb-a90a-b970-7449be5d4c42/06UMGIM10734.rgb.jpg/400x400cc.jpg',
      musicSrc:
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/44/d7/a744d7c6-d06c-17a2-ad19-cd01b46a8cbd/mzaf_8512763237108905867.plus.aac.ep.m4a',
      name: 'Emre ',
      singer: 'Mert',
    },
  ];

  return (
    <div className='w-screen h-screen bg-gradient-to-br from-green-700 via-cyan-800 to-blue-700'>
      <ReactJkMusicPlayer
        audioLists={audioLists}
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
