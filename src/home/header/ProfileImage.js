import React from 'react';
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRecoilValueLoadable } from 'recoil';

import { getUserInfo } from '../../state/User';

const ProfileImage = () => {
  const userInfoLoadable = useRecoilValueLoadable(getUserInfo);

  const profile = () => {
    switch (userInfoLoadable.state) {
      case 'hasValue':
        return (
          <Image style={styles.imgContainer}
                 source={{ uri: userInfoLoadable.contents.avatar_url }}/>
        );
      case 'loading':
        return <ActivityIndicator/> ;
      case 'hasError':
        return (
          <Image style={styles.imgContainer}
                 source={require('../../../assets/github-icon.png')}/>
        );
    }
  };

  return (
    <TouchableOpacity style={styles.imgButton}>
      {profile()}
    </TouchableOpacity>
  )
};

export default ProfileImage;

const profileSize = 35;

const styles = StyleSheet.create({
  imgButton: {
    marginLeft: 15,
    width: profileSize,
    height: profileSize,
    borderRadius: 40,
    overflow: 'hidden',
  },
  imgContainer: {
    width: profileSize,
    height: profileSize,
  },
});
