import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import RefreshingIndicator from '../util/RefreshingIndicator';
import MyWork from './MyWork';
import MyFavorites from './MyFavorites';

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
        <MyWork/>
      </View>
      <Text style={styles.subTitle}>
        Favorites
      </Text>
      <View style={styles.buttonContainer}>
        <MyFavorites/>
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
    fontSize: 33,
    marginBottom: 9,
  },
  subTitle: {
    color: 'white',
    fontSize: 21,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: 'rgb(28, 28, 30)',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
