import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text, Layout } from '@ui-kitten/components';
import SignInForm from '../../components/SignInForm';
import Page from '../../components/Page';

import styles from './SignInScreen.styles';

const SignInScreen = ({ auth, navigation: { setOptions, navigate, goBack } }) => {
  useEffect(() => {
    setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Page>
      <View style={styles.signInForm}>
        <View style={styles.signInRow}>
          <SignInForm />
        </View>
        <View style={styles.signInRow}>
          <Text style={styles.goBackText}>Don&apos;t have an account?</Text>
          <Button onPress={() => navigate('SignUp')}>Create Account</Button>
        </View>
        <Text style={styles.goBackText} onPress={() => goBack()}>Go Back</Text>
      </View>
    </Page>
  );
};

export default SignInScreen;
