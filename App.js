import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{ fontSize:25, padding: 10, backgroundColor: "#737373", color: "white" }}>Show / Hide Component</Text>
      <Button title="Show Component" onPress={()=>setShow(true)} />
      <Button title="Hide Component" onPress={()=>setShow(false)} />
      <Button title="Toggle Component" onPress={()=>setShow(!show)} />
      {show ? <User /> : null}
    </View>
  )
}

const User=()=>{
  return (
    <Text style={{ fontSize:20, padding: 10 }}>User Component </Text>
  )
}


export default App;
