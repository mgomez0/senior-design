import React, { Component } from 'react';
import {View, SafeAreaView, Text, TouchableHighlight, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import { color } from 'react-native-reanimated';


//let buttonBool = false

//class ObjectDetection extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            showImage: false // Initial value
//        };
//    }
//
//    showImageFunc = () => {
//     this.setState({showImage: true});
//    }
//}


function DetectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.title}>Object Detection</Text>
      </View>
      <View>
      <TouchableOpacity
           //onPress={() => navigation.navigate('OutputScreen')}
            style={styles.Button}
      >
          <Text style={styles.Buttoncreate}>Run it!</Text>
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
    logo: {
      height: 80,
      width:50,
    },
    Picture: {
        height:200,
        width:200
    }
});

export default DetectionScreen;
