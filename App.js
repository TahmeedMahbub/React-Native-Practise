import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, StatusBar, Button, ScrollView, FlatList, TextInput, TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Header=()=>{
  return(
    <View>
      <StatusBar 
        backgroundColor="teal" 
        barStyle="light-content"
      />
      <Text style={style.header}>
        POST API: Store Data
      </Text>
    </View>
    );
}


const Tab = createMaterialTopTabNavigator();


const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [alert, setAlert] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(()=>{
    getApi();
  }, [])

  const StoreData = () => {
    return (
      <View>
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
    )
  }

  const ShowData = () => {
    return (
      data && data.length ? (
        <FlatList 
          data={data}
          renderItem={({ item }) => (
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 2, flex: 1, flexDirection: "row" }}>
              <Text style={{ padding: 10, fontSize: 20, flex: 4 }}>{item.name} ({item.age})</Text>
              <View style={{ padding: 10, fontSize: 20, flex: 1 }}>
                <Button title='Edit' onPress={()=>editItem(item.id)}/>
              </View>
              <View style={{ padding: 10, fontSize: 20, flex: 1 }}>
                <Button title='Del' onPress={()=>deleteItem(item.id)}/>
              </View>
            </View>
          )}
        />
      ) : null
    );
  };

  const closeAlert=()=>{
    setAlert("");
  }

  const getApi= async()=>{
    const url = "http://10.0.2.2:3000/users";
    var result = await fetch(url);
    result = await result.json();
    setData(result);
  }

  const storeApi = async()=>{
    if(!name) {
      setAlert("danger");
      setAlertMessage("Name Is Required!");
      return false;
    }
    if(!age) {
      setAlert("danger");
      setAlertMessage("Age Is Required!");
      return false;
    }

    const postData ={name, age}; 

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
      setAlert("success");
      setAlertMessage("Data Stored Successfully!");
    }
    
  }

  const deleteItem = async(props) => {
    

    const url = "http://10.0.2.2:3000/users/"+props;
    var result = await fetch(url, {
      method: "Delete",
      headers: { "Content-Type" : "application/json" }
    });
    result = await result.json();
    
    if(result) {
      setAlert("success");
      setAlertMessage("Data Deleted Successfully!");
    }
    
    return (
      <View>
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
    )
  }

  return (
    <View style={style.main}>
      <Header />     
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Show Data' component={ShowData} />
          <Tab.Screen name='Store Data' component={StoreData} />
        </Tab.Navigator>
      </NavigationContainer>
      
      {
        alert && alert == "danger"
        ? 
          <View style={style.dangerAlert}>
            <Text style={style.text}>
              {alertMessage}
            </Text>
            <Button title="X" onPress={()=>closeAlert()} />
          </View>
        :
          null
      }

      {
        alert && alert == "success"
        ? 
          <View style={style.successAlert}>
            <Text style={style.text}>
              {alertMessage}
            </Text>
            <Button title="X" onPress={()=>closeAlert()} />
          </View>
        :
          null
      }
      
    </View>
)}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#E5E4E2"
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
    borderColor: "grey",
    backgroundColor: "white"
  },
  successAlert: {
    fontSize: 20,
    margin: 10,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "lightgreen",
  },
  dangerAlert: {
    fontSize: 20,
    margin: 10,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#FFA07A",
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
