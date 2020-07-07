import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useRecoilStateLoadable } from 'recoil';

import { getUserInfo } from '../state/User';

const Notification = () => {
  const [userInfoLoadable, reFetchUserInfo] = useRecoilStateLoadable(getUserInfo);

  const realContents = (userInfoLoadable) => {
    switch (userInfoLoadable.state) {
      case 'hasValue':
        return userInfoLoadable.contents.login;
      case 'loading':
        return 'Loading...';
      case 'hasError':
        return userInfoLoadable.contents.toString();
    }
  };

  return (
    <SafeAreaView>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'green', fontSize: 30 }}>
          {realContents(userInfoLoadable)}
        </Text>
        <TouchableOpacity onPress={reFetchUserInfo}>
          <Text style={{ color: 'green', fontSize: 30 }}>여기를 눌러서 갱신</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
