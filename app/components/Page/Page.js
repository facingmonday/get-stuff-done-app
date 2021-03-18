import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  RefreshControl, SafeAreaView, StyleSheet, View, ImageBackground,
} from 'react-native';

const wait = (timeout) => new Promise((resolve) => {
  setTimeout(resolve, timeout);
});

const Page = ({
  assets,
  onPullToRefresh = () => null,
  children,
}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    onPullToRefresh();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ImageBackground
      source={{ uri: assets?.['background-darker']?.localUri }}
      style={{ width: '100%', height: '100%', backgroundColor: '#333' }}
    >
      <SafeAreaView>
        <KeyboardAwareScrollView
          refreshControl={<RefreshControl colors={['#000']} refreshing={refreshing} onRefresh={onRefresh} />}
          contentContainerStyle={{ padding: 20 }}
        >
          {children}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Page;
