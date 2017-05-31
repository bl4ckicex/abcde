import React, { Component } from 'react';
import {
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class MainCategories extends Component {

  // this is to remove fb token for retry purposes
  // componentWillMount() {
  //   AsyncStorage.removeItem('fb_token');
  // }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 50, justifyContent: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>MAIN PAGE</Text>
          <Text>MAIN PAGE</Text>
          <Text>MAIN PAGE</Text>
          <Text>MAIN PAGE</Text>
          <Text>MAIN PAGE</Text>
          <Text>MAIN PAGE</Text>
        </View>
        <Button
          large
          raised
          title="Go discovery"
          onPress={() => Actions.discovery()}
        />
      </View>
    );
  }
}

export default MainCategories;
