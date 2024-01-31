import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={{ flex:1 }}>
      <View style={{ flex:2, backgroundColor: "red", flexDirection: "row" }}>
        <View style={{ flex:1, margin: 10, backgroundColor: "white" }}/>
        <View style={{ flex:1, margin: 10, backgroundColor: "grey" }}/>
        <View style={{ flex:1, margin: 10, backgroundColor: "black" }}/>
      </View>
      <View style={{ flex:1, backgroundColor: "green" }}/>
      <View style={{ flex:1, backgroundColor: "blue" }}/>
    </View>
  )
}

const style = StyleSheet.create({
  main: {
    flex: 1
  }
})

export default App;
