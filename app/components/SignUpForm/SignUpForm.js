import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  Text, Input, Spinner,
} from '@ui-kitten/components';
import Button from '../Button';
import { registerForPushNotificationsAsync } from '../../utils';
import Alert from '../Alert';
import styles from './SignUpForm.styles';

function SignInForm({
  auth, loading, error, nextHref, navigation: { navigate }, registerUser, signInAnonymously,
}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [expoPushToken, setExpoPushToken] = useState();

  useEffect(() => {
    async function register() {
      const token = await registerForPushNotificationsAsync();
      setExpoPushToken(token);
    }
    register();
  }, []);

  const handleSubmit = () => {
    registerUser({
      expoPushToken,
      email,
      password,
      name,
    });
  };
  return (
    <>
      <View style={styles.titleContainer}>
        <Text category="h1">Sign Up</Text>
      </View>
      <View>
        <Button onPress={() => signInAnonymously()}>Use Anonymously</Button>
      </View>
      <View>
        <Text category="p1">Or Create An Account</Text>
      </View>
      { Boolean(auth.error) && (
      <View style={styles.titleContainer}>
        <Alert>Failed to register user.</Alert>
      </View>
      )}
      {
        auth?.loading
          ? (
            <View style={styles.spinnerContainer}>
              <Spinner />
            </View>
          )
          : (
            <View>
              <Input
                value={email}
                style={styles.input}
                label={(evaProps) => <Text {...evaProps}>Email</Text>}
                onChangeText={(nextValue) => setEmail(nextValue)}
              />
              <Input
                value={password}
                secureTextEntry
                style={styles.input}
                label={(evaProps) => <Text {...evaProps}>Password</Text>}
                onChangeText={(nextValue) => setPassword(nextValue)}
                caption="Should contain letters, numbers, 1 uppercase and at least 1 symbols"
              />
              <Input
                value={name}
                style={styles.input}
                label={(evaProps) => <Text {...evaProps}>Display Name</Text>}
                onChangeText={(nextValue) => setName(nextValue)}
              />

              <View style={styles.buttonContainer}>
                <Button onPress={handleSubmit}>Sign Up</Button>
              </View>
            </View>
          )
      }

    </>
  );
}
SignInForm.defaultProps = {
  saveUser: () => null,
};
export default SignInForm;
