// In App.js in a new project

import React, { Component } from 'react';
import {AppButton} from '_atoms';
import Navigator from '_navigations';
import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen({ navigation }) {
//   return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <AppButton
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('Details')}
    //   />
    // </View>
//   );
// }

// // ... other code from the previous section

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

function App() {
  return (
  <Navigator />
  );
}



export default App;