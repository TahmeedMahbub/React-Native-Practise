import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default AlphabetData = (props)=>{
    const item=props.val;
    return (
      <View style={style.box}>
        <Text style={style.item}>{item.id}. </Text>
        <Text style={style.item}>{item.name}</Text>
      </View>        
    )
  }
  
  const style = StyleSheet.create({
    textInput: {
      fontSize: 20, 
      margin: 10, 
      padding: 10, 
      borderWidth: 2, 
      borderRadius: 10, 
      borderColor:"grey"
    },
  
    item: {
      fontSize: 20, 
      padding: 7, 
      flex: 1,
      
    },
  
    box: {
      flexDirection: 'row',
      borderWidth: 2,
      margin: 5,
  
    }
  })