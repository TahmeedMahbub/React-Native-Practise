import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator, Modal, Pressable, StatusBar} from 'react-native';

const Header=()=>{
  return(
    <Text style={style.header}>
      StatusBar - Top Bar
    </Text>
    );
}


const App = () => {
  const [hideBar, setHideBar] = useState(false);
  const [changeColor, setChangeColor] = useState("light-content");
  return (
    <View style={style.main}>
      <StatusBar 
        backgroundColor="teal" 
        barStyle={changeColor} // default, dark-content, light-content
        hidden={hideBar}
      />
      <Header />

      <Pressable
        onPressIn={()=>setHideBar(true)}
        onPressOut={()=>setHideBar(false)}
      >
        <Text style={style.pressable}>Hide Status Bar</Text>
      </Pressable>

      <View style={[style.button]}>
        <Button title="Change Color" onPress={()=>setChangeColor(changeColor == "light-content" ? "dark-content" : "light-content")}/>
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
    backgroundColor: "teal", 
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
