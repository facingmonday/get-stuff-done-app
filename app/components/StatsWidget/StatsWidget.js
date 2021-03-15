import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import styles from './StatsWidget.styles';

const StatsWidget = ({ navigation: { navigate }}) => (
  <View style={styles.statsWidget }>
    <Text>StatsWidget</Text>
  </View>
);

export default StatsWidget;
