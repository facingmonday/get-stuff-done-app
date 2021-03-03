import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import styles from './{{name}}.styles';

const {{name}} = ({ navigation: { navigate }}) => (
  <View style={styles.{{camelCase name}} }>
    <Text>{{name}}</Text>
  </View>
);

export default {{name}};
