import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Register from './Register';
import Login from './LoginForm';
import MobileNumber from './MobileNumber';
import OTP from './OTP';
import WelcomeScreen from './WelcomeScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='auth' navigationBarStyle={{ backgroundColor: 'white', borderBottomColor: '#1e2226' }} titleStyle={{ color: 'black' }}>
        <Scene key="welcomescreen" component={WelcomeScreen} hideNavBar />
        <Scene key="login" component={Login} title="Please Login" hideNavBar renderBackButton={() => (null)} panHandlers={null} />
        <Scene key="register" component={Register} title="Registration" hideNavBar={false} />
        <Scene key="mobile" component={MobileNumber} title="Mobile Number" />
        <Scene key="otp" component={OTP} title="Validate OTP" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
