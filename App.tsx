/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';

function App(): React.JSX.Element {
  var [name, setName] = useState("Rafid");
  return (
    <View>
      <Text style={{ fontSize:30, padding: 5, backgroundColor: "aqua" }}>Parent Component</Text>
      <Button title='Update Props' onPress={()=>setName("AIUB")} />
      <ChildComponent name={name} age={25}/>
    </View>
  );
}

const ChildComponent = (props) => {
  console.warn(props); // PROPS LOOKS LIKE JSON
  return (
    <View style={{ padding: 5, backgroundColor: "silver" }}>
      <Text style={{ fontSize:30 }}>name: {props.name}</Text>
      <Text style={{ fontSize:30 }}>age: {props.age}</Text>
    </View>
  );
}


export default App;
