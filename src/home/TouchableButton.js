import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Icons from '../util/Icons';

const TouchableButton = ({ icon, children }) => (
  <TouchableOpacity
    style={styles.button}
    activeOpacity={0.9}
  >
    <View style={styles.iconContainer}>
      <View style={styles.icon}>
        {icon}
      </View>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.content}>
        {children}
      </Text>
    </View>
    <View style={styles.arrowForward}>
      {Icons.arrowForward}
    </View>
  </TouchableOpacity>
);

export default TouchableButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(28, 28, 30)',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    borderRadius: 5,
    width: 32,
    height: 32,
    marginRight: 10,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 5,
    borderBottomWidth: 0.2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  content: {
    color: 'white',
    fontSize: 17,
  },
  arrowForward: {
    position: 'absolute',
    right: 15,
  },
});
