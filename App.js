import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, StyleSheet, StatusBar, Button} from 'react-native';


const Header=()=>{
  return(
    <Text style={style.header}>
      Stack Navigation
    </Text>
    );
}

const Tab = createBottomTabNavigator();

const Login =()=>{
  return(<View>
    <Text>Login</Text>
  </View>)
}
const Registration =()=>{
  return(<View>
    <Text>Registration</Text>
  </View>)
}


const App = () => {
  return (
    <View style={style.main}>
      <StatusBar 
        backgroundColor="teal" 
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Login' component={Login} />
          <Tab.Screen name='Registration' component={Registration} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
)}

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
  textBox: {
    fontSize: 25,
    backgroundColor: 'silver',
    height: 100,
    height: 70,
    textAlignVertical: 'center',
    textAlign: 'left',
    padding: 10,
    margin: 7,
    borderRadius: 10
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
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,.5)',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalBody: {
    backgroundColor: '#fff',
    height: 300,
    width: 300,
    padding: 20,
    borderRadius: 10

  },
})

export default App;
