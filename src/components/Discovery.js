import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  Platform,
  ScrollView,
  Text,
  Image,
  Dimensions
} from 'react-native';
import {
  MapView,
  Constants,
  Location,
  Permissions,
} from 'expo';
import {
  Card,
  Icon
 } from 'react-native-elements';
 import data from './provider.json';
const SCREEN_H = Dimensions.get('window').height;

class Discovery extends Component {

  state = {
    mapLoaded: false,
    errorMessage: null,
    location: null,
    region: {
      longitude: 103.8198,
      latitude: 1.3521,
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
        // console.log(data);
      }
    }

  componentDidMount() {
    this.getLocationAsync();
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

  renderRow() {
    return data.map((provider) => {
      return (
        <View key={provider.id} style={{ height: 80, backgroundColor: '#ffffff', margin: 5, marginBottom: 1, borderRadius: 15, borderWidth: 1, flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
            <Image source={require('./profile.png')} style={{ height: 45, width: 45, borderRadius: 22 }} />
            <Text style={{ fontSize: 15 }}>{provider.Name}</Text>
          </View>
          <View style={{ flex: 2, alignItems: 'center' }}>
            <Text style={{ fontSize: 15, paddingBottom: 15, paddingTop: 5 }}>{provider.Dist}</Text>
            <Text style={{ fontSize: 20 }}>{provider.Service}</Text>
          </View>
          <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='thumb-up' size={35} style={{ padding: 4 }} />
            <Icon name='chat' size={40} />
          </View>
        </View>
      );
    });
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
      <View style={styles.mapContainer}>
        <MapView
          // provider="google"
          region={this.state.region}
          showsMyLocationButton
          showsUserLocation
          showsScale
          loadingEnabled
          style={{ height: 0.4 * SCREEN_H }}
        />
        <View style={styles.listContainer}>
          <View style={{ height: 40, borderWidth: 1, borderColor: 'black', backgroundColor: '#40506A', alignItems: 'center' }}>
            <Text style={{ fontSize: 28, color: 'white'  }}>Mavens in this area!</Text>
          </View>
          <ScrollView
            automaticallyAdjustContentInsets={false}
          >
            {this.renderRow()}
          </ScrollView>
        </View>
      </View>

    );
  }
}

const styles = {
  mapContainer: {
    flex: 1,
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  listContainer: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    borderTopColor: 'gray',
    borderWidth: 1
  }
};

export default Discovery;
