import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {RoboText} from '_atoms'


var logo = require('./images/fuely_logo.png');

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} />
      </View>

      <View>
        {/* <RoboText text="Test" /> */}
        <Text style={styles.title}>RoboFuel</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.Button}>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.Buttonlog}>
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Button}>
          <Text
            onPress={() => navigation.navigate('Creation')}
            style={styles.Buttoncreate}>
            Create an Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Guest}>
          <Text style={styles.Guesttext}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    backgroundColor: '#000000',
    height: 70,
    width: 360,
    borderRadius: 30,
    marginBottom: 12,
  },
  Buttonlog: {
    fontFamily: "Roboto",
    // fontStyle: 'normal',
    // fontWeight: 'normal',
    fontSize: 18,
    color: '#E5E5E5',
    paddingVertical: 20,
    paddingHorizontal: 155,
  },
  Buttoncreate: {
    fontFamily: 'Roboto-Regular',
    // fontStyle: 'normal',
    // fontWeight: '900',
    fontSize: 18,
    color: '#E5E5E5',
    paddingVertical: 20,
    paddingHorizontal: 105,
  },
  title: {
    fontFamily: 'Comfortaa',
    fontSize: 50,
    marginLeft: 30,
    marginBottom: 20,
  },
  Guest: {
    height: 60,
    width: 250,
    borderRadius: 30,
    marginLeft: 60,
  },
  Guesttext: {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  logo: {
    height: 80,
    width: 50,
  },
});

export default HomeScreen;
