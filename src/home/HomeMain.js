import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View, } from 'react-native';

import RefreshingIndicator from '../util/RefreshingIndicator';
import TouchableButton from './TouchableButton';
import Icons from '../util/Icons';

const HomeMain = ({ navigation }) => {
  const pushToNext = () => {
    navigation.push('HomeMain');
  };

  return (
    <ScrollView
      style={styles.scrollView}
      refreshControl={<RefreshingIndicator/>}
    >
      <Text style={styles.title}>
        Home
      </Text>
      <Text style={styles.subTitle}>
        My Work
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableButton icon={Icons.issue}>Issues</TouchableButton>
        <TouchableButton icon={Icons.gitPullRequest}>Pull Requests</TouchableButton>
        <TouchableButton icon={Icons.repository}>Repositories</TouchableButton>
        <TouchableButton icon={Icons.organization}>Organizations</TouchableButton>
      </View>

      <TouchableHighlight style={{ backgroundColor: 'white' }} onPress={pushToNext}>
        <Text>다음 페이지로 push</Text>
      </TouchableHighlight>
    </ScrollView>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 15,
  },
  text: {
    fontSize: 10,
    color: 'white',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  subTitle: {
    color: 'white',
    fontSize: 25,
    marginTop: 40,
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
