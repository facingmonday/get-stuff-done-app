import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ auth, fetchMe, navigation: { setOptions } }) => {
  useEffect(() => {
    setOptions({
      title: 'Home',
      headerShown: false,
    });
    // fetchMe();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
