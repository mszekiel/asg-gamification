import { createStackNavigator, createAppContainer } from 'react-navigation';

import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import GameSettings from '../screens/SettingsScreen/screens/GameSettings/GameSettings';
import TeamSettings from '../screens/SettingsScreen/screens/TeamSettings/TeamSettings';

const isNotLoggedNav = createStackNavigator(
  {
    SettingsScreen,
    GameSettings,
    TeamSettings,
  },
  {
    initialRouteName: 'SettingsScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(isNotLoggedNav);
