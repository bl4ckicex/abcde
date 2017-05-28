import Expo from 'expo';
import React from 'react';
import Router from './src/components/Router';

class App extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

Expo.registerRootComponent(App);
