import React, { useMemo, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { ControlButton } from './ControlButton';
import { usePlaybackStateIs } from '../hooks';

export function Controls({ queue, track }) {
  const nextTrack = useNextTrack(queue, track);
  const previousTrack = usePreviousTrack(queue, track);
  const isPlaying = usePlaybackStateIs(TrackPlayer.STATE_PLAYING);
  const togglePlayback = useCallback(() => {
    if (isPlaying) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }, [isPlaying]);

  const skipToNext = useCallback(() => {
    TrackPlayer.skipToNext();
  }, []);

  const skipToPrevious = useCallback(() => {
    TrackPlayer.skipToPrevious();
  }, []);

  return (
    <View style={styles.controls}>
      <ControlButton
        title="<<"
        active={!!previousTrack}
        onPress={previousTrack ? skipToPrevious : null}
      />
      <ControlButton
        title={isPlaying ? 'Pause' : 'Play'}
        onPress={togglePlayback}
      />
      <ControlButton
        title=">>"
        active={!!nextTrack}
        onPress={nextTrack ? skipToNext : null}
      />
    </View>
  );
}

const useNextTrack = (queue, currentTrack) =>
  useMemo(() => {
    if (!currentTrack || !queue) return undefined;
    const index = queue.findIndex(({ id }) => id === currentTrack.id);
    const hasNextTrack = index < queue.length - 1;
    return hasNextTrack ? queue[index + 1] : undefined;
  }, [queue, currentTrack]);

const usePreviousTrack = (queue, currentTrack) =>
  useMemo(() => {
    if (!currentTrack || !queue) return undefined;
    const index = queue.findIndex(({ id }) => id === currentTrack.id);
    const hasPreviousTrack = index !== 0;
    return hasPreviousTrack ? queue[index - 1] : undefined;
  }, [queue, currentTrack]);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
  inactive: {
    opacity: 0.5
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row'
  }
});
