import React, { useEffect, useState } from 'react';
import {
  Modal, View, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import {
  addDays, format, getDate, getMonth, getYear,
} from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import { Text } from '@ui-kitten/components';

import Page from '../../components/Page';
import ActionRow from '../../components/ActionRow';
import ActionCreateForm from '../../components/ActionCreateForm';
import Button from '../../components/Button';

import styles from './ActionListScreen.styles';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const ActionListScreen = ({
  actions,
  complete,
  fetchActions,
  navigation: { navigate, setOptions },
  resetAction,
  setShowModal,
  showModal,
  today = true,
}) => {
  const isFocused = useIsFocused();
  const [dimensions, setDimensions] = useState({ window, screen });

  const fetchAvailableActions = () => {
    const startTime = today ? new Date() : addDays(new Date(), 1);
    const endTime = addDays(startTime, 1);

    fetchActions({
      filters: [
        {
          field: 'date',
          opperand: '>=',
          value: new Date(getYear(startTime), getMonth(startTime), getDate(startTime)).getTime(),
        },
        {
          field: 'date',
          opperand: '<=',
          value: new Date(getYear(endTime), getMonth(endTime), getDate(endTime)).getTime(),
        },
      ],
    });
  };

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  const handleActionCreateFormComplete = () => {
    setShowModal(false);
    resetAction();
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });

  useEffect(() => {
    setOptions({
      title: 'ActionListScreen',
      headerShown: false,
    });
    fetchAvailableActions();
  }, [isFocused]);

  return (
    <Page onPullToRefresh={fetchAvailableActions}>
      <View style={{
        justifyContent: 'space-between', height: dimensions.window.height - 180,
      }}
      >
        <View>
          <View style={styles.row}>
            <View style={styles.titleContainer}>
              <Text category="h2" style={styles.headerText}>{ today ? 'Today' : 'Tomorrow'}</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text category="p1" style={styles.headerText}>
                {
                  today ? format(new Date(), 'M/dd/yyyy') : format(addDays(new Date(), 1), 'M/dd/yyyy')
                }
              </Text>
            </View>
          </View>
          <View style={styles.rowNoBorder}>
            <View style={styles.headingContainer}>
              <Text style={styles.actionsTitle} category="h6">critical tasks.</Text>
            </View>
            <View style={styles.headingContainer}>
              <Text style={styles.actionsSubTitle} category="p2">(double tap to complete)</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.actionsContainer}>
          {
            !!actions?.length && actions.map((action) => (
              <ActionRow action={action} />
            ))
          }
        </ScrollView>
        <View style={styles.actionCreateButtonContainer}>
          <Button
            textStyles={{ fontSize: 16 }}
            buttonStyles={{ width: 300 }}
            onPress={() => navigate('ActionCreate')}
          >
            Create Task
          </Button>
        </View>
      </View>
    </Page>
  );
};

export default ActionListScreen;
