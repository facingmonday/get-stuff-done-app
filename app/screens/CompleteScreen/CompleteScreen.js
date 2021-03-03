import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import Page from '../../components/Page';

import styles from './CompleteScreen.styles';

const CompleteScreen = ({
  auth,
  navigation: { setOptions, navigate, goBack },
}) => {
  useEffect(() => {
    setOptions({
      title: 'CompleteScreen',
      headerShown: false,
    });
  }, []);

  return (
    <Page>
      <View style={{ paddingBottom: 30 }}>
        <View style={styles.textContainer}>
          <Text category="h4">Congratulations!</Text>
        </View>
        <View style={styles.textContainer}>
          <Text category="p1" style={styles.subIntro}>You successfully joined a plan! Click Continue below to manage your promises!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => navigate('Today')}>Continue</Button>
        </View>
      </View>
      <View style={styles.goBackContainer}>
        <Text style={{ color: 'white' }} onPress={() => goBack()}>Go Back</Text>
      </View>
    </Page>
  );
};

export default CompleteScreen;
