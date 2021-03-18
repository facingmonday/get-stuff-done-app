import React from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import styles from './Text.styles';

const TextComponent = ({
  category, children, style, ...restProps
}) => (
  <Text {...restProps} style={[styles.text, style]} category={category || 'p1'}>{children}</Text>
);

export default TextComponent;
