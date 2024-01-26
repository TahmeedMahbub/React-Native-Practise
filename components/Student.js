import React, { Component } from 'react';
import {Text, View} from 'react-native';

class Student extends Component {
  render(){
    return (
      <View>
        <Text style={{ fontSize:20, padding: 10 }}>{this.props.name}</Text>
      </View>
    )
  }

}

export default Student;