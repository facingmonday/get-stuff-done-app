import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';

const { Navigator, Screen } = createStackNavigator();

const ProfileStack = () => (
  <Navigator
    screenOptions={{
      tabBarIcon: 'settings',
      headerShown: false,
    }}
  >
    <Screen name="Profile" component={ProfileScreen} />
  </Navigator>
);

export default ProfileStack;
