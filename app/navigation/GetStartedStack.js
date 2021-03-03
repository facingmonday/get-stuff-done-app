import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetStartedScreen from '../screens/GetStartedScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
// import TagsScreen from '../screens/TagsScreen';
import CompleteScreen from '../screens/CompleteScreen';

const { Navigator, Screen } = createStackNavigator();

const GetStartedStack = () => (
  <Navigator>
    <Screen name="GetStarted" component={GetStartedScreen} />
    <Screen name="SignIn" component={SignInScreen} />
    <Screen name="SignUp" component={SignUpScreen} />
    <Screen name="Welcome" component={WelcomeScreen} />
    <Screen name="Complete" component={CompleteScreen} />
  </Navigator>
);

export default GetStartedStack;
