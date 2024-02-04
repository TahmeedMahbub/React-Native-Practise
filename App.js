import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect, useRef, useState } from 'react';
import {View, Text, StyleSheet, StatusBar, Button, ScrollView, FlatList, TextInput, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [alert, setAlert] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showModal,setShowModal] = useState(false);
  const [selectedUser,setSelectedUser] = useState(undefined);

  // useEffect(()=>{
  //   getApi();
  // }, [])

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

  
  const Header=()=>{
    return(
      <View>
        <StatusBar 
          backgroundColor="teal" 
          barStyle="light-content"
        />
        <Text style={style.header}>
          Async Storage: Parmanent Data 
        </Text>
        
        
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
      );
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
                <Button title='Edit' onPress={()=>openModal(item)}/>
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

  const UserModal = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const updateUser = async() => {
  
      const putData ={name, age}; 
  
      const url = "http://10.0.2.2:3000/users/"+props.selectedUser.id;
      var result = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(putData)
  
      });
      result = await result.json();
      
      if(result) {
        setAlert("success");
        setAlertMessage("Data Updated Successfully!");
        getApi();
        setShowModal(false);
      }
    }
    
    useEffect(()=>{
      if(props.selectedUser) {
        setName(props.selectedUser.name);
        setAge(props.selectedUser.age.toString());
      }
    }, [props.selectedUser])

    return (
      <View style={style.modalWrapper}>
        <View style={style.modalView}>
          <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Edit User</Text>

          <TextInput 
            style={[style.textInput, {width: 250, marginLeft: 0, marginRight: 0}]} 
            value={name} 
            onChangeText={(text)=>setName(text)}
          />

          <TextInput 
            style={[style.textInput, {width: 250, marginLeft: 0, marginRight: 0}]} 
            value={age} 
            onChangeText={(text)=>setAge(text)}
          />

          <View style={{ marginBottom: 10 }}>
            <Button title='update' onPress={updateUser}/>
          </View>
          <Button title='close' onPress={()=>props.setShowModal(false)}/>
        </View>
      </View>);
  }

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

  const deleteItem = async(id) => {

    const url = "http://10.0.2.2:3000/users/"+id;
    var result = await fetch(url, {
      method: "Delete"
    });
    result = await result.json();
    
    if(result) {
      setAlert("success");
      setAlertMessage("Data Deleted Successfully!");
    }
    getApi();
  }

  const openModal = async(data) => {
    setShowModal(true);
    setSelectedUser(data);
  }

  const nameInput = useRef();
  const ageInput = useRef();

  const submitRef = () =>{
    ageInput.current.focus();
    nameInput.current.setNativeProps({ editable: false });
    
  }

  const setAsyncData=async()=>{
    await AsyncStorage.setItem("name", "Rafid");
  }

  const getAsyncData=async()=>{
    const name = await AsyncStorage.getItem("name");
    console.warn(name);
  }

  const removeAsyncData=async()=>{
    const name = await AsyncStorage.removeItem("name");
  }

  return (
    <View style={style.main}>
      <Header />

      <View style={{margin: 10}} ><Button title="Get Async Data" onPress={getAsyncData} /></View>
      <View style={{margin: 10}} ><Button title="Set Async Data" onPress={setAsyncData} /></View>
      <View style={{margin: 10}} ><Button title="Remove Async Data" onPress={removeAsyncData} /></View>
      
    </View>
)}

const style = StyleSheet.create({
  main: {
    flex: 1,
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
    backgroundColor: '#fff',
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
