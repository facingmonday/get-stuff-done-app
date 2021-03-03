import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';

import styles from './LogoutButton.styles';

const LogoutButton = ({
  auth, logoutUser, navigation: { navigate },
}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && !auth.token) {
      navigate('GetStarted', { screen: 'GetStarted' });
    }
  }, [isFocused, auth.token]);
  return <Button onPress={() => logoutUser()}>Log Out</Button>;
};

export default LogoutButton;
