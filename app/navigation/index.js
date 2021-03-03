import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadingScreen from '../screens/LoadingScreen';

import GetStartedStack from './GetStartedStack';
import TodayStack from './TodayStack';
import TomorrowStack from './TomorrowStack';
import HistoryStack from './HistoryStack';
import ProfileStack from './ProfileStack';

import TabBar from '../components/TabBar';
import { selectApp } from '../selectors/app';

import { resetAllStateKeys } from '../actions/stateKeys';

import { navigationRef } from './service';

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => {
  const { loading } = useSelector(selectApp);
  const dispatch = useDispatch();

  return (
    <NavigationContainer ref={navigationRef} onStateChange={() => dispatch(resetAllStateKeys())}>
      <Navigator tabBar={(props) => <TabBar {...props} />}>
        <Screen name="Loading" options={{ tabBarVisible: false }} component={LoadingScreen} />
        <Screen name="GetStarted" options={{ tabBarVisible: false }} component={GetStartedStack} />
        <Screen name="Today" options={{ icon: 'checkmark-circle-outline', tabBarLabel: 'Today' }} component={TodayStack} />
        <Screen name="Tomorrow" options={{ icon: 'ios-calendar', tabBarLabel: 'Tomorrow' }} component={TomorrowStack} />
        <Screen name="History" options={{ icon: 'book', title: 'History' }} component={HistoryStack} />
        <Screen name="Profile" options={{ icon: 'person', tabBarLabel: 'Profile' }} component={ProfileStack} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
