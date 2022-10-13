import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updatePlayList } from '../redux/player/playerSlice';

type Props = {};

const AudioPlayer: React.FC = (props: Props) => {
  const audioList = useAppSelector((state) => state.player.value);

  const dispatch = useAppDispatch();

  return (
    <ReactJkMusicPlayer
      quietUpdate
      clearPriorAudioLists
      audioLists={audioList}
      glassBg={true}
      mode='full'
      responsive={false}
      toggleMode={false}
      showThemeSwitch={false}
      showDownload={false}
      spaceBar={true}
      defaultVolume={0.5}
      showMediaSession
      loadAudioErrorPlayNext={true}
      onAudioListsChange={(currentPlayId, audioLists, audioInfo) => {
        dispatch(updatePlayList(audioLists));
      }}
      volumeFade={{ fadeIn: 200, fadeOut: 200 }}
    />
  );
};

export default AudioPlayer;
