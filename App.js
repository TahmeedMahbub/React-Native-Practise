import React, { Component } from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Student from './components/Student';

class App extends Component {
  constructor () { // CONSTRUCTOR IS NEEDED FOR CLASS COMPONENT
    super(); // SUPER KEYWORD IS USED FOR CALL CONSTRUCTOR OF PARENT CLASS
    this.state={
      name: "Rafid",
      age: "25"
    }
  }

  updateName(val) {
    this.setState({name:val});
  }

  
  render(){
    return (
      <View>
        <Text style={{ fontSize:30, padding: 10, backgroundColor: "#737373", color: "white" }}>Class Component</Text>
        <Text style={{ fontSize:20, padding: 10}}>{this.state.name}'s Form</Text>
        <TextInput 
          placeholder="Enter Name" 
          style={{ fontSize:20, padding: 10}} 
          onChangeText={(text)=>this.updateName(text)}
        />
        <Button title="Press Here" />
        <Student name={this.state.name} />
      </View>
    )
  }

}

export default App;
