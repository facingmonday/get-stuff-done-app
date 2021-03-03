import React from 'react';
import { Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
  <Navigator
    screenOptions={{
      tabBarIcon: 'settings',
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#000"
        />
      ),
    }}
  >
    <Screen name="Home" component={HomeScreen} />
  </Navigator>
);

export default HomeStack;
