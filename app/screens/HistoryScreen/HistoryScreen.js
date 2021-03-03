import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  Button, Icon, List, ListItem, Text, RadioGroup, Radio,
} from '@ui-kitten/components';
import { useIsFocused } from '@react-navigation/native';
import Page from '../../components/Page';

import styles from './HistoryScreen.styles';

const HistoryScreen = ({
  auth,
  completedActions,
  navigation: { setOptions, navigate },
}) => {
  const isFocused = useIsFocused();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setOptions({
      title: 'HistoryScreen',
      headerShown: false,
    });
  }, [isFocused]);

  return (
    <Page>
      <View>
        <Text category="h1">Your History</Text>
      </View>
      <View>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={(index) => setSelectedIndex(index)}
        >
          <Radio>Option 1</Radio>
          <Radio>Option 2</Radio>
          <Radio>Option 3</Radio>
        </RadioGroup>
      </View>
    </Page>
  );
};

export default HistoryScreen;
