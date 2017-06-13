/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Image
} from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
class comfy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <View style={styles.imageContainer}>
            <Image source={require('../../../../assets/images/chatImage.jpg')} style={styles.chatImageStyle} />
          </View>
          <View style={styles.contentContainer}>
            <View style={{ backgroundColor: 'white', borderRadius: 5, flex: 2, justifyContent: 'center' }}>
              <View style={{ padding: 5, alignItems: 'center' }}>
                <Text style={{ fontSize: (Platform.OS === 'ios' ? 15 : 13), fontWeight: 'bold' }}>#ComfyHomeChatRoom</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text>652</Text>
                  <Text> people in chatroom</Text>
                </View>
                <Text>5 minutes ago</Text>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Button title='Join Chat' raised backgroundColor='#1F57A0' iconRight icon={{ name: 'keyboard-arrow-right' }} buttonStyle={styles.buttonStyle} />
            </View>
          </View>
        </View>

        <View style={{ flex: 2.5 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.OS === 'android' ? 54 : 64),
    flex: 1
  },
  topHalf: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0,
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(196, 219, 231, 0.9)'
  },
  imageContainer: {
    padding: 20,
    borderRadius: 10,
    height: 180,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2
  },
  contentContainer: {
    height: 180,
    width: (Platform.OS === 'ios' ? SCREEN_WIDTH / 2.3 : SCREEN_WIDTH / 2.4),
  },
  chatImageStyle: {
    height: 170,
    width: 190,
    borderRadius: 10,
    position: 'absolute'
  },
  buttonStyle: {
    width: (Platform.OS === 'ios' ? SCREEN_WIDTH / 2.3 : SCREEN_WIDTH / 2.4),
    paddingLeft: 15
  }
});

export default comfy;
