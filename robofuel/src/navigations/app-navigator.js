import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '_views/home';
import AboutScreen from '_views/about';
import CreationScreen from '_views/creation';
import LoginScreen from '_views/login';
import PaymentScreen from '_views/payment';
import DetectionScreen from '_views/detection'
import OutputScreen from '_views/output'

const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home:{
    screen:HomeScreen,
  },
  About:{
    screen:AboutScreen,
  },
  Creation:{
    screen:CreationScreen,
  },
  Payment:{
    screen:PaymentScreen,
  },
  Login:{
    screen:LoginScreen,
  },
    Detection:{
        screen:DetectionScreen,
    },
    Output:{
        screen:OutputScreen
    }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;
