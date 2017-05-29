import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Slides from './Slides';

//Need to fetch data from backend, or we can fixed it and update as per norm
const SLIDE_DATA = [
  { text: 'Welcome to Mavent', color: '#03A9F4' },
  { text: 'Get a job near you', color: '#009688' },
  { text: 'Start earning through gigs', color: '#03A9F4' },
  { text: 'Set your location, then swipe away', color: '#54b754' }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    Actions.login();
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;
