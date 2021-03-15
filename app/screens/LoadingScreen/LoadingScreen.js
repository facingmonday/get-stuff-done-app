import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { Spinner } from '@ui-kitten/components';
import { COLORS } from '../../theme';
import firebase from '../../services/firebase';

const LoadingScreen = ({
  auth, loadApp, navigation: { navigate, setOptions }, loaded, route,
}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    setOptions({
      headerShown: false,
    });
    loadApp();
  }, [isFocused]);

  useEffect(
    () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigate('Today');
        } else {
          navigate('GetStarted');
        }
      });
    }, [],
  );

  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.DARK_BACKGROUND,
    }}
    >
      <Spinner size="giant" status="control" />
    </View>
  );
};

export default LoadingScreen;
