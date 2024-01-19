/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, Button} from 'react-native';
import OfficeData from './components/OfficeData';

const name = "Rafid";


function App(): React.JSX.Element {
  return (
    <View>
      <OfficeData/>
      <Text style={{ fontSize:30 }}>Components</Text>
      <UserData/>
    </View>
  );
}

const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 25 }}> Name : Rafid </Text>
      <Text style={{ fontSize: 25 }}> Age : 25 </Text>
    </View>
  );
}

export default App;
