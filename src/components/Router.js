import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import OTP from './OTP';
import Register from './Register';
import Login from './LoginForm';
import MobileNumber from './MobileNumber';
import WelcomeScreen from './WelcomeScreen';
import MainCategories from './MainCategories';
import Discovery from './Discovery';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='auth' navigationBarStyle={{ backgroundColor: 'white', borderBottomColor: '#1e2226' }} titleStyle={{ color: 'black' }}>
        <Scene key="welcomescreen" component={WelcomeScreen} hideNavBar />
        <Scene key="login" component={Login} title="Please Login" hideNavBar renderBackButton={() => (null)} panHandlers={null} />
        <Scene key="register" component={Register} title="Registration" hideNavBar={false} />
        <Scene key="mobile" component={MobileNumber} title="Mobile Number" />
        <Scene key="otp" component={OTP} title="Validate OTP" />
        <Scene key="maincategories" component={MainCategories} title="Main UI" />
        <Scene key="discovery" component={Discovery} title="Discovery" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
