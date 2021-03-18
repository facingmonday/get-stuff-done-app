import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Block } from 'galio-framework';

import { Input } from 'react-native-elements';
import {
  Avatar,
} from '@ui-kitten/components';
import ProfileAvatar from '@components/ProfileAvatar';
import Button from '@components/Button';
import Text from '@components/Text';

import styles from './UserProfile.styles';

const UserProfile = ({
  user, updateProfile, saveProfile,
}) => {
  const [name, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
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
                    { !!user?.displayName && <Text category="h4">{`${user.displayName}`}</Text> }
                    { !!user?.email && <Text category="p2">{user.email}</Text> }
                  </Block>
                </Block>
                <Block column style={{ marginTop: 20 }}>
                  {
                    user.isAnonymous
                      ? (
                        <View>
                          <Input
                            placeholder="Email"
                            inputStyle={{
                              color: 'white',
                              marginBottom: 10,
                              textAlign: 'center',
                            }}
                            onChangeText={(value) => setEmail(value)}
                          />
                          <Input
                            placeholder="Password"
                            inputStyle={{
                              color: 'white',
                              marginBottom: 10,
                              textAlign: 'center',
                            }}
                            onChangeText={(value) => setPassword(value)}
                          />
                        </View>
                      )
                      : null
                      }
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
};

export default UserProfile;
