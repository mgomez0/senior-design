import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '_views/home';
import AboutScreen from '_views/about';
import LoginScreen from '_views/login';
import CreationScreen from '_views/creation';
import PaymentScreen from '_views/payment';

const AuthNavigatorConfig = {
  initialRouteName: 'Payment',
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
  },
  Creation:{
    screen:CreationScreen
  },
  Payment:{
    screen:PaymentScreen
  }
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;