import React, { useEffect, useState } from 'react';
import { useAssets } from 'expo-asset';
import { View, Image } from 'react-native';
import {
  Button, Icon, List, ListItem, RadioGroup, Radio,
} from '@ui-kitten/components';
import { useIsFocused } from '@react-navigation/native';
import Text from '@components/Text';
import COLORS from '@theme/colors';
import Page from '../../components/Page';

import styles from './HistoryScreen.styles';

const HistoryScreen = ({
  actions,
  assets: { w, l },
  error,
  fetchActions,
  loading,
  navigation: { setOptions, navigate },
}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    setOptions({
      title: 'HistoryScreen',
      headerShown: false,
    });
    fetchActions();
  }, [isFocused]);

  return (
    <Page>
      <View>
        <Text category="h4">Your History</Text>
      </View>
      <View style={{ margin: 10 }}>
        { !!Object.keys(actions)?.length && Object.keys(actions).map((date) => (
          <View style={{ marginBottom: 10 }}>
            <Text category="h5">{date}</Text>
            <View style={{ marginLeft: 10, marginTop: 5 }}>
              { actions[date]?.length && actions[date].map((dateAction) => (
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <View style={{ width: 30, height: 20 }}>
                    {
                      dateAction.complete
                        ? <Image style={{ width: 20, height: 20 }} source={{ uri: w?.localUri }} />
                        : <Image style={{ width: 20, height: 20 }} source={{ uri: l?.localUri }} />
                    }
                  </View>
                  <View style={{ flex: 6 }}>
                    <Text category="h6" style={{ color: dateAction.complete ? COLORS.LIGHT_TEXT : COLORS.DARK_TEXT }}>
                      {dateAction.name}
                    </Text>

                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </Page>
  );
};

export default HistoryScreen;
