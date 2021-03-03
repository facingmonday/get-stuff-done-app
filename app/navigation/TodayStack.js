import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TodayScreen from '../screens/TodayScreen';

const { Navigator, Screen } = createStackNavigator();

const TodayStack = () => (
  <Navigator
    screenOptions={{
      tabBarIcon: 'settings',
      headerShown: false,
    }}
  >
    <Screen name="Today" component={TodayScreen} />
  </Navigator>
);

export default TodayStack;
