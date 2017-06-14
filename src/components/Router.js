import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import OTP from './auth/OTP';
import Register from './auth/Register';
import Login from './auth/LoginForm';
import MobileNumber from './auth/MobileNumber';
import WelcomeScreen from './auth/WelcomeScreen';
import MainCategories from './mainUI/MainCategories';
import comfy from './mainUI/SubCategories/comfy';
import Care from './mainUI/SubCategories/Care';
import enEvent from './mainUI/SubCategories/enEvent';
import fillTummy from './mainUI/SubCategories/fillTummy';
import health from './mainUI/SubCategories/health';
import helpHand from './mainUI/SubCategories/helpHand';
import lookBetter from './mainUI/SubCategories/lookBetter';
import enKnowledge from './mainUI/SubCategories/enKnowledge';


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='auth' navigationBarStyle={{ backgroundColor: '#0B486B', borderBottomWidth: 0 }} titleStyle={{ color: 'white', fontSize: 18 }}>
        <Scene key="welcomescreen" component={WelcomeScreen} hideNavBar />
        <Scene key="login" component={Login} title="Please Login" hideNavBar renderBackButton={() => (null)} panHandlers={null} />
        <Scene key="register" component={Register} title="Registration" hideNavBar={false} />
        <Scene key="mobile" component={MobileNumber} title="Mobile Number" />
        <Scene key="otp" component={OTP} title="Validate OTP" />
      </Scene>

      <Scene key='mainUI' navigationBarStyle={{ backgroundColor: '#0B486B', borderBottomWidth: 0 }} titleStyle={{ color: 'white', fontSize: 18, fontWeight: '400' }}>
        <Scene key="MainCategories" component={MainCategories} title="M A V E N T" renderBackButton={() => (null)} panHandlers={null} />
        <Scene key="comfy" component={comfy} title="Comfortable Home" />
        <Scene key="Care" component={Care} title="Extra Care" />
        <Scene key="enEvent" component={enEvent} title="Enhancing Events" />
        <Scene key="fillTummy" component={fillTummy} title="Filling Tummies" />
        <Scene key="health" component={health} title="Healthy Lifestyle" />
        <Scene key="helpHand" component={helpHand} title="Helping Hands" />
        <Scene key="lookBetter" component={lookBetter} title="Looking Better" />
        <Scene key="enKnowledge" component={enKnowledge} title="Enhancing knowledge" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
