import React, { useEffect, useState } from 'react';
import { Block } from 'galio-framework';
import { View, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import {
  Button, Text, Layout, Input, Spinner,
} from '@ui-kitten/components';
import {
  AppleLoginButton, FacebookLoginButton, GoogleLoginButton, OktaLoginButton,
} from '../SocialLoginButtons';
import { COLORS, globalStyles } from '../../theme';

import { registerForPushNotificationsAsync } from '../../utils';

import styles from './SignInForm.styles';
import { setNextHref } from '../../actions/stateKeys';
import Alert from '../Alert';

const SignInForm = ({
  auth,
  fetchMe,
  loading,
  loginUser,
  navigation: { navigate },
}) => {
  const [expoPushToken, setExpoPushToken] = useState();
  const [email, setEmail] = useState('jay.price@morelandconnect.com');
  const [password, setPassword] = useState('M0r3l4nd!');
  const isFocused = useIsFocused();

  useEffect(() => {
    // setEmail(null);
    // setPassword(null);
    // fetchMe();
  }, [isFocused]);

  useEffect(() => {
    const handleNotifications = async () => {
      const token = await registerForPushNotificationsAsync();
      if (token) {
        setExpoPushToken(token);
      } else {
        // alert('No token');
      }
    };
    handleNotifications();
  }, []);

  useEffect(() => {
    if (auth?.user?.uid) {
      navigate('Today');
    }
  }, [auth?.user?.uid]);

  const handleSignIn = () => {
    if (email && password) {
      loginUser({ expoPushToken, email, password });
    }
  };

  return (
    <Block space="evenly">
      <Block center style={[globalStyles.marginBottom10]}>
        <Text style={styles.headerText} category="h1">Sign In</Text>
      </Block>
      {
        auth.loading
          ? (
            <Block center style={[globalStyles.marginBottom10]}>
              <Spinner size="giant" />
            </Block>
          )
          : (
            <>
              {
                Boolean(auth?.error) && (
                <Block center style={[globalStyles.marginBottom10]}>
                  <Alert>{auth?.error?.message || 'Unable to login'}</Alert>
                </Block>
                )
              }
              <Block style={[globalStyles.marginBottom20]}>
                <Input
                  value={email}
                  type="email"
                  style={styles.input}
                  label={(evaProps) => <Text {...evaProps} style={styles.inputLabel}>Email</Text>}
                  onChangeText={(nextValue) => setEmail(nextValue)}
                />
              </Block>
              <Block style={[globalStyles.marginBottom10]}>
                <Input
                  value={password}
                  type="password"
                  secureTextEntry
                  style={styles.input}
                  label={(evaProps) => <Text {...evaProps} style={styles.inputLabel}>Password</Text>}
                  onChangeText={(nextValue) => setPassword(nextValue)}
                />
              </Block>
              <Block style={[globalStyles.marginBottom10]}>
                <View style={styles.signInButtonContainer}>
                  <Button style={styles.signInButton} onPress={handleSignIn}>
                    <Text style={styles.signInText}>Enter</Text>
                  </Button>
                </View>
              </Block>
            </>
          )
      }
    </Block>
  );
};

export default SignInForm;
