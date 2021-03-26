import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {color} from 'react-native-reanimated';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.inputheader}>Enter Email Address</Text>
        <TextInput style={styles.inputbubble}></TextInput>
        <Text style={styles.inputheader}>Enter Password</Text>
        <TextInput style={styles.inputbubble}></TextInput>
      </View>

      <View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.Buttontext}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  Button: {
    backgroundColor: '#000000',
    height: 60,
    width: 120,
    borderRadius: 30,
  },
  Buttontext: {
    fontSize: 18,
    color: '#E5E5E5',
    paddingVertical: 15,
    paddingHorizontal: 37,
  },
  title: {
    fontSize: 50,
    marginLeft: 30,
    marginBottom: 20,
  },
  inputbubble: {
    backgroundColor: '#F2DADA',
    height: 60,
    width: 360,
    borderRadius: 30,
    margin: 10,
    paddingHorizontal: 30,
  },
  inputheader: {
    fontSize: 15,
    marginLeft: 30,
  },
});

export default LoginScreen;
