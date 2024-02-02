import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, StatusBar, Button, ScrollView, FlatList, TextInput} from 'react-native';


const Header=()=>{
  return(
    <View>
      <StatusBar 
        backgroundColor="teal" 
        barStyle="dark-content"
      />
      <Text style={style.header}>
        POST API: Store Data
      </Text>
    </View>
    );
}
const App = () => {

  // const getApi= async()=>{
  //   const url = "http://10.0.2.2:3000/users";
  //   var result = await fetch(url);
  //   result = await result.json();
  //   setData(result);
  // }
  
  // useEffect(()=>{
  //   getApi();
  // }, [])

  const storeApi = async()=>{

    const postData ={name, age};

    // IF KEY AND VARIABLE NAME IS SAME, KEY CAN BE SKIPPED
    // const postData ={
    //   name: name,
    //   age: age
    // }
    

    const url = "http://10.0.2.2:3000/users";
    var result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(postData)

    });
    result = await result.json();
    
    if(result) {
      setAge("");
      setName("");
    }
    
  }


  const [data, setData] = useState([]);
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <View style={style.main}>
      <Header />
      
      <TextInput 
        style={style.textInput} 
        placeholder='Enter Name'
        onChangeText={(text)=>setName(text)}
        value={name}
      />

      <TextInput 
        style={ style.textInput } 
        placeholder='Enter Age'
        onChangeText={(text)=>setAge(text)}
        value={age}
      />

      <Button title='Store Data' onPress={storeApi} />
    </View>
)}

const style = StyleSheet.create({
  main: {
    flex: 1
  }, 
  header: {
    fontSize:25, 
    padding: 10, 
    backgroundColor: "teal", 
    color: "white"
  },
  body: {
    flex: 1,
  },
  textBox: {
    fontSize: 25,
    backgroundColor: 'silver',
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'left',
    padding: 10,
    margin: 7,
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    margin: 5,
    padding: 5
  },
  textInput: {
    borderWidth: 2, 
    borderRadius: 10, 
    margin: 10, 
    padding: 10, 
    fontSize: 20, 
    borderColor: "grey"
  },

  label: {
    fontWeight: "bold"
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
  bottomButton: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  success: {
    backgroundColor: 'lightgreen',
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'lavender',
    marginBottom: 10,
    padding: 40,
    borderRadius: 20,
    shadowColor: 'blue',
    elevation: 20,
  },
  pressable: {
    backgroundColor: "teal",
    color: '#fff',
    fontSize: 20,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: 'green',
    elevation: 50,
    textAlign: 'center'
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,.5)',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalBody: {
    backgroundColor: '#fff',
    height: 300,
    width: 300,
    padding: 20,
    borderRadius: 10

  },
})

export default App;
