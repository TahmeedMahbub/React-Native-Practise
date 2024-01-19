/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';

const name = "Rafid";


function App(): React.JSX.Element {
  
  const pressed =(data = "Button Pressed Without Parameter")=>{
    console.warn(data);
  }
  return (
    <View>
      <Text style={{ fontSize:30 }}>Components</Text>
      <Button title="Press without Parameter" color={'red'}  onPress={()=>pressed()}/>
      <Button title="Press with Parameter" color={'green'}  onPress={()=>pressed("Greeen Button By Parameter")}/>
    </View>
  );
}


export default App;
