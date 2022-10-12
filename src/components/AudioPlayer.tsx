import React, { useEffect } from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setCurrentTrack, updatePlayList } from '../redux/player/playerSlice';

type Props = {};

const AudioPlayer: React.FC = (props: Props) => {
  const audioList = useAppSelector((state) => state.player.value);

  const dispatch = useAppDispatch();

  return (
    <ReactJkMusicPlayer
      quietUpdate={true}
      audioLists={audioList}
      glassBg={true}
      mode='full'
      clearPriorAudioLists={true}
      responsive={false}
      toggleMode={false}
      showThemeSwitch={false}
      showDownload={false}
      spaceBar={true}
      defaultVolume={0.5}
      onAudioListsChange={(currentPlayId, audioLists, audioInfo) => {
        dispatch(updatePlayList(audioLists));
      }}
      showMediaSession
      volumeFade={{ fadeIn: 200, fadeOut: 200 }}
    />
  );
};

export default AudioPlayer;
