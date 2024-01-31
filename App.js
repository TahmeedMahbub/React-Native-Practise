import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator, Modal, Pressable} from 'react-native';

const Header=()=>{
  return(
    <Text style={style.header}>
      Pressable - 4 Events
    </Text>
    );
}


const App = () => {
  return (
    <View style={style.main}>
      <Header />

      <View style={style.body}>
        <Pressable
          onPress={()=>console.warn("pressed")}
          onLongPress={()=>console.warn("looooooooong pressed")} // after pressing 0.5 seconds
          onPressIn={()=>console.warn("pressed in")}
          onPressOut={()=>console.warn("pressed out")}
        >
          <Text style={style.pressable}>Pressable</Text>
        </Pressable>
      </View>
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
    backgroundColor: "#737373", 
    color: "white"
  },
  body: {
    flex: 1,
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
