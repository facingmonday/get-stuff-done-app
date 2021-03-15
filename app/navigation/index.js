import React, { useEffect } from 'react';
import { Root, Toast } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadingScreen from '../screens/LoadingScreen';
import ActionListScreen from '../screens/ActionListScreen';
import ActionCreateScreen from '../screens/ActionCreateScreen';

import GetStartedStack from './GetStartedStack';
import HistoryStack from './HistoryStack';
import ProfileStack from './ProfileStack';

import TabBar from '../components/TabBar';
import { selectToast } from '../selectors/app';

import { resetApp } from '../actions/app';

import { navigationRef } from './service';

const { Navigator, Screen } = createBottomTabNavigator();

const AppNavigator = () => {
  const toast = useSelector(selectToast);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toast) {
      Toast.show(toast);
    }
  }, [toast]);

  return (
    <Root>
      <NavigationContainer ref={navigationRef} onStateChange={() => dispatch(resetApp())}>
        <Navigator tabBar={(props) => <TabBar {...props} />}>
          <Screen name="Loading" options={{ tabBarVisible: false }} component={LoadingScreen} />
          <Screen name="GetStarted" options={{ tabBarVisible: false }} component={GetStartedStack} />
          <Screen name="Today" options={{ icon: 'checkmark-circle-outline', tabBarLabel: 'Today' }}>
            { (props) => <ActionListScreen {...props} />}
          </Screen>
          <Screen name="ActionCreate" options={{ icon: 'add-circle', tabBarLabel: 'Create' }}>
            { (props) => <ActionCreateScreen {...props} />}
          </Screen>
          <Screen name="History" options={{ icon: 'book', title: 'History' }} component={HistoryStack} />
          <Screen name="Profile" options={{ icon: 'person', tabBarLabel: 'Profile' }} component={ProfileStack} />
        </Navigator>
      </NavigationContainer>
    </Root>
  );
};

export default AppNavigator;
