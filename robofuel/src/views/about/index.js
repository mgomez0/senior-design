import React from 'react';
import {View, SafeAreaView, Text, TouchableHighlight, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import { color } from 'react-native-reanimated';

 var icon = require('./images/profile_icon.png')

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
      <Image source={icon} style={styles.icon}
      />
      </View>

      <View>

          <Text style={styles.title}>Profile</Text>
        
      </View>
      
      <View>

      <Text style={styles.info}>Name: Robo Fuel</Text>
      <Text style={styles.info}>Email: Robofuel@csus.edu</Text>
      <TouchableOpacity style={styles.Guest} >
             <Text style={styles.Guesttext}>Edit Profile Picture </Text>
          </TouchableOpacity>

      <Text style={styles.title}>Privacy</Text>
         <TouchableOpacity style={styles.Guest} >
             <Text style={styles.Guesttext}>Change Password</Text>
          </TouchableOpacity>

      <Text style={styles.title}>Payment</Text>
          <TouchableOpacity style={styles.Button} >
             <Text style={styles.Buttonpayment}>+Add New Payment Method</Text>
          </TouchableOpacity> 

         
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1,
                
                justifyContent: 'center' 

    },
    Button: {
        backgroundColor: '#F2DADA',
        height: 70,
        width: 360,
        borderRadius: 30,
        marginBottom:12,
        marginLeft:17,

    },

    Buttonpayment: {
      fontSize:18,
      color: '#000000',
      paddingVertical: 25,
      paddingHorizontal: 66.5,
      fontWeight:'bold',
      
  },
    title: {
        fontSize:30,
        marginLeft:20,
        marginBottom:12,
        fontWeight:'bold',
        
    },
    Guest:{
        
        height: 60,
        width: 250,
        borderRadius: 30,
        marginLeft: 2,
      
        
        },
    Guesttext: {
        fontSize:18,
        fontWeight:'bold',
        color: '#625A5A',
        paddingVertical: 5,
        paddingHorizontal: 25,

    },
    icon: {
      height:176 ,
      width: 184,
      marginLeft: 110, 
      
    },

    info: { 
      fontSize:20,
      marginLeft: 25,
      marginBottom: 12,
      fontWeight:'bold',

    }
});

export default AboutScreen;