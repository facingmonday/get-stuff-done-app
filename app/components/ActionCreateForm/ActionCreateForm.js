import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { addDays } from 'date-fns';
import {
  Input, Radio, RadioGroup, Spinner,
} from '@ui-kitten/components';
import Text from '@components/Text';
import Button from '@components/Button';
import Alert from '@components/Alert';

import styles from './ActionCreateForm.styles';

const ActionCreateForm = ({
  complete,
  error,
  loading,
  onComplete = () => null,
  resetAction,
  saveAction,
}) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [today, setToday] = useState(true);

  const handleCreateAction = () => {
    if (name) {
      saveAction({
        id: uuidv4(),
        name,
        description,
        date: today ? new Date().getTime() : addDays(new Date(), 1).getTime(),
        complete: false,
      });
    }
  };

  useEffect(() => {
    setName('');
    setDescription('');
    resetAction();
  }, [complete]);

  if (loading) {
    return <Spinner size="large" />;
  }

  return (
    <View style={styles.actionCreateForm}>
      <>
        { error && (
        <View style={styles.row}>
          <Alert>{ error?.message ? error.message : 'Something went wrong'}</Alert>
        </View>
        )}
        <View style={[styles.row, { alignItems: 'center' }]}>
          <Text category="h4">CREATE ACTION</Text>
        </View>
        <View style={styles.row}>
          <RadioGroup
            selectedIndex={today ? 0 : 1}
            onChange={(index) => setToday(!index)}
          >
            <Radio style={{ color: 'red' }}><Text category="h6">Today</Text></Radio>
            <Radio style={{ color: 'red' }}><Text category="h6">Tomorrow</Text></Radio>
          </RadioGroup>
        </View>

        <View style={styles.row}>
          <Input
            value={name}
            label={() => <Text category="p2">Critical Task</Text>}
            placeholder="Enter the name of the action"
            caption="Go to the gym, send that email, etc.."
            onChangeText={(nextValue) => setName(nextValue)}
          />
        </View>
        <View style={styles.row}>
          <Input
            multiline
            textStyle={{ minHeight: 84 }}
            value={description}
            label={() => <Text category="p2">Notes</Text>}
            placeholder="Enter the name of the action"
            caption="This is high priority, Get done by 9am, etc.."
            onChangeText={(nextValue) => setDescription(nextValue)}
          />
        </View>
        <View style={styles.row}>
          <Button
            buttonStyles={styles.buttonStyles}
            onPress={handleCreateAction}
          >
            Create Task
          </Button>
        </View>
      </>

    </View>
  );
};
ActionCreateForm.defaultProps = {
  action: {},
};
export default ActionCreateForm;
