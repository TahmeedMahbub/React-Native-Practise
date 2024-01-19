/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import ExtStyles from './style'

function App(): React.JSX.Element {
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [showPassword, setShowPassword] = useState(true);
  var [display, setDisplay] = useState(false);

  var resetFormData=()=> {
    setName("");
    setEmail("");
    setPassword("");
    setDisplay(false);
  }
  return (
    <View>
      <Text style={{ fontSize:30, padding: 10, backgroundColor: "#737373", color: "white" }}>Simple Form </Text>

      <Text style={{ fontSize:20, marginLeft: 10, marginTop: 10 }}>Your Name: {name} </Text>
      <TextInput 
        style={style.textInput}
        placeholder='Enter Your Name'
        value={name}
        onChangeText={(text)=>setName(text)}
      />

      <TextInput 
        style={style.textInput}
        placeholder='Enter Your Email'
        value={email}
        onChangeText={(text)=>setEmail(text)}
      />

      <TextInput 
        style={style.textInput}
        placeholder='Enter Your Password'
        value={password}
        secureTextEntry={showPassword}
        onChangeText={(text)=>setPassword(text)}
      />

      <Button title="Show Password" onPress={()=>setShowPassword(showPassword ? false : true)}/>
      <View style={{ marginBottom: 10, marginTop: 10 }}>
        <Button color={"#3CB371"} title="Print Values" onPress={()=>setDisplay(true)}/>
      </View>
      <Button color={"#FA8072"} title="Clear Values" onPress={resetFormData}/>

      <View>
        {
          display ? 
            <View>
              <Text style={{ fontSize: 30, fontWeight: 1000, margin: 10 }}>Your Data: </Text> 
              <Text style={ExtStyles.textBox}>Your Name: {name}</Text> 
              <Text style={ExtStyles.textBox}>Your Email: {email}</Text> 
              <Text style={ExtStyles.textBox}>Your Password: {password}</Text> 
            </View>
            : null
        }
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
  }
})


export default App;
