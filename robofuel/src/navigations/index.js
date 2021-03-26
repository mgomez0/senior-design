import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const RootNavigator = AuthNavigator;


export default createAppContainer(RootNavigator);