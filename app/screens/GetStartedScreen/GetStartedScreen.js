import React, { useEffect, useLayoutEffect } from 'react';
import { useAssets } from 'expo-asset';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { Button, Spinner } from '@ui-kitten/components';
import styles from './GetStartedScreen.styles';

import { COLORS } from '../../theme';

const GetStartedScreen = ({ auth, navigation: { setOptions, navigate } }) => {
  const [assets] = useAssets([
    require('../../../assets/splash.png'),
    require('../../../assets/background.png'),
    require('../../../assets/logo.png'),
  ]);

  useEffect(() => {
    setOptions({
      title: 'GetStartedScreen',
      headerShown: false,
    });
  }, []);

  const handleGetStartedPress = () => {
    navigate('SignUp');
  };

  const handleSignInPress = () => {
    navigate('SignIn');
  };
  if (!assets) {
    return <View style={styles.getStartedScreen}><Spinner /></View>;
  }
  return (
    <ImageBackground
      source={{ uri: assets[1].localUri }}
      style={{ width: '100%', height: '100%' }}
    >
      <View style={styles.getStartedScreen}>
        <View>
          <View style={styles.logoContainer}>
            <Image style={styles.image} source={{ uri: assets[2].localUri }} />
          </View>
          <View style={styles.getStartedButtonContainer}>
            <Button
              style={styles.getStartedButton}
              onPress={handleGetStartedPress}
            >
              Get Started
            </Button>
          </View>
        </View>
        <View style={styles.signInContainer}>
          <Text style={styles.signInText} onPress={handleSignInPress}>
            Already have an account? Sign in
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStartedScreen;
