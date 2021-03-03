import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TomorrowScreen from '../screens/TomorrowScreen';

const { Navigator, Screen } = createStackNavigator();

const TodayStack = () => (
  <Navigator
    screenOptions={{
      tabBarIcon: 'settings',
      headerShown: false,
    }}
  >
    <Screen name="Today" component={TomorrowScreen} />
  </Navigator>
);

export default TodayStack;
