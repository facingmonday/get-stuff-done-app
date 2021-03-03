import React from 'react';
import {
  Button, Image, View, Platform, TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Avatar, Text } from '@ui-kitten/components';
import styles from './ProfileAvatar.styles';

const ProfileAvatar = ({ navigation: { navigate }, uploadProfileImage, user }) => {
  const handlePress = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status == 'granted') {
        const result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          quality: 0.2,
        });
        if (!result.cancelled) {
          uploadProfileImage(result.uri);
        } else {
          alert('We need permission.');
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={{ uri: user.image }}
        style={{
          width: 100, height: 100, borderRadius: 100 / 2, borderWidth: 2, borderColor: 'grey',
        }}
      />

    </TouchableOpacity>

  );
};

export default ProfileAvatar;
