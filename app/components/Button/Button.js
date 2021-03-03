import React from 'react';
import { Button as KittenButton, Text } from '@ui-kitten/components';
import styles from './Button.styles';

const Button = ({
  children, onPress, buttonStyles, textStyles,
}) => (
  <KittenButton style={[styles.signInButton, buttonStyles]} onPress={onPress}>
    <Text style={[styles.signInText, textStyles]}>{children}</Text>
  </KittenButton>
);

export default Button;
