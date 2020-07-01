import React from 'react';
import { FlatList, View } from 'react-native';
import { useRecoilStateLoadable } from 'recoil';

import TouchableButton from './TouchableButton';
import ImageWithUri from '../util/ImageWithUri';
import { getRepositories } from '../state/Repo';
import COLOR from '../util/Color';
import RefreshingIndicator from '../util/RefreshingIndicator';

const RepositoryList = () => {
  const [repositoriesLoadable, reFetchRepositories] = useRecoilStateLoadable(getRepositories);

  return (
    <View>
      {repositoriesLoadable.state === 'hasValue' ?
        <FlatList
          data={repositoriesLoadable.contents}
          renderItem={({ item }) => (
            <TouchableButton icon={<ImageWithUri uri={item.owner.avatar_url}/>}>
              {item.full_name}
            </TouchableButton>
          )}
          keyExtractor={item => item.id.toString()}
          style={{ backgroundColor: COLOR.darkGray6 }}
          refreshControl={
            <RefreshingIndicator
              getUserInfo={reFetchRepositories}
              loading={repositoriesLoadable === 'loading'}
            />}
        />
        :
        null
      }
    </View>

  )
};

export default RepositoryList;
