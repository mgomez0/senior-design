import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';
import {AppButton} from '_atoms';

const LoginScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>
    <AppButton
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
  </SafeAreaView>
);

export default LoginScreen;