import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HistoryScreen from '../screens/HistoryScreen';

const { Navigator, Screen } = createStackNavigator();

const ProfileStack = () => (
  <Navigator
    screenOptions={{
      tabBarIcon: 'settings',
      headerShown: false,
    }}
  >
    <Screen name="History" component={HistoryScreen} />
  </Navigator>
);

export default ProfileStack;
