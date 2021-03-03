import React, { useEffect } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Block } from 'galio-framework';
import { Icon, Spinner, Text } from '@ui-kitten/components';
import Alert from '../Alert';
import styles from './UserCard.styles';
import Images from '../../theme/images';

const UserCard = ({
  loading, fetchUser, navigation: { navigate }, userId, user,
}) => {
  useEffect(() => {
    if (userId && !user) {
      fetchUser(userId);
    }
  }, []);

  if (loading) {
    return (
      <Block>
        <Spinner />
      </Block>
    );
  }
  if (!user) {
    return (
      <Block>
        <Alert>User not found.</Alert>
      </Block>
    );
  }

  return (
    <TouchableOpacity onPress={() => navigate('UserProfile', { userId })}>
      <Block row style={styles.userCard} onPress={() => navigate('PlanDetails')}>
        <Block flex={1} style={styles.productImageContainer}>
          {
            user?.image
              ? (
                <Image
                  source={user?.image ? Images[user.image] : require('../../../assets/icon.png')}
                  style={{ width: 50, height: 50 }}
                />
              )
              : <Icon fill="#333" name="person" style={{ width: 50, height: 50 }} />
          }
        </Block>
        <Block style={styles.right} flex={3}>
          <Text style={styles.productName} category="h4">{user?.name}</Text>
          <Text style={styles.productName} category="p1">{user?.email}</Text>
          <Text style={styles.productDescriptions} category="p1">{user?.description}</Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

export default UserCard;
