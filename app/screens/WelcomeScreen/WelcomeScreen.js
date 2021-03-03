import React, { useEffect } from 'react';
import { View } from 'react-native';
import {
  Button,
  Icon,
  Layout,
  List,
  ListItem,
  Text,
} from '@ui-kitten/components';
import Page from '../../components/Page';
import styles from './WelcomeScreen.styles';

const WelcomeScreen = ({
  auth,
  navigation: { setOptions, navigate, goBack },
}) => {
  useEffect(() => {
    setOptions({
      title: 'Welcome',
      headerShown: false,
    });
  }, []);

  const handleGetStarted = () => {
    navigate('UserSelect');
  };

  const renderItem = ({ item, index }) => (
    <ListItem
      style={styles.listItem}
      title={(evaProps) => <Text category="h3">{item.name}</Text>}
      description={(evaProps) => (
        <Text {...evaProps} category="p1">
          {item?.description}
        </Text>
      )}
      accessoryLeft={(evaProps) => <Icon {...evaProps} name={item.icon} />}
    />
  );

  return (
    <Page>
      <View style={styles.titleContainer}>
        <Text category="h1">Welcome!</Text>
        <Text style={styles.subWelcomeText}>
          Thank you for joining us in Percorso Promise. The Promise app will provide daily inspiration, and help you track your progress on the promises that you make.
        </Text>
        <Text style={styles.subWelcomeTextBold}>
          Promises forge habits. Habits support growth.
        </Text>
      </View>
      <View style={styles.listContainer}>
        <List
          style={styles.list}
          data={[
            {
              title: 'Select a guide',
              description: 'Choose a guide to follow. They have preselected some promises for you to follow',
              icon: 'people-outline',
            },
            {
              title: 'Select a Plan',
              description: 'Reflect on the areas where you would like to grow and add promises to guide you.',
              icon: 'plus-circle-outline',
            },
            {
              title: 'Start Using the App',
              description: 'Keep motivated by checking in on your promises every day.',
              icon: 'checkmark',
            },
          ]}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleGetStarted}>Get Started</Button>
      </View>
      <View style={styles.goBackContainer}>
        <Text style={{ color: 'white' }} onPress={() => goBack()}>Go Back</Text>
      </View>
    </Page>
  );
};

export default WelcomeScreen;
