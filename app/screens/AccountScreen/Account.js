import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './Account.styles';

const AccountScreen = ({ auth, navigation: { setOptions } }) => {
  useEffect(() => {
    setOptions({
      title: 'Account',
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.accountScreen}>
      <Text>Account Screen</Text>
    </View>
  );
};

export default AccountScreen;
