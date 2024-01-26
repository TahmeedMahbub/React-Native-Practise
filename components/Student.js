import React, { Component } from 'react';
import {Text, View} from 'react-native';

class Student extends Component {
  render(){
    return (
      <View>
        <Text style={{ fontSize:20, padding: 10 }}>Exported Class Component</Text>
      </View>
    )
  }

}

export default Student;