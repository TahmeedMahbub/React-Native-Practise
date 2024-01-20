/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import ExtStyles from './style'
import UserData from './components/UserData';

function App(): React.JSX.Element {
  var alphabets = [
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
      name: "N"      
    },
    {
      id: 14,
      name: "M"
    },
    {
      id: 15,
      name: "O"
    },
    {
      id: 16,
      name: "P"
    },
    {
      id: 17,
      name: "Q"
    },
    {
      id: 18,
      name: "R"
    },
    {
      id: 19,
      name: "S"
    },
    {
      id: 20,
      name: "T"
    },
    {
      id: 21,
      name: "U"
    },
    {
      id: 22,
      name: "V"
    },
    {
      id: 23,
      name: "W"
    },
    {
      id: 24,
      name: "X"
    },
    {
      id: 25,
      name: "Y"
    },
    {
      id: 26,
      name: "Z"
    },
  ];

  return (
    <View>
      <Text style={{ fontSize:30, padding: 10, backgroundColor: "#737373", color: "white" }}>Flat List Component</Text>

      <View>
        <FlatList data={alphabets} renderItem={({item})=> <UserData val={item} />} />
      </View>

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
  },

  item: {
    fontSize: 20, 
    padding: 7, 
    flex: 1,
    
  },

  box: {
    flexDirection: 'row',
    borderWidth: 2,
    margin: 5,

  }
})


export default App;
