import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLOR from '../util/Color';

const MessageButton = ({ children }) => (
  <TouchableOpacity activeOpacity={0.7}>
    <View style={styles.button}>
      <Text style={styles.buttonMessage}>
        {children}
      </Text>
    </View>
  </TouchableOpacity>
);

export default MessageButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderColor: COLOR.darkGray3,
    borderWidth: StyleSheet.hairlineWidth,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.darkGray5,
    marginHorizontal: 20,
    marginBottom: 25,
  },
  buttonMessage: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
