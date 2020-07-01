import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeMain from './HomeMain';
import ProfileImage from './header/ProfileImage';
import CreateIssueButton from './header/CreateIssueButton';
import Repositories from './Repositories';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator initialRouteName='HomeMain'>
      <Stack.Screen
        name='HomeMain'
        component={HomeMain}
        options={{
          title: 'Home',
          headerLeft: () => <ProfileImage/>,
          headerRight: () => <CreateIssueButton/>,
        }}
      />
      <Stack.Screen
        name='Repositories'
        component={Repositories}
      />
    </Stack.Navigator>
  );
};

export default Home;
