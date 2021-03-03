import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';

const { Navigator, Screen } = createStackNavigator();

const AccountStack = () => (
  <Navigator
    screenOptions={{
      tabBarIcon: 'settings',
      headerShown: false,
    }}
  >
    <Screen name="Home" component={AccountScreen} />
  </Navigator>
);

export default AccountStack;
