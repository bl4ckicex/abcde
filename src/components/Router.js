import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Register from './Register';
import Login from './LoginForm';
import MobileNumber from './MobileNumber';
import OTP from './OTP';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='auth' navigationBarStyle={{ backgroundColor: '#1e2226', borderBottomColor: '#1e2226' }} titleStyle={{ color: '#FFF' }}>
        <Scene key="login" component={Login} title="Please Login" />
        <Scene key="register" component={Register} title="Registration" />
        <Scene key="mobile" component={MobileNumber} title="Mobile Number" />
        <Scene key="otp" component={OTP} title="Validate OTP" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
