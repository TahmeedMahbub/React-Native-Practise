import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect (()=>{
    console.warn("Hello")
  }, [])

  return (
    <View>
      <Text style={{ fontSize:30, padding: 10, backgroundColor: "#737373", color: "white" }}>Life Cycle using useEffect</Text>
      <Text style={{ fontSize:25, padding: 10}}>{count}</Text>
      <Button title="Update" onPress={()=>setCount(count+1)} />
    </View>
  )
}


export default App;
