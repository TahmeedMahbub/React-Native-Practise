import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator, Modal, Pressable, StatusBar, Platform} from 'react-native';

const Header=()=>{
  return(
    <Text style={style.header}>
      OS Platform Check
    </Text>
    );
}


const App = () => {
  return (
    <View style={style.main}>
      <StatusBar 
        backgroundColor="teal" 
        barStyle="light-content"
      />
      <Header />
      <Text style={style.text}><Text style={style.label}>Operating System:</Text> {Platform.OS}</Text>
      <Text style={style.text}><Text style={style.label}>Brand:</Text> {JSON.stringify(Platform.constants.Brand)}</Text>
      <Text style={style.text}><Text style={style.label}>OS Data:</Text> {JSON.stringify(Platform)}</Text>

      
    </View>
  )
}

const style = StyleSheet.create({
  main: {
    flex: 1
  }, 
  header: {
    fontSize:25, 
    padding: 10, 
    backgroundColor: "teal", 
    color: "white"
  },
  body: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    margin: 5,
    padding: 5
  },
  label: {
    fontWeight: "bold"
  },
  radio:{
    height: 40, 
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 30,
    margin: 10,
  },
  radioBg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    margin: 4,
    borderRadius: 30,
  },
  radioText:{
    fontSize: 20,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button : {
    backgroundColor: 'skyblue',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'blue',
    elevation: 20,
  },
  bottomButton: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  success: {
    backgroundColor: 'lightgreen',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'lavender',
    marginBottom: 10,
    padding: 40,
    borderRadius: 20,
    shadowColor: 'blue',
    elevation: 20,
  },
  pressable: {
    backgroundColor: "teal",
    color: '#fff',
    fontSize: 20,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: 'green',
    elevation: 50,
    textAlign: 'center'
  },
})

export default App;
