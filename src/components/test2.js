import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import ModalPicker from 'react-native-modal-picker';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const data = [
            { key: '0', section: true, label: 'Category' },
            { key: '1', label: 'Comfortable Home' },
            { key: '2', label: 'Enhancing Knowledge' },
            { key: '3', label: 'Enhancing Events' },
            { key: '4', label: 'Extra Care' },
            { key: '5', label: 'Filling Tummies' },
            { key: '6', label: 'Healthy Lifestyle' },
            { key: '7', label: 'Helping Hands' },
            { key: '8', label: 'Look Better' },
        ];

const comfy = [
            { key: '0', section: true, label: 'Comfortable Home' },
            { key: '1', label: 'Cleaning' },
            { key: '2', label: 'Plumber' },
            { key: '3', label: 'Others' },
        ];

const care = [
            { key: '0', section: true, label: 'Extra Care' },
            { key: '1', label: 'Midwives' },
            { key: '2', label: 'Elderly Care' },
            { key: '3', label: 'Baby Care' },
            { key: '4', label: 'Others' },
        ];

const events = [
            { key: '0', section: true, label: 'Enhancing Events' },
            { key: '1', label: 'Makeup Artist' },
            { key: '2', label: 'Performer' },
            { key: '3', label: 'Photographer' },
            { key: '4', label: 'Others' },
        ];

const knowledge = [
            { key: '0', section: true, label: 'Enhancing Knowledge' },
            { key: '1', label: 'Music' },
            { key: '2', label: 'Tuition' },
            { key: '3', label: 'Others' },
        ];

const tummy = [
            { key: '0', section: true, label: 'Filling Tummies' },
            { key: '1', label: 'Home Cooked' },
            { key: '2', label: 'Cooking Classes' },
            { key: '3', label: 'Others' },
        ];

const health = [
            { key: '0', section: true, label: 'Healthy Lifestyle' },
            { key: '1', label: 'Gym' },
            { key: '2', label: 'Exercise Expert' },
            { key: '3', label: 'Sports' },
            { key: '4', label: 'Others' },
        ];

const helpH = [
            { key: '0', section: true, label: 'Helping Hands' },
            { key: '1', label: 'Grocery Shopper' },
            { key: '2', label: 'Pet Walker' },
            { key: '3', label: 'Others' },
        ];

const lookB = [
            { key: '0', section: true, label: 'Look Better' },
            { key: '1', label: 'Hair Dresser' },
            { key: '2', label: 'Nail Artist' },
            { key: '3', label: 'Others' },
        ];

class test2 extends Component {

  state = {
          category: '',
          subcategory: '',
          textInputValue: '',
          Mon: false,
          Tue: false,
          Wed: false,
          Thu: false,
          Fri: false,
          Sat: false,
          Sun: false,
          };

  onPressMon = () => {
    this.setState({ Mon: !this.state.Mon });
  }

  onPressTue = () => {
    this.setState({ Tue: !this.state.Tue });
  }

  onPressWed = () => {
    this.setState({ Wed: !this.state.Wed });
  }

  onPressThu = () => {
    this.setState({ Thu: !this.state.Thu });
  }

  onPressFri = () => {
    this.setState({ Fri: !this.state.Fri });
  }

  onPressSat = () => {
    this.setState({ Sat: !this.state.Sat });
  }

  onPressSun = () => {
    this.setState({ Sun: !this.state.Sun });
  }

