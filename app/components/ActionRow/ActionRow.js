import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';

import styles from './ActionRow.styles';

const DOUBLE_PRESS_DELAY = 300;

const ActionRow = ({
  action,
  navigation: { navigate },
  updateAction = () => null,
}) => {
  let lastTap;
  const handleDoubleTap = () => {
    const now = new Date().getTime();
    if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
      lastTap = null;
      updateAction({
        ...action,
        complete: !action.complete,
      }, true);
    } else {
      lastTap = now;
    }
  };
  return (
    <TouchableOpacity activeOpacity={1} style={styles.actionRow} onPress={handleDoubleTap}>
      <View style={styles.textContainer}>
        <Text
          style={[styles.actionName, action.complete && styles.actionNameComplete]}
        >
          {action.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActionRow;
