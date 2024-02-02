import {View, Text, StyleSheet, StatusBar, Button, TextInput} from 'react-native';
import style from '../App';

export const StoreData =(props)=>{
  
    return(<View>
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
    </View>)
  }