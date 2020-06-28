import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeMain from './HomeMain';
import ProfileImage from './header/ProfileImage';
import CreateIssueButton from './header/CreateIssueButton';

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
    </Stack.Navigator>
  );
};

export default Home;
