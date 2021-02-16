import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '_views/home';
import AboutScreen from '_views/about';
import LoginScreen from '_views/login';

const AuthNavigatorConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login:{
    screen:LoginScreen
  },
  Home:{
    screen:HomeScreen
  },
  About:{
    screen:AboutScreen
  }
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;