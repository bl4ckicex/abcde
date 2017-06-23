import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import test2 from './test2';
import WelcomeScreen from './auth/WelcomeScreen';
import Login from './auth/LoginForm';

import registerMain from './auth/registerMain';
import registerName from './auth/registerName';
import registerEmail from './auth/registerEmail';
import registerGender from './auth/registerGender';
import registerDOB from './auth/registerDOB';
import registerPassword from './auth/registerPassword';
import registerTnC from './auth/registerTnC';
import registerMobile from './auth/registerMobile';
import registerOTP from './auth/registerOTP';

import MainCategories from './mainUI/MainCategories';
import ListSkills from './mainUI/ListSkills';

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
      <Scene key='auth' navigationBarStyle={{ backgroundColor: '#0B486B', borderBottomWidth: 0 }} titleStyle={{ color: 'white', fontSize: 18, fontWeight: '300' }}>
        <Scene key="test2" component={test2} title="Monetizing your skill" />

        <Scene key="welcomescreen" component={WelcomeScreen} hideNavBar />
        <Scene key="login" component={Login} title="Please Login" hideNavBar renderBackButton={() => (null)} panHandlers={null} />

        <Scene key="registerMain" component={registerMain} title="Create account" hideNavBar={false} />
        <Scene key="registerName" component={registerName} title="Name" hideNavBar={false} />
        <Scene key="registerEmail" component={registerEmail} title="Email Address" hideNavBar={false} />
        <Scene key="registerDOB" component={registerDOB} title="Date of Birth" hideNavBar={false} />
        <Scene key="registerGender" component={registerGender} title="Gender" hideNavBar={false} />
        <Scene key="registerPassword" component={registerPassword} title="Password" hideNavBar={false} />
        <Scene key="registerTnC" component={registerTnC} title="Terms & Privacy" hideNavBar={false} />
        <Scene key="registerMobile" component={registerMobile} title="Mobile" hideNavBar={false} />
        <Scene key="registerOTP" component={registerOTP} title="Verify OTP" hideNavBar={false} />

      </Scene>

      <Scene key='mainUI' navigationBarStyle={{ backgroundColor: '#0B486B', borderBottomWidth: 0 }} titleStyle={{ color: 'white', fontSize: 18, fontWeight: '400' }}>
        <Scene key="MainCategories" component={MainCategories} title="M A V E N T" renderBackButton={() => (null)} panHandlers={null} />
        <Scene key="ListSkills" component={ListSkills} title="Monetizing your skill" />
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
