import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize:25, padding: 10, backgroundColor: "#737373", color: "white" }}>
        TouchableHighlight
      </Text>
      <TouchableHighlight>
        <Text style={[style.button, style.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={style.button}>Button</Text>
      </TouchableHighlight>
    </View>
    
  )
}

const style = StyleSheet.create({
  main: {
    flex: 1
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
  success: {
    backgroundColor: 'lightgreen',
  }
})

export default App;
