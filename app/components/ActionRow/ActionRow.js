import React, { useEffect, useRef, useState } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Image, TouchableOpacity, View } from 'react-native';
import { Spinner, Text } from '@ui-kitten/components';
import Button from '../Button';

import styles from './ActionRow.styles';

const DOUBLE_PRESS_DELAY = 300;

const ActionRow = ({
  action,
  deleteAction,
  loading,
  navigation: { navigate },
  size = 'md',
  updateAction = () => null,
}) => {
  const swipeableRef = useRef(null);
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
    <Swipeable
      ref={swipeableRef}
      key={`ActionListScreen_ActionRow_${action.id}`}
      renderRightActions={(progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 50, 100, 101],
          outputRange: [-20, 0, 0, 1],
        });
        if (loading) {
          return (<Spinner />);
        }
        return (
          <Button size={size} onPress={() => deleteAction(action.id)}>
            DELETE
          </Button>
        );
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.actionRow, size == 'sm' && styles.actionRowSmall]}
        onPress={handleDoubleTap}
      >
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.actionName,
              action.complete && styles.actionNameComplete,
              size == 'sm' && styles.actionNameSmall,
            ]}
          >
            {action.name}
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeable>

  );
};

export default ActionRow;
