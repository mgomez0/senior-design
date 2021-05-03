import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const RootNavigator = AppNavigator;
// const RootNavigator = createSwitchNavigator(
//   {
//     Auth: AuthNavigator,
//     // App: AppNavigator,
//   },
//   {
//     initialRouteName: 'Auth',
//   },
// );

export default createAppContainer(RootNavigator);