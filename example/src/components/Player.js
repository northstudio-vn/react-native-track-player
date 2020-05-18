import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player';

import { ProgressBar } from './ProgressBar';
import { Controls } from './Controls';

export default function Player({ style, queue }) {
  const track = useCurrentTrack();
  console.log(track);
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{ uri: track.artwork }} />
      <ProgressBar />
      <Text style={styles.title}>{track.title}</Text>
      <Text style={styles.artist}>{track.artist}</Text>
      <Controls queue={queue} track={track} />
    </View>
  );
}

const useCurrentTrack = () => {
  const [track, setTrack] = useState(null);
  const [trackId, setTrackId] = useState(null);

  TrackPlayer.useTrackPlayerEvents(
    [TrackPlayerEvents.PLAYBACK_TRACK_CHANGED],
    ({ nextTrack }) => {
      if (nextTrack) {
        setTrackId(nextTrack);
      }
    }
  );

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (trackId) return;
      const id = await TrackPlayer.getCurrentTrack();
      if (!mounted) return;
      setTrackId(id);
    })();
    return () => {
      mounted = false;
    };
  }, [trackId]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!trackId) {
        setTrack(null);
        return;
      }
      const track = await TrackPlayer.getTrack(trackId);
      if (!mounted) return;
      setTrack(track);
    })();
    return () => {
      mounted = false;
    };
  }, [trackId]);

  return track || {};
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    elevation: 1,
    borderRadius: 4,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 1 }
  },
  cover: {
    width: '100%',
    backgroundColor: 'grey',
    aspectRatio: 1
  },
  title: {
    marginTop: 10
  },
  artist: {
    fontWeight: 'bold'
  }
});
