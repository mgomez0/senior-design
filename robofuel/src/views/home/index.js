import React from 'react';
import {View, SafeAreaView, Text, TouchableHighlight, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { color } from 'react-native-reanimated';



function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View>
          <Text style={styles.title}>RoboFuel</Text>
        
      </View>
      
      <View> 
         <TouchableOpacity style={styles.Button} >
             <Text style={styles.Buttonlog}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button} >
             <Text style={styles.Buttoncreate}>Create an Account</Text>
          </TouchableOpacity> 

          <TouchableOpacity style={styles.Guest} >
             <Text style={styles.Guesttext}>Continue as Guest</Text>
          </TouchableOpacity> 
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1,
                alignItems: 'center',
                justifyContent: 'center' 

    },
    Button: {
        backgroundColor: '#000000',
        height: 70,
        width: 360,
        borderRadius: 30,
        marginBottom:12,
        

    },
    Buttonlog: {
        fontSize:18,
        color: '#E5E5E5',
        paddingVertical: 20,
        paddingHorizontal: 155,
        
    },
    Buttoncreate: {
      fontSize:18,
      color: '#E5E5E5',
      paddingVertical: 20,
      paddingHorizontal: 105,
      
  },
    title: {
        fontSize:50,
        marginLeft: 30,
        marginBottom:20,
        
    },
    Guest:{
        
        height: 60,
        width: 250,
        borderRadius: 30,
        marginLeft: 60,
      
        
        },
    Guesttext: {
        fontSize:18,
        fontWeight:'bold',
        color: '#000000',
        paddingVertical: 15,
        paddingHorizontal: 50,

    },
});

export default HomeScreen;