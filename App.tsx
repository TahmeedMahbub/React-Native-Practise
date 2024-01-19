/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
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
    }
  ];

  return (
    <View>
      <Text style={{ fontSize:30, padding: 10, backgroundColor: "#737373", color: "white" }}>Flat List Component</Text>

      <FlatList 
        data={users}
        renderItem={({item})=><Text style={ExtStyles.textBox}>{item.id}. {item.name}</Text>}
        keyExtractor={item=>item.id}
      />


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
