import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator} from 'react-native';

const Header=()=>{
  return(
    <Text style={style.header}>
      Loader: ActivityIndicator
    </Text>
    );
}


const App = () => {
  const [show, setShow] = useState(false);

  const toggleLoader =()=> {
    // YOU CAN USE TIMEOUT
    setShow(true);
    setTimeout(()=>{
      setShow(false)
    }, 2000);

    // OR YOU CAN TOGGLE
    // setShow(!show);
  }

  return (
    <View style={style.main}>
      <Header />

      <View style={style.body}>
        <ActivityIndicator size={100} color="orange" animating={show}/>
        <Button title="Toggle Loader" onPress={toggleLoader} />
      </View>
    </View>
    
  )
}

const style = StyleSheet.create({
  main: {
    flex: 1
  }, 
  header: {
    fontSize:25, 
    padding: 10, 
    backgroundColor: "#737373", 
    color: "white"
  },
  body: {
    flex: 1,
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
  success: {
    backgroundColor: 'lightgreen',
  }
})

export default App;
