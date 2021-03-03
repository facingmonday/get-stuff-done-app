import React, { useEffect, useState } from 'react';
import { addDays, format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import {
  AppState, Modal, ScrollView, View, Dimensions, TouchableOpacity,
} from 'react-native';
import { Text } from '@ui-kitten/components';
import styles from './TodayScreen.styles';
import Page from '../../components/Page';
import ActionRow from '../../components/ActionRow';
import ActionCreateForm from '../../components/ActionCreateForm';
import Button from '../../components/Button';


import getDate from 'date-fns/getDate'
import getMonth from 'date-fns/getMonth'
import getYear from 'date-fns/getMonth';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const TodayScreen = ({
  actions,
  fetchActions,
  navigation: { navigate, setOptions },
}) => {
  const isFocused = useIsFocused();
  const [currentAppState, setCurrentAppState] = useState(AppState.currentState);
  const [modalVisible, setModalVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    setOptions({
      title: 'TodayScreen',
      headerShown: false,
    });

    const date = getDate(new Date())


    fetchActions({
      filters: {
        {
          'field': 'date',
          'opperand': '>='
          'value': 
        }
      }
    });
  }, [isFocused]);

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
    <Page onPullToRefresh={fetchActions}>
      <View style={{
        justifyContent: 'space-between', height: dimensions.window.height - 180,
      }}
      >
        <View>
          <View style={styles.row}>
            <View style={styles.titleContainer}>
              <Text category="h2" style={styles.headerText}>Today</Text>
            </View>
            <View style={styles.dateContainer}>
              <Text category="p1" style={styles.headerText}>{format(addDays(new Date(), 1), 'M/dd/yyyy')}</Text>
            </View>
          </View>
          <View style={styles.rowNoBorder}>
            <View style={styles.headingContainer}>
              <Text style={styles.actionsTitle} category="h6">critical tasks. </Text>
            </View>
            <View style={styles.headingContainer}>
              <Text style={styles.actionsSubTitle} category="p2">(double tap to complete)</Text>
            </View>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          {
            !!actions?.length && actions.map((action) => (
              <ActionRow key={`TodayScreen_ActionRow_${action.id}`} action={action} />
            ))
          }
        </View>
        <View style={styles.actionCreateButtonContainer}>
          <Button
            textStyles={{ fontSize: 16 }}
            buttonStyles={{ width: 300 }}
            onPress={() => setModalVisible(true)}
          >
            Create Task
          </Button>
        </View>

      </View>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          console.log('requestclose');
          setModalVisible(false);
        }}
      >
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.centeredView}>
          <View style={styles.modalView}>
            <ActionCreateForm />
          </View>
        </TouchableOpacity>
      </Modal>
    </Page>
  );
};

export default TodayScreen;
