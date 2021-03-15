import React, { useEffect, useLayoutEffect } from 'react';
import {
  View, Text, LogoTitle, Button,
} from 'react-native';
import SignUpForm from '../../components/SignUpForm';
import Page from '../../components/Page';

import styles from './SignUpScreen.styles';

const SignUpScreen = ({
  auth,
  navigation: { navigate, setOptions, goBack },
}) => {
  useEffect(() => {
    setOptions({
      headerShown: false,
    });
    // fetchMe();
  }, []);

  return (
    <Page>
      <View>
        <SignUpForm />
      </View>
      <View style={styles.goBackContainer}>
        <Text onPress={() => goBack()} style={styles.backText}>
          Go Back
        </Text>
      </View>
    </Page>
  );
};

export default SignUpScreen;
