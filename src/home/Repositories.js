import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useRecoilValueLoadable } from 'recoil';

import Title from '../Title';
import { getRepositories } from '../state/Repo';
import RepositoryList from './RepositoryList';

const Repositories = () => {
  const repositoriesLoadable = useRecoilValueLoadable(getRepositories);

  const repoContent = () => {
    switch (repositoriesLoadable.state) {
      case 'hasValue':
        return <RepositoryList/>;
      case 'loading':
        return <ActivityIndicator/>;
      case 'hasError':
        return <Text style={{
          fontSize: 30,
          color: 'green'
        }}>{repositoriesLoadable.contents.toString()}</Text>;
    }
  };

  return (
    <View style={styles.scrollView}>
      <Title>Repositories</Title>
      {repoContent()}
    </View>
  );
};

export default Repositories;

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 15,
  },
});
