import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera3106999Navigator from '../features/Camera3106999/navigator';
import SignIn52106998Navigator from '../features/SignIn52106998/navigator';
import BlankScreen0106972Navigator from '../features/BlankScreen0106972/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Camera3106999: { screen: Camera3106999Navigator },
SignIn52106998: { screen: SignIn52106998Navigator },
BlankScreen0106972: { screen: BlankScreen0106972Navigator },

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
