import React from 'react';
import {View, SafeAreaView, Text, TouchableHighlight} from 'react-native';
import {AppButton} from '_atoms'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <AppButton
        title="Go to Hell"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

export default HomeScreen;