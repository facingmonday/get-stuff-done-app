import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import Button from '@components/Button';

import styles from './LogoutButton.styles';

const LogoutButton = ({
  auth, logoutUser, navigation: { navigate },
}) => {
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (isFocused && !auth.token) {
  //     navigate('GetStarted', { screen: 'GetStarted' });
  //   }
  // }, [isFocused]);

  return <Button onPress={() => logoutUser('GetStarted')}>Log Out</Button>;
};

export default LogoutButton;
