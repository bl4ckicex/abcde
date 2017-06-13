/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

class helpHand extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the helpHand component</Text>
        <Text>Im the helpHand component</Text>
        <Text>Im the helpHand component</Text>
        <Text>Im the helpHand component</Text>
        <Text>Im the helpHand component</Text>
        <Text>Im the helpHand component</Text>
        <Text>Im the helpHand component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.OS === 'android' ? 54 : 64)
  },
});

export default helpHand;
