import React from 'react';
import {StyleSheet, Text} from 'react-native';
// import { Common } from '_styles';


const RoboText = ({text}) => <Text style={styles.RoboStyle}>{text}</Text>;

const styles = StyleSheet.create({
  RoboStyle: {
    fontFamily: 'Roboto-Regular',
  },
});

export default RoboText;
