import React, { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';
import Text from '@components/Text';
import Button from '@components/Button';
import { Input } from 'react-native-elements';
import globalStyles from '@theme/globalStyles';
import Page from '../../components/Page';

import styles from './SignUpScreen.styles';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const SignUpScreen = ({
  auth,
  navigation: { navigate, setOptions, goBack },
  signInAnonymously,
}) => {
  const [name, setName] = useState('');
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    setOptions({
      headerShown: false,
    });
    // fetchMe();
  }, []);

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });

  return (
    <Page>
      <View style={{
        justifyContent: 'space-around',
        height: dimensions.window.height - 180,
      }}
      >
        <View style={styles.headingContainer}>
          <Text category="h4">Enter your name</Text>
        </View>
        <View>
          <Input
            placeholder="Name"
            inputStyle={{
              color: 'white',
              fontSize: 48,
              marginBottom: 10,
              textAlign: 'center',
            }}
            onChangeText={(value) => setName(value)}
          />
        </View>
        <View style={[globalStyles.alignCenter, globalStyles.justifyCenter]}>
          <Button onPress={() => signInAnonymously({ displayName: name })}>Done</Button>
        </View>
        <View style={styles.goBackContainer}>
          <Text onPress={() => goBack()} style={styles.backText}>
            Go Back
          </Text>
        </View>
      </View>

    </Page>
  );
};

export default SignUpScreen;
