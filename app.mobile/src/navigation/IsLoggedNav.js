import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';

import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import GameSettings from '../screens/SettingsScreen/screens/GameSettings/GameSettings';
import TeamSettings from '../screens/SettingsScreen/screens/TeamSettings/TeamSettings';
import { StyledIcon } from '../components';

const settingsNav = createStackNavigator(
  {
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        title: 'Ustawienia',
        headerBackTitle: 'Wstecz',
      })
    },
    GameSettings: {
      screen: GameSettings,
      navigationOptions: () => ({
        title: 'Ustawienia rozgrywki',
        headerBackTitle: 'Wstecz',
      })
    },
    TeamSettings: {
      screen: TeamSettings,
      navigationOptions: () => ({
        title: 'Ustawienia drużyny',
        headerBackTitle: 'Wstecz',
      })
    },
  },
  {
    initialRouteName: 'SettingsScreen',
  },
);

const isLoggedNav = createBottomTabNavigator(
  {
    Settings: {
      screen: settingsNav,
      navigationOptions: () => ({
        title: 'Ustawienia',
        headerBackTitle: 'Wstecz',
        tabBarIcon: ({ focused }) => <StyledIcon color={focused ? '#2F95DC' : '#CCCCCC'} name='cog' size={26} />,
      }),
    },
  },
  {
    initialRouteName: 'Settings',
    drawerPosition: 'right'
  }
);

export default createAppContainer(isLoggedNav);
