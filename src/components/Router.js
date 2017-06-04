import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import OTP from './auth/OTP';
import Register from './auth/Register';
import Login from './auth/LoginForm';
import MobileNumber from './auth/MobileNumber';
import WelcomeScreen from './auth/WelcomeScreen';
import MainCategories from './mainUI/MainCategories';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='auth' navigationBarStyle={{ backgroundColor: '#00A0B0' }} titleStyle={{ color: 'white' }}>
        <Scene key="welcomescreen" component={WelcomeScreen} hideNavBar />
        <Scene key="login" component={Login} title="Please Login" hideNavBar renderBackButton={() => (null)} panHandlers={null} />
        <Scene key="register" component={Register} title="Registration" hideNavBar={false} />
        <Scene key="mobile" component={MobileNumber} title="Mobile Number" />
        <Scene key="otp" component={OTP} title="Validate OTP" />
      </Scene>
      <Scene key='mainUI' navigationBarStyle={{ backgroundColor: '#00A0B0', paddingTop: Platform.OS === 'android' ? 10 : 0 }} titleStyle={{ color: 'white' }}>
        <Scene key="maincategories" component={MainCategories} title="M A V E N T" renderBackButton={() => (null)} panHandlers={null} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
