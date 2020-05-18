import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import Player from './src/components/Player';
import playlistData from './src/data/playlist.json';
import localTrack from './src/resources/pure.m4a';

const tracks = [
  ...playlistData,
  {
    id: 'local-track',
    url: localTrack,
    title: 'Pure (Demo)',
    artist: 'David Chavez',
    artwork: 'https://i.picsum.photos/id/500/200/200.jpg',
    duration: 28,
  },
];

const setupPlayerP = (async() => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
      TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      TrackPlayer.CAPABILITY_STOP,
    ],
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
    ],
  });
})();

export default function App() {
  const playerIsSetup = useSetupPlayer();
  const queue = useQueue(playerIsSetup, tracks);
  return playerIsSetup ? (
    <View style={styles.container}>
      <Player style={styles.player} queue={queue} />
    </View>
  ) : null;
}

const useQueue = (playerReady, tracks) => {
  const [queue, setQueue] = useState(null);
  useEffect(() => {
    if (!playerReady) return;
    let mounted = true;
    (async () => {
      const existingQueue = await TrackPlayer.getQueue();
      if (!mounted) return;
      if (!existingQueue.length) {
        await TrackPlayer.add(tracks);
      };
      if (!mounted) return;
      setQueue(tracks);
    })();
    return () => {
      mounted = false;
    };
  }, [playerReady, tracks]);
  return queue;
};

const useSetupPlayer = () => {
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    let mounted = true;
    (async () => {
      await setupPlayerP;
      if (!mounted) return;
      setComplete(true);
    })();
    return () => {
      mounted = false;
    };
  }, []);
  return complete;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  description: {
    width: '80%',
    marginTop: 20,
    textAlign: 'center',
  },
  player: {
    marginTop: 40,
  },
  state: {
    marginTop: 20,
  },
});
