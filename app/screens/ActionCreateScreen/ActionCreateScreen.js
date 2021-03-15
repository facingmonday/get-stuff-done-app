import React, { useEffect } from 'react';
import { View } from 'react-native';

import Text from '@components/Text';
import Page from '@components/Page';
import ActionCreateForm from '@components/ActionCreateForm';
import ActionRow from '@components/ActionRow';

import { COLORS } from '@theme/';
import styles from './ActionCreateScreen.styles';

const ActionCreateScreen = ({ actions, auth, navigation: { setOptions, navigate } }) => {
  useEffect(() => {
    setOptions({
      name: 'ActionCreateScreen',
      headerShown: false,
    });
  }, []);

  return (
    <Page>
      <View>
        <ActionCreateForm />
      </View>
      <View style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 20,
      }}
      >
        <Text category="h5">
          Tomorrows Actions
        </Text>
      </View>
      <View>
        {
          actions?.length
            ? (
              <View>
                { actions.map((action) => <ActionRow size="sm" action={action} />)}
              </View>
            )
            : <Text category="p2">No critical tasks defined for tomorrow</Text>
        }
      </View>
    </Page>
  );
};

export default ActionCreateScreen;
