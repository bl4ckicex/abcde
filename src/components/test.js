/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';
import { SocialIcon } from 'react-native-elements'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class test extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#0B486B', flex: 1 }} >
          <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
            <View style={styles.ball} />
            <Image source={require('../images/profile.png')} style={{ height: 150, width: 150, borderRadius: 75, position: 'absolute' }} />
          </View>
          <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 2 }}>
            <Text style={{ fontSize: 26, color: 'white', fontWeight: 'bold', textShadowColor: 'black', textShadowOffset: { width: 2, height: 1 } }}>May Wong</Text>
            <Text style={{ fontSize: 18, color: 'white', paddingBottom: 2 }}>@maywong92</Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'rgba(17, 109, 161, 0.9)', flex: 1.7, flexDirection: 'column' }}>
          <View style={{ flex: 0.9, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ width: 0.333 * SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', borderColor: 'rgba(31, 95, 97, 0.9)', borderRightWidth: 1, }}>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>1094</Text>
              <Text style={{ fontSize: 13, color: 'white', textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 } }}>FOLLOWERS</Text>
            </View>
            <View style={{ width: 0.333 * SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', borderColor: 'rgba(31, 95, 97, 0.9)', borderRightWidth: 1, }}>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>223</Text>
              <Text style={{ fontSize: 13, color: 'white', textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 } }}>FOLLOWING</Text>
            </View>
            <View style={{ width: 0.333 * SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', borderTopRightRadius: 20 }}>
              <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>88</Text>
              <Text style={{ fontSize: 13, color: 'white', textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 } }}>LIKES</Text>
            </View>
          </View>
            <View style={{ backgroundColor: 'rgba(196, 219, 231, 0.9)', flex: 5.5 }}>
              <View style={{ backgroundColor: 'white', flex: 1, margin: 12, borderRadius: 8 }}>
                <View style={{ height: 100, backgroundColor: 'pink' }}></View>
              </View>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
  height: 160,
  width: 160,
  borderRadius: 80,
  borderWidth: 80,
  borderColor: 'white',
  shadowColor: 'black',
  shadowOpacity: 0.5,
  shadowRadius: 5,
  }
});

export default test;
