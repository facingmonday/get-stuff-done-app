import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

import style from './ForgotPasswordScreen.styles';

const ForgotPasswordScreen = ({ auth, navigation: { setOptions, navigate } }) => {
  useEffect(() => {
    setOptions({
      title: 'ForgotPasswordScreen',
      headerShown: false,
    });
  }, []);

  return (
    <View style={ style.forgotPasswordScreen }>
      <Text>ForgotPasswordScreen Screen</Text>
    </View>
  );
};

export default ForgotPasswordScreen;
