import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, ActivityIndicator, Modal} from 'react-native';

const Header=()=>{
  return(
    <Text style={style.header}>
      Modal
    </Text>
    );
}


const App = () => {

  const [showModal,setShowModal] = useState(false);

  return (
    <View style={style.main}>
      <Header />

      {/* MODAL animationTypes :'slide', 'fade', 'none' */}
      <Modal transparent={true} visible={showModal} animationType='slide'>
        <View style={style.modalWrapper}>
          <View style={style.modalView}>
            <Text style={{ fontSize: 30,  }}>Hello Rafid!</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={style.bottomButton}>
        <Button title="Open Modal" onPress={() => setShowModal(true)}/>
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
})

export default App;
