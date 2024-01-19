/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, Button} from 'react-native';

const name = "Rafid";

function myAge() {
  return 25;
}

function App(): React.JSX.Element {
  const email = "rafid@mail.com";
  return (
    <View>
      <Text style={{ fontSize:30 }}>{name} ({myAge()})</Text>
      <Text style={{ fontSize:30 }}>{email}</Text>
      <Text style={{ fontSize:30 }}>{10/5}</Text>
      <Text style={{ fontSize:30 }}>{myAge < 20 ? "younger" : "older"}</Text>
    </View>
  );
}

export default App;
