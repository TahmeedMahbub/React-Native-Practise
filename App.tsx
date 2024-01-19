/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button, Text, View} from 'react-native';

function App(): React.JSX.Element {

  const [name, setName] = useState("Rafid");

  function changeName() {
    setName("AIUB");
  }

  return (
    <View>
      <Text style={{ fontSize:30 }}>{name}</Text>
      <Button title="Update Name" onPress={changeName}/>
    </View>
  );
}


export default App;
