import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './home/Home';
import Notification from './noti/Notification';
import Search from './search/Search';

const Tab = createBottomTabNavigator();

const Main = () => {
  const getIconName = name => {
    switch (name) {
      case 'Home':
        return 'md-home';
      case 'Notification':
        return 'ios-notifications-outline';
      case 'Search':
        return 'ios-search';
      default:
        throw Error('Invalid Tab Navigator name.');
    }
  };

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getIconName(route.name);
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
      })}
    >
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Notification' component={Notification}/>
      <Tab.Screen name='Search' component={Search}/>
    </Tab.Navigator>
  )
};

export default Main;
