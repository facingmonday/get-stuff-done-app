import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  Text, Input, Button, Spinner,
} from '@ui-kitten/components';
import { registerForPushNotificationsAsync } from '../../utils';
import Alert from '../Alert';
import styles from './SignUpForm.styles';

function SignInForm({
  auth, loading, error, nextHref, navigation: { navigate }, registerUser,
}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [expoPushToken, setExpoPushToken] = useState();

  useEffect(() => {
    async function register() {
      const token = await registerForPushNotificationsAsync();
      setExpoPushToken(token);
    }
    register();
  }, []);

  useEffect(() => {
    if (auth.token) {
      navigate('Welcome');
    }
  }, [auth.token]);

  const handleSubmit = () => {
    registerUser({
      expoPushToken,
      email,
      password,
      name,
      city,
      state,
      zip,
    });
  };
  return (
    <>
      <View style={styles.titleContainer}>
        <Text category="h1">Sign Up</Text>
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
                label={(evaProps) => <Text {...evaProps}>Name</Text>}
                onChangeText={(nextValue) => setName(nextValue)}
              />
              <Input
                value={city}
                style={styles.input}
                label={(evaProps) => <Text {...evaProps}>City</Text>}
                onChangeText={(nextValue) => setCity(nextValue)}
              />
              <Input
                value={state}
                style={styles.input}
                label={(evaProps) => <Text {...evaProps}>State</Text>}
                onChangeText={(nextValue) => setState(nextValue)}
              />
              <Input
                value={zip}
                style={styles.input}
                label={(evaProps) => <Text {...evaProps}>Zip</Text>}
                onChangeText={(nextValue) => setZip(nextValue)}
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
