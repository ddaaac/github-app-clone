import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRecoilStateLoadable } from 'recoil';

import RefreshingIndicator from '../util/RefreshingIndicator';
import MyWork from './MyWork';
import MyFavorites from './MyFavorites';
import Message from './Message';
import COLOR from '../util/Color';
import { getUserInfo } from '../state/User';
import Title from '../Title';

const HomeMain = () => {
  const [userInfoLoadable, reFetchUserInfo] = useRecoilStateLoadable(getUserInfo);

  return (
    <ScrollView
      style={styles.scrollView}
      refreshControl={
        <RefreshingIndicator
          getUserInfo={reFetchUserInfo}
          loading={userInfoLoadable === 'loading'}
        />}
    >
      <Title>Home</Title>

      <Text style={styles.subTitle}>
        My Work
      </Text>
      <View style={styles.buttonContainer}>
        <MyWork/>
      </View>

      <View style={styles.subTitleSpace}>
        <Text style={styles.subTitle}>
          Favorites
        </Text>
        <Text style={StyleSheet.compose(styles.subTitle, styles.subTitleEdit)}>
          Edit
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <MyFavorites/>
      </View>

      <Text style={styles.subTitle}>
        Recent
      </Text>
      <View style={styles.buttonContainer}>
        <Message>
          Issues and Pull Requests that you've interacted with recently will appear here.
        </Message>
      </View>
    </ScrollView>
  );
};

export default HomeMain;

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 15,
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
  subTitleEdit: {
    color: COLOR.darkBlue,
    fontSize: 15,
    fontWeight: '400',
  },
  subTitleSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: COLOR.darkGray6,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
