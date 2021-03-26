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

function CreationScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <View>
        <Text style={styles.inputheader}>Enter Email Address</Text>
        <TextInput style={styles.inputbubble}></TextInput>
        <Text style={styles.inputheader}>Enter Password</Text>
        <TextInput style={styles.inputbubble}></TextInput>
        <Text style={styles.inputheader}>Re-enter Password</Text>
        <TextInput style={styles.inputbubble}></TextInput>
      </View>

      <View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.Buttontext}>Register</Text>
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
    paddingHorizontal: 26,
  },
  title: {
    fontSize: 50,
    paddingHorizontal: 30,
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

export default CreationScreen;
