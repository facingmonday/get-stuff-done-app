import React, { useEffect, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Button, Spinner } from '@ui-kitten/components';
import { Block } from 'galio-framework';
import Page from '../../components/Page';
import PageCard from '../../components/PageCard';
import UserProfile from '../../components/UserProfile';
import LogoutButton from '../../components/LogoutButton';

import styles from './ProfileScreen.styles';

const ProfileScreen = ({
  auth, loading, fetchMe, logoutUser, navigation: { setOptions },
}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    setOptions({
      title: 'Profile',
      headerShown: false,
    });
    fetchMe();
  }, [isFocused]);

  if (loading) {
    return (
      <Page>

        <View style={{
          height: 300, alignItems: 'center', justifyContent: 'center',
        }}
        >
          <Spinner size="giant" />
        </View>
      </Page>
    );
  }
  return (
    <Page>
      <PageCard>
        <UserProfile />
      </PageCard>
      <Block row center>
        <LogoutButton />
      </Block>
    </Page>
  );
};

export default ProfileScreen;
