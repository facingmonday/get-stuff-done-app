import React, { useState } from 'react';
import { View } from 'react-native';
import { addDays, format } from 'date-fns';
import {
  Input, Text, Spinner,
} from '@ui-kitten/components';
import Button from '../Button';
import Alert from '../Alert';
import styles from './ActionCreateForm.styles';

const ActionCreateForm = ({
  complete = false,
  date = 'today',
  error,
  loading,
  resetStateKey,
  saveAction,
  onComplete = () => null,
  createAction,
}) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleCreateAction = () => {
    createAction({
      name,
      description,
      date: (date == 'today') ? format(new Date(), 'MM/dd/yyyy') : format(addDays(new Date(), 1), 'MM/dd/yyyy'),
      complete: false,
    });
  };

  const handleResetForm = () => {
    resetStateKey('action');
  };

  const handleClose = () => {
    onComplete();
  };

  if (loading) {
    return (
      <View>
        <View style={styles.loadingSpinnerContainer}>
          <Spinner size="large" />
        </View>
      </View>
    );
  }
  if (complete) {
    <View style={styles.actionCreateForm}>
      <View style={styles.row}>
        <Button style={styles.createButton} onPress={handleClose}>Done</Button>
      </View>
      <View style={styles.row}>
        <Button style={styles.createButton} onPress={handleResetForm}>Create Another</Button>
      </View>
    </View>;
  }
  return (
    <View style={styles.actionCreateForm}>
      { error && <View style={styles.row}><Alert>{ error?.message ? error.message : 'Something went wrong'}</Alert></View>}
      <View style={styles.row}>
        <Input
          value={name}
          label={() => <Text category="p2">Critical Task</Text>}
          placeholder="Enter the name of the action"
          caption="Shower once per day, Cardio three times a week, etc.."
          onChangeText={(nextValue) => setName(nextValue)}
        />
      </View>
      <View style={styles.row}>
        <Input
          multiline
          textStyle={{ minHeight: 64 }}
          value={description}
          label={() => <Text category="p2">Notes</Text>}
          placeholder="Enter the name of the action"
          caption="Shower once per day, Cardio three times a week, etc.."
          onChangeText={(nextValue) => setDescription(nextValue)}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          buttonStyles={styles.buttonStyles}
          textStyles={styles.textStyles}
          onPress={handleCreateAction}
        >
          Create Critical Task
        </Button>
      </View>
    </View>
  );
};
ActionCreateForm.defaultProps = {
  action: {},
};
export default ActionCreateForm;
