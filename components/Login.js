import { useState } from 'react';
import {View, Text, StyleSheet, StatusBar, Button, TextInput} from 'react-native';
export const Login = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    return (
        <View>
            <Text style={{ fontSize: 20, margin: 5, padding: 5 }}>Login Page</Text>
            <TextInput 
                placeholder='Enter Name' 
                onChangeText={(text)=>setName(text)} 
                style={{ fontSize: 20, margin:7, padding: 7, borderColor: "grey", borderWidth:2, borderRadius: 5 }}
            />
            <TextInput 
                placeholder='Enter Age' 
                onChangeText={(text)=>setAge(text)} 
                style={{ fontSize: 20, margin:7, padding: 7, borderColor: "grey", borderWidth:2, borderRadius: 5 }}
            />
            <Button title="Go Home" onPress={()=>props.navigation.navigate("Home", {name: name, age: age})} />
        </View>
    )
}