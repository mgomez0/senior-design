
import React from 'react';
import {View, SafeAreaView, Text, TouchableHighlight} from 'react-native';
import {AppButton} from '_atoms'


function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <AppButton
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default AboutScreen;