import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Text style={{ fontSize:25, padding: 10, backgroundColor: "#737373", color: "white" }}>useEffect for Unmount</Text>
      <Button title="Toggle Component" onPress={()=>setShow(!show)} />
      {show ? <User /> : null}
    </View>
  )
}

const User=()=>{
  let timer = setInterval(()=>{
    console.warn("timer called");
  }, 2000)

  useEffect(()=>{
    return()=>clearInterval(timer)
  })
  return (
    <Text style={{ fontSize:20, padding: 10 }}>User Component </Text>
  )
}


export default App;
