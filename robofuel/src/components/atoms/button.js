import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";
// import { Common } from '_styles';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);



const styles = StyleSheet.create({
    
  appButtonContainer: {
      
      backgroundColor: '#000000',
      borderWidth: 2,
      // boxSizing: 'border-box',
      borderRadius: 6,
      justifyContent: 'center'
      
    },
    appButtonText: {
      // position: 'absolute',
      // width: 40,
      // height: 15,
      // left: calc(50% - 40/2 - 1.21),
      // top: calc(50% - 15/2 + 0.5),
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 13,
      lineHeight: 15,
      display: 'flex',
      // alignItems: 'center',
      textAlign: 'center',
      letterSpacing: 0.04,
      textTransform: 'uppercase',
      color: '#FFFFFF'
    }


  });

  export default AppButton;