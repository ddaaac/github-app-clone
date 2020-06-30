import React from 'react';
import TouchableButton from './TouchableButton';
import { View } from 'react-native';

import Icons from '../util/Icons';

const MyWork = () => (
  <View>
    <TouchableButton icon={Icons.issue}>Issues</TouchableButton>
    <TouchableButton icon={Icons.gitPullRequest}>Pull Requests</TouchableButton>
    <TouchableButton icon={Icons.repository}>Repositories</TouchableButton>
    <TouchableButton icon={Icons.organization}
                     drawBottomBorder={false}>Organizations</TouchableButton>
  </View>
);

export default MyWork;
