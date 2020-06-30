import React, { useState } from 'react';
import { RefreshControl } from 'react-native';

const RefreshingIndicator = () => {
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => setRefresh(false), 1000);
  };

  return (
    <RefreshControl tintColor='#C0C0C0' refreshing={refresh} onRefresh={onRefresh}/>
  );
};

export default RefreshingIndicator;
