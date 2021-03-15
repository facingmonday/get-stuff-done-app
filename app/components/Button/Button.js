import React from 'react';
import { Button as KittenButton } from '@ui-kitten/components';
import Text from '@components/Text';
import styles from './Button.styles';

const Button = ({
  children, onPress, buttonStyles, textStyles, size = 'md',
}) => (
  <KittenButton style={[styles.signInButton, buttonStyles, styles[size]]} onPress={onPress}>
    <Text style={[styles.signInText, textStyles, styles[size]]}>{children}</Text>
  </KittenButton>
);

export default Button;
