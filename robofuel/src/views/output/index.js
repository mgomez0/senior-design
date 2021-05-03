import React from 'react';
import {Image,View, SafeAreaView, Text, TouchableHighlight, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { color } from 'react-native-reanimated';


var detection = require('./images/rs-save-to-disk-output-Color_gasport.png')

function OutputScreen({ navigation }) {
  return (

    <View style={styles.container}>
        <Image style={styles.Picture} source={detection}/>
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
        height: 60,
        width: 120,
        borderRadius: 30,


    },
    Buttontext: {
        fontSize:18,
        color: '#E5E5E5',
        paddingVertical: 15,
        paddingHorizontal: 26,
    },
    title: {
        fontSize:50,
        paddingHorizontal: 30,

    },
    inputbubble: {
        backgroundColor: '#F2DADA',
        height: 60,
        width: 360,
        borderRadius: 30,
        margin:10,
        paddingHorizontal: 30,
    },

    inputheader: {
        fontSize:15,
        marginLeft: 30,


    },

    Picture: {
        width: 300,
        height: 300,
    }

});

export default OutputScreen;
