/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import ExtStyles from './style'

function App(): React.JSX.Element {
  var users = [
    {
      id: 1,
      name: "A"
    },
    {
      id: 2,
      name: "B"
    },
    {
      id: 3,
      name: "C"
    },
    {
      id: 4,
      name: "D"
    },
    {
      id: 5,
      name: "E"
    },
    {
      id: 6,
      name: "F"
    },
    {
      id: 7,
      name: "G"
    },
    {
      id: 8,
      name: "H"
    },
    {
      id: 9,
      name: "I"
    },
    {
      id: 10,
      name: "J"
    },
    {
      id: 11,
      name: "K"
    },
    {
      id: 12,
      name: "L"
    },
    {
      id: 13,
      name: "M"
    },
  ];

  return (
    <View>
      <Text style={{ fontSize:30, padding: 10, backgroundColor: "#737373", color: "white" }}>Flat List Component</Text>

      <ScrollView style={{ marginBottom:60 }}>
        {
          users.map((item)=><Text style={ExtStyles.textBox}>({item.id}) {item.name}</Text>)
        }
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  textInput: {
    fontSize: 20, 
    margin: 10, 
    padding: 10, 
    borderWidth: 2, 
    borderRadius: 10, 
    borderColor:"grey"
  }
})


export default App;
