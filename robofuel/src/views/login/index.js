import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AppButton} from '_atoms';
import {Common} from '_styles';

// const styles = StyleSheet.create({
//   firstBtn:{
//     ...Common,
//     backgroundColor: 'blue'
//   },
//   secondBtn:{
//     ...Common,
//     backgroundColor: 'red'
//   }
// });


function LoginScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
        <Text>Login Screen</Text>
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
        {/* <AppButton
          title="Login"
          onPress={() => navigation.navigate('Home')}
        />
        <AppButton
          title="Create an Account"
          onPress={() => navigation.navigate('Home')}
        /> */}
      </View>
    );
  }

  const styles = StyleSheet.create({
    
  })
  


export default LoginScreen;