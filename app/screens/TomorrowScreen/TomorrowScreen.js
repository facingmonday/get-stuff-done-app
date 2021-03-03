import React, { useEffect, useState } from 'react';
import { addDays, format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import {
  AppState, Modal, ScrollView, View, Dimensions,
} from 'react-native';
import { Text } from '@ui-kitten/components';
import styles from './TomorrowScreen.styles';
import Page from '../../components/Page';
import ActionRow from '../../components/ActionRow';
import ActionCreateForm from '../../components/ActionCreateForm';
import Button from '../../components/Button';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const TomorrowScreen = ({
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
      title: 'TomorrowScreen',
      headerShown: false,
    });

    fetchActions();
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

  // useEffect(() => {
  //   if (AppState.currentState == 'active') {
  //     fetchActions({
  //       filters: [
  //         {
  //           field: 'date',
  //           opperand: '==',
  //           value: format(new Date(), 'MM/dd/yyyy'),
  //         },
  //       ],
  //     });
  //   }
  // }, [AppState.currentState]);
  return (
    <Page onPullToRefresh={fetchActions}>
      <View style={{
        justifyContent: 'space-between', height: dimensions.window.height - 180,
      }}
      >
        <View>
          <View style={styles.row}>
            <View style={styles.titleContainer}>
              <Text category="h2" style={styles.headerText}>Tomorrow</Text>
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
          Boolean(actions?.length) && (
            <View style={{ paddingLeft: 10 }}>
                {
                  actions.map((action) => (
                    <ActionRow key={`TomorrowScreen_ActionRow_${action.id}`} action={action} />
                  ))
                }
            </View>
          )
        }
        </View>
        <View style={styles.actionCreateButtonContainer}>
          <Button textStyles={{ fontSize: 16 }} buttonStyles={{ width: 300 }}>Create Task</Button>
        </View>
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ActionCreateForm />
            </View>
          </View>
        </Modal>
      </View>
    </Page>
  );
};

export default TomorrowScreen;
