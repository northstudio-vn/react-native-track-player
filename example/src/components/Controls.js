import React, { useMemo, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';
import { ControlButton } from './ControlButton';
import { useDebounce } from '../hooks';

export function Controls({ queue, track }) {
  const nextTrack = useNextTrack(queue, track);
  const previousTrack = usePreviousTrack(queue, track);

  const skipToNext = useCallback(() => {
    TrackPlayer.skipToNext();
  }, []);

  const skipToPrevious = useCallback(() => {
    TrackPlayer.skipToPrevious();
  }, []);

  useEffect(() => {
    const capabilities = [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP,
    ];
    if (nextTrack) {
      capabilities.push(TrackPlayer.CAPABILITY_SKIP_TO_NEXT);
    }
    if (previousTrack) {
      capabilities.push(TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS);
    }

    TrackPlayer.updateOptions({ capabilities });
  }, [nextTrack, previousTrack]);

  return (
    <View style={styles.controls}>
      <ControlButton
        title="<<"
        active={!!previousTrack}
        onPress={previousTrack ? skipToPrevious : undefined}
      />
      <PlayButton />
      <ControlButton
        title=">>"
        active={!!nextTrack}
        onPress={nextTrack ? skipToNext : undefined}
      />
    </View>
  );
}

const PlayButton = () => {
  const playbackState = usePlaybackState();
  const isPlaying = [
    TrackPlayer.STATE_PLAYING,
    TrackPlayer.STATE_BUFFERING,
  ].includes(playbackState);

  const togglePlayback = useCallback(() => {
    if (isPlaying) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }, [isPlaying]);
  const controlTitle = useDebounce(isPlaying ? 'Pause' : 'Play', 200);
  return <ControlButton title={controlTitle} onPress={togglePlayback} />;
};

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
    flex: 1,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  inactive: {
    opacity: 0.5,
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
});
