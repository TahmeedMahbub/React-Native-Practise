/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

function App(): React.JSX.Element {
  var [name, setName] = useState("");
  return (
    <View>
      <Text style={{ fontSize:30 }}>Handle Text Input </Text>

      <Text style={{ fontSize:20, marginLeft: 10, marginTop: 10 }}>Your Name: {name} </Text>
      <TextInput 
        style={style.textInput}
        placeholder='Enter Your Name'
        value={name}
        onChangeText={(text)=>setName(text)}
      />
      <Button title="Clear Text" onPress={()=>setName('')}/>
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
