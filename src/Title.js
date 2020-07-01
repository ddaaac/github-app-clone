import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = ({ children }) => (
  <Text style={styles.title}>
    {children}
  </Text>
);

export default Title;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 33,
    marginBottom: 9,
  },
});
