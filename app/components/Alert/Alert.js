import React from 'react';
import { Block } from 'galio-framework';
import { Icon, Text } from '@ui-kitten/components';
import styles from './Alert.styles';
import { COLORS } from '../../theme';

const Alert = ({ children }) => (
  <Block row center style={styles.alert}>
    <Icon style={styles.icon} fill={COLORS.DARK_RED} name="alert-triangle-outline" />
    <Text style={styles.alertText}>{typeof children === 'object' ? JSON.stringify(children) : children}</Text>
  </Block>
);

export default Alert;
