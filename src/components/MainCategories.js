import React, { Component } from 'react';
import {
  Text,
  View,
  AsyncStorage
} from 'react-native';

class MainCategories extends Component {

  // this is to remove fb token for retry purposes
  // componentWillMount() {
  //   AsyncStorage.removeItem('fb_token');
  // }

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <Text>MAIN PAGE</Text>
        <Text>MAIN PAGE</Text>
        <Text>MAIN PAGE</Text>
        <Text>MAIN PAGE</Text>
        <Text>MAIN PAGE</Text>
        <Text>MAIN PAGE</Text>
      </View>
    );
  }
}

export default MainCategories;
