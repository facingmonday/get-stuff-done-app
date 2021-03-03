import React from 'react';
import { useAssets } from 'expo-asset';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  RefreshControl, SafeAreaView, StyleSheet, View, ImageBackground,
} from 'react-native';

const wait = (timeout) => new Promise((resolve) => {
  setTimeout(resolve, timeout);
});

const Page = ({ onPullToRefresh = () => null, children }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [assets] = useAssets([
    require('../../../assets/splash.png'),
    require('../../../assets/background-darker.png'),
    require('../../../assets/logo.png'),
  ]);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    onPullToRefresh();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ImageBackground
      source={{ uri: assets && assets[1].localUri }}
      style={{ width: '100%', height: '100%' }}
    >
      <SafeAreaView>
        <KeyboardAwareScrollView
          refreshControl={<RefreshControl colors={['#f0f']} refreshing={refreshing} onRefresh={onRefresh} />}
          contentContainerStyle={{ padding: 20 }}
        >
          {children}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>

  );
};

export default Page;
