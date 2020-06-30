import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Message = ({ children }) => (
  <Text style={styles.message}>
    {children}
  </Text>
);

export default Message;

const styles = StyleSheet.create({
  message: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 25,
  },
});
