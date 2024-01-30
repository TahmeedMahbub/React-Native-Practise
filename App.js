import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [effect, setEffect] = useState(0);
  const [data, setData] = useState(0);

  useEffect (()=>{
    console.warn("Called from useEffect")
  }, [count])

  useEffect (()=>{
    console.warn("Called from another useEffect")
  }, [effect])

  return (
    <View>
      <Text style={{ fontSize:25, padding: 10, backgroundColor: "#737373", color: "white" }}>useEffect as componentDidUpdate</Text>
      <Text style={{ fontSize:20, padding: 10}}>Count: {count} </Text>
      <Text style={{ fontSize:20, padding: 10}}>Effect: {effect} </Text>
      <Text style={{ fontSize:20, padding: 10}}>Data: {data} (useEffect NOT Called)</Text>
      <Button title="Update Count" onPress={()=>setCount(count+1)} />
      <Button title="Update Effect" onPress={()=>setEffect(effect+1)} />
      <Button title="Update Data" onPress={()=>setData(data+1)} />
    </View>
  )
}


export default App;
