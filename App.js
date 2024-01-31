import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header=()=>{
  return(
    <Text style={style.header}>
      Radio Button - TouchableOpacity
    </Text>
    );
}


const App = () => {

const [checkRadio, setCheckRadio] = useState(0);

  return (
    <View style={style.main}>
      <Header />

      <View style={style.body}>

        <TouchableOpacity onPress={()=>setCheckRadio(1)}>
          <View style={style.radioWrapper}>
            <View style={style.radio}>
              {checkRadio == 1 ? <View style={style.radioBg} /> : null}
            </View>
            <Text style={style.radioText}>Radio 1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setCheckRadio(2)}>
          <View style={style.radioWrapper}>
            <View style={style.radio}>
              {checkRadio == 2 ? <View style={style.radioBg} /> : null}
            </View>
            <Text style={style.radioText}>Radio 2</Text>
          </View>
        </TouchableOpacity>

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
    alignItems: 'center',
    justifyContent: 'center'
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
