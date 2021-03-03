import React from 'react';
import { View } from 'react-native';
import { Block } from 'galio-framework';
import {
  Avatar, Button, Input, Text,
} from '@ui-kitten/components';
import Images from '../../theme/images';
import ProfileAvatar from '../ProfileAvatar';

import styles from './UserProfile.styles';

const UserProfile = ({ user, updateProfile, saveProfile }) => (
  <Block flex style={styles.userProfile}>
    {
      user
        ? (
          <>
            <Block row>
              <Block flex={1} center style={{ marginRight: 20 }}>
                <ProfileAvatar />
              </Block>
              <Block flex={2}>
                { !!user?.name && <Text category="h4">{`${user.name}`}</Text> }
                { !!user?.email && <Text category="p2">{user.email}</Text> }
              </Block>
            </Block>
            <Block column style={{ marginTop: 20 }}>
              <Input
                value={user?.name}
                style={styles.input}
                label={(evaProps) => <Text {...evaProps}>Name</Text>}
                onChangeText={(nextValue) => updateProfile({ ...user, name: nextValue })}
              />
              <Input
                value={user?.city}
                style={styles.input}
                label={(evaProps) => <Text {...evaProps}>City</Text>}
                onChangeText={(nextValue) => updateProfile({ ...user, city: nextValue })}
              />
              <Input
                value={user?.state}
                style={styles.input}
                label={(evaProps) => <Text {...evaProps}>State</Text>}
                onChangeText={(nextValue) => updateProfile({ ...user, state: nextValue })}
              />
              <Input
                value={user?.zip}
                style={styles.input}
                label={(evaProps) => <Text {...evaProps}>Zip</Text>}
                onChangeText={(nextValue) => updateProfile({ ...user, zip: nextValue })}
              />
              <View style={{
                flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center',
              }}
              >
                <Button style={{ width: 200 }} size="small" onPress={() => saveProfile(user)}>Save</Button>
              </View>
            </Block>
          </>
        )
        : (
          <>
            <Block flex={1} center>
              <Text>User not defined</Text>
            </Block>
          </>
        )
      }
  </Block>
);

export default UserProfile;
