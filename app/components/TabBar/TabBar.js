import React from 'react';
import { StackActions } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import styles from './TabBar.styles';

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          // if (!isFocused && !event.defaultPrevented) {
          //   navigation.navigate(route.name);
          // } else if (!isFocused) {
          //   navigation.dispatch(
          //     StackActions.replace('Actions'),
          //   );
          // } else {
          //   navigation.dispatch(
          //     StackActions.replace('Actions'),
          //   );
          // }
          navigation.navigate(route.name, { screen: route.name });
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        if (route.name == 'GetStarted' || route.name == 'Auth' || route.name == 'Loading') {
          return null;
        }
        return (
          <TouchableOpacity
            key={`TabBar_${label}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}
          >
            <Ionicons style={styles.buttonIcon} name={options.icon || 'ios-home'} color="#FFF" size={25} />
            <Text style={isFocused ? styles.buttonTextFocused : styles.buttonText} size="small">
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