  renderCarePicker = () => {
    return (
      <ModalPicker
          data={care}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderComfyPicker = () => {
    return (
      <ModalPicker
          data={comfy}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderEventPicker = () => {
    return (
      <ModalPicker
          data={events}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderKnowledgePicker = () => {
    return (
      <ModalPicker
          data={knowledge}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderTummyPicker = () => {
    return (
      <ModalPicker
          data={tummy}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderHealthPicker = () => {
    return (
      <ModalPicker
          data={health}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderHelpHPicker = () => {
    return (
      <ModalPicker
          data={helpH}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderLookPicker = () => {
    return (
      <ModalPicker
          data={lookB}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderPicker = () => {
    switch (this.state.category) {
      case 'Comfortable Home':
        return this.renderComfyPicker();
      case 'Extra Care':
        return this.renderCarePicker();
      case 'Enhancing Events':
        return this.renderEventPicker();
      case 'Enhancing Knowledge':
        return this.renderKnowledgePicker();
      case 'Filling Tummies':
        return this.renderTummyPicker();
      case 'Healthy Lifestyle':
        return this.renderHealthPicker();
      case 'Helping Hands':
        return this.renderHelpHPicker();
      case 'Look Better':
        return this.renderLookPicker();
      default:
        return <View style={{ flex: 0.5, borderWidth: 1, borderColor: '#ccc', alignItems: 'flex-start', paddingLeft: 8, padding: 8 }}><Text style={{ fontSize: 18 }}>Select a category first</Text></View>;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.viewContainer}>
          <View style={styles.CardContainer}>

            <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>Service Category</Text>
              <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', height: 80, borderRadius: 3, }}>

              <ModalPicker
                  data={data}
                  initValue="Select a Category"
                  onChange={(option) => { this.setState({ category: option.label }); }}
              >

                  <TextInput
                      style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
                      editable={false}
                      placeholder="Select a Category"
                      value={this.state.category}
                  />
              </ModalPicker>
              {this.renderPicker()}
              </View>
            </View>

            <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 15 }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>Service Description</Text>
              <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', borderRadius: 3, alignItems: 'center', padding: 8 }}>
                <TextInput
                    placeholderTextColor="rgba(0,0,0,0.3)"
                    placeholder="Please keep it within 140 characters"
                    keyboardType="default"
                    autoCorrect
                    autoCapitalize="sentences"
                    multiline
                    maxLength={140}
                    autoCorrect={false}
                    style={{ height: 100, width: 0.80 * SCREEN_WIDTH, alignItems: 'center', padding: 8, justifyContent: 'center', fontSize: 16, textAlign: 'center', }}
                    underlineColorAndroid="transparent"
                />
              </View>
            </View>

            <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 15 }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>Day Availability</Text>
              <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', borderRadius: 3, alignItems: 'center', padding: 8, flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableHighlight underlayColor='#158BCF' style={this.state.Mon ? styles.buttonPressed : styles.button} onPress={this.onPressMon }>
                  <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>M</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='#158BCF' style={this.state.Tue ? styles.buttonPressed : styles.button} onPress={this.onPressTue}>
                  <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>T</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='#158BCF' style={this.state.Wed ? styles.buttonPressed : styles.button} onPress={this.onPressWed}>
                  <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>W</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='#158BCF' style={this.state.Thu ? styles.buttonPressed : styles.button} onPress={this.onPressThu}>
                  <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>T</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='#158BCF' style={this.state.Fri ? styles.buttonPressed : styles.button} onPress={this.onPressFri}>
                  <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>F</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='#158BCF' style={this.state.Sat ? styles.buttonPressed : styles.button} onPress={this.onPressSat}>
                  <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>S</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='#158BCF' style={this.state.Sun ? styles.buttonPressed : styles.button} onPress={this.onPressSun}>
                  <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>S</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>

            <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 15 }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>Time Availability</Text>
              <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', borderRadius: 3, alignItems: 'center', padding: 8, flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3 }}></View>
                <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3 }}></View>
                <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3 }}></View>
                <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 42, borderRadius: 3 }}></View>
              </View>
            </View>


          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'android' ? 54 : 64),
    // backgroundColor: 'blue',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  CardContainer: {
    flex: 1,
    width: 0.95 * SCREEN_WIDTH,
    backgroundColor: '#D7D7D9',
    marginTop: 8,
    borderRadius: 4,
    alignItems: 'center'
  },
  buttonPressed: {
    backgroundColor: '#158BCF',
  },
  button: {
    backgroundColor: 'white'
  }
});

export default test2;
