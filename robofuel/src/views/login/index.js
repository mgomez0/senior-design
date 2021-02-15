import React from 'react';
import {View, SafeAreaView, Text, TouchableHighlight} from 'react-native';
import {AppButton} from '_atoms';

function LoginScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <AppButton
          title="Go to Home Page"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

export default LoginScreen;