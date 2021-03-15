import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';

const styles = StyleSheet.create({
  pageCard: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    padding: 20,
    paddingBottom: 20,
    borderRadius: 15,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
});

const PageCard = ({ children, level = '0' }) => (
  <ScrollView style={styles.pageCard}>{children}</ScrollView>
);

export default PageCard;
