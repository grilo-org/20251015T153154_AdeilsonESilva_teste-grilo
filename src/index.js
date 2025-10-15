import CountersScreen from './screens/CountersScreen';
import ConfigsScreen from './screens/ConfigsScreen';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home: CountersScreen,
      About: ConfigsScreen,
    },
    {
      tabBarOptions: {
        activeTintColor: '#ff9500',
        style: {
          backgroundColor: '#001c47',
        },
      },
    },
  ),
);

export default Routes;
