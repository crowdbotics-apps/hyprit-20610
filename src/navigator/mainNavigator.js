import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile4107004Navigator from '../features/UserProfile4107004/navigator';
import Camera6107002Navigator from '../features/Camera6107002/navigator';
import Dashboard17107001Navigator from '../features/Dashboard17107001/navigator';
import Camera3106999Navigator from '../features/Camera3106999/navigator';
import SignIn52106998Navigator from '../features/SignIn52106998/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile4107004: { screen: UserProfile4107004Navigator },
Camera6107002: { screen: Camera6107002Navigator },
Dashboard17107001: { screen: Dashboard17107001Navigator },
Camera3106999: { screen: Camera3106999Navigator },
SignIn52106998: { screen: SignIn52106998Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
