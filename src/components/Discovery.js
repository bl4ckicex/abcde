import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Platform
} from 'react-native';
import {
  MapView,
  Constants,
  Location,
  Permissions,
} from 'expo';
import { Button } from 'react-native-elements';

class Discovery extends Component {

  state = {
    mapLoaded: false,
    errorMessage: null,
    location: null,
    region: {
      longitude: 103.851959,
      latitude: 1.290270,
      longitudeDelta: 0.0045,
      latitudeDelta: 0.0034
    }
  }
  componentWillMount() {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
          errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
      } else {
        this.getLocationAsync();
        // console.log(this.state.region);
      }
    }

  componentDidMount() {
    this.setState({ mapLoaded: true });
    // this.getLocationAsync();
    // console.log(this.state.region);
  }

  async getLocationAsync() {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
     // console.log({ status });
    if (status === 'granted') {
      Location.getCurrentPositionAsync({ enableHighAccuracy: true, maximumAge: 600000 }).then((position) => {
        // console.log({ position });
        const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0045,
            longitudeDelta: 0.0034,
        };
        this.setState({ region: userLocation });
        }).catch((e) => {
         // this one is firing the error instantly
          alert(e + ' Please make sure your location (GPS) is turned on.');
        });
    } else {
      throw new Error('Location permission not granted');
    }
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider="google"
          region={this.state.region}
          showsMyLocationButton
          showsCompass
          showsUserLocation
          showsScale
          loadingEnabled
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
};

export default Discovery;
