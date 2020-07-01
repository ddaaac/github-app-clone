import React from 'react';
import TouchableButton from './TouchableButton';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icons from '../util/Icons';

const MyWork = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableButton icon={Icons.issue}>
        Issues
      </TouchableButton>
      <TouchableButton icon={Icons.gitPullRequest}>
        Pull Requests
      </TouchableButton>
      <TouchableButton icon={Icons.repository} onPress={() => navigation.push('Repositories')}>
        Repositories
      </TouchableButton>
      <TouchableButton icon={Icons.organization} drawBottomBorder={false}>
        Organizations
      </TouchableButton>
    </View>
  )
};

export default MyWork;
