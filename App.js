import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import Navigation from './app/navigation';
import theme from './app/theme/custom-theme.json';
import configureStore from './app/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Good-Times': require('./assets/fonts/goodtimes.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={configureStore()}>
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <Navigation />
        </ApplicationProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
