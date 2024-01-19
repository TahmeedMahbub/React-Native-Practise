/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ExtStyles from './style';

function App(): React.JSX.Element {
  var [name, setName] = useState("Rafid");
  return (
    <View>
      <Text style={{ fontSize:30, padding: 5, backgroundColor: "black", color: "white", padding: 10, textAlign: 'center', }}>Inline CSS {/* DOUBLE CURLY BRACE. ONE FOR STYLE, ANOTHER FOR JSX */} </Text>
      
      <Text style={styles.textBox}>Internal CSS {/* SINGLE CURLY BRACE */} </Text>

      <Text style={ExtStyles.textBox}>External CSS {/* SINGLE CURLY BRACE */} </Text>

      <Text style={[styles.style1, ExtStyles.style2, {padding: 10}]}>Multiple Class CSS {/* ARRAY FOR MULTIPLE CLASSES, ANOTHER CURLY BRACE FOR JSX */} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    fontSize: 25,
    backgroundColor: 'silver',
    height: 100,
    textAlignVertical: 'center',
    padding: 10,
    margin: 7,
    borderRadius: 10
  },

  style1: {
    fontSize: 25,
    backgroundColor: 'aqua',
    height: 100,
    textAlignVertical: 'center',
  }
})


export default App;
