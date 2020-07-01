import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

import Main from './src/Main';

const App = () => (
  <RecoilRoot>
    <NavigationContainer theme={DarkTheme}>
      <Main/>
      <StatusBar style="auto"/>
    </NavigationContainer>
  </RecoilRoot>
);

export default App;
