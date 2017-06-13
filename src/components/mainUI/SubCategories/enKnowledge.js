/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

class enKnowledge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Im the enKnowledge component</Text>
        <Text>Im the enKnowledge component</Text>
        <Text>Im the enKnowledge component</Text>
        <Text>Im the enKnowledge component</Text>
        <Text>Im the enKnowledge component</Text>
        <Text>Im the enKnowledge component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.OS === 'android' ? 54 : 64)
  },
});

export default enKnowledge;
