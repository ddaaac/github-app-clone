import React from 'react';
import { RefreshControl } from 'react-native';

const RefreshingIndicator = ({ getUserInfo, loading }) => {
  return (
    <RefreshControl tintColor='#C0C0C0' refreshing={loading} onRefresh={getUserInfo}/>
  );
};

export default RefreshingIndicator;
