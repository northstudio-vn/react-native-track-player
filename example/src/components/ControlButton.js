import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
  inactive: {
    opacity: 0.25
  }
});

export function ControlButton({ title, onPress, active = true }) {
  const text = <Text style={[styles.text, !active && styles.inactive]}>{title}</Text>;
  return onPress
    ?
      <TouchableOpacity
        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
        style={styles.container}
        onPress={active ? onPress : null}
      >
        {text}
      </TouchableOpacity>
    : <View style={styles.container}>{text}</View>
  ;
}

ControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func
};
