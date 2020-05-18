import { useState, useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';

const { TrackPlayerEvents } = TrackPlayer;

function useWhenPlaybackStateChanges(callback) {
  TrackPlayer.useTrackPlayerEvents(
    [TrackPlayerEvents.PLAYBACK_STATE],
    ({ state }) => {
      callback(state);
    }
  );
  useEffect(() => {
    let mounted = true;
    (async () => {
      const playbackState = await TrackPlayer.getState();
      if (!mounted) return;
      callback(playbackState);
    })();
    return () => { mounted = false };
  }, [callback]);
}

export function usePlaybackState() {
  const [playbackState, setPlaybackState] = useState();
  useWhenPlaybackStateChanges(setPlaybackState);
  return playbackState;
}

export const usePlaybackStateIs = (...states) => {
  const [is, setIs] = useState();
  useWhenPlaybackStateChanges(state => {
    setIs(states.includes(state));
  });

  return is;
}

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );

  return debouncedValue;
}
