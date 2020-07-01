import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import Icons from '../util/Icons';
import COLOR from '../util/Color';

const TouchableButton = ({ icon, children, drawBottomBorder = true, onPress = () => {} }) => (
  <TouchableHighlight
    underlayColor={COLOR.darkGray4}
    onPress={onPress}
  >
    <View style={styles.button}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          {icon}
        </View>
      </View>
      <View style={drawBottomBorder ? styles.contentContainer : styles.lastContentContainer}>
        <Text style={styles.content}>
          {children}
        </Text>
      </View>
      <View style={styles.arrowForward}>
        {Icons.arrowForward}
      </View>
    </View>
  </TouchableHighlight>
);

export default TouchableButton;

const styles = StyleSheet.create({
  button: {
    height: 55,
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgb(58,58,60)',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  lastContentContainer: {
    flex: 5,
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
