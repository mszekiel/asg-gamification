import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import MapScreen from '../screens/MapScreen';

import SettingsScreen from '../screens/SettingScreen/SettingsScreen';
import TeamSettingScreen from '../screens/SettingScreen/screens/TeamSettingScreen';
import GameSettingScreen from '../screens/SettingScreen/screens/GameSettingScreen';

const GameSettings = createStackNavigator(
  {
    Settings: SettingsScreen,
    TeamSettingScreen: {
      screen: TeamSettingScreen,
      navigationOptions: () => ({
        headerBackTitle: 'Wstecz'
      })
    },
    GameSettingScreen: GameSettingScreen,
  },
  {
    initialRouteName: 'Settings',
  }
);

GameSettings.navigationOptions = {
  tabBarLabel: 'Ustawienia',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-settings` : 'md-settings'}
    />
  ),
};


const GameMap = createStackNavigator({
  Map: MapScreen,
});

GameMap.navigationOptions = {
  tabBarLabel: 'Mapa',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};

export default createBottomTabNavigator({
  GameSettings,
  GameMap,
});
