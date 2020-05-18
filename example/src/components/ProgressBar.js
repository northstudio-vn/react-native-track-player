import React, { useRef, useCallback } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  findNodeHandle,
  UIManager,
} from 'react-native';
import TrackPlayer, { useTrackPlayerProgress } from 'react-native-track-player';

export function ProgressBar() {
  const { position, bufferedPosition, duration } = useTrackPlayerProgress(100);
  const progress = duration ? position / duration : 0;
  const bufferedProgress = duration ? bufferedPosition / duration : 0;
  const layoutRef = useRef();
  const touchableRef = useRef();
  const onTimelineLayout = useCallback(({ nativeEvent }) => {
    UIManager.measureInWindow(
      findNodeHandle(touchableRef.current),
      (x, y, width, height) => {
        layoutRef.current = {
          x,
          y,
          width,
          height,
        };
      }
    );
  }, []);
  const onPressTimeline = useCallback(async ({ nativeEvent }) => {
    if (!layoutRef.current) return;
    const x = nativeEvent.pageX - layoutRef.current.x;
    const { width } = layoutRef.current;
    const ratio = Math.max(0, Math.min(width, x)) / width;
    TrackPlayer.seekTo(ratio * (await TrackPlayer.getDuration()));
  }, [])
  return (
    <View>
      <TouchableWithoutFeedback
        ref={touchableRef}
        onLayout={onTimelineLayout}
        onPress={onPressTimeline}
        hitSlop={{ top: 20, left: 0, bottom: 20, right: 0 }}
      >
        <View
          style={[
            styles.progress,
            { backgroundColor: 'red' }, // hide rounding error
          ]}
        >
          <View style={{ flex: progress, backgroundColor: 'red' }} />
          <View
            style={{
              flex: bufferedProgress - progress,
              backgroundColor: 'grey',
            }}
          />
          <View
            style={{ flex: 1 - bufferedProgress, backgroundColor: 'lightgray' }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  progress: {
    height: 6,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
});
