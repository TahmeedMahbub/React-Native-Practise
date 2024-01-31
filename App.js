import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header=()=>{
  return(
    <Text style={style.header}>
      Dynamic Radio Button
    </Text>
    );
}


const App = () => {

  const skills = [
    {
      id: 1,
      name: 'php'
    },
    {
      id: 2,
      name: 'js'
    },
    {
      id: 3,
      name: 'html'
    },
    {
      id: 4,
      name: 'css'
    },
  ]
  const [checkRadio, setCheckRadio] = useState(0);

  return (
    <View style={style.main}>
      <Header />

      <View style={style.body}>
        {
          skills.map((item, index) => 
            <TouchableOpacity 
              key={index}
              onPress={()=>setCheckRadio(item.id)}
            >
              <View style={style.radioWrapper}>
                <View style={style.radio}>
                  {checkRadio == item.id ? <View style={style.radioBg} /> : null}
                </View>
                <Text style={style.radioText}>{item.id}. {item.name}</Text>
              </View>
            </TouchableOpacity>
          )
        }

        {/* <TouchableOpacity onPress={()=>setCheckRadio(1)}>
          <View style={style.radioWrapper}>
            <View style={style.radio}>
              {checkRadio == 1 ? <View style={style.radioBg} /> : null}
            </View>
            <Text style={style.radioText}>Radio 1</Text>
          </View>
        </TouchableOpacity> */}

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
    alignItems: 'left',
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
