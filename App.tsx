import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Form } from './src/screens/Form/Form';
import React, {useState} from 'react';


export default function App() {
  
  // Controlador state
  const [ActiveButtom, setActiveButtom] = useState(true);
  function activateBatSignal(){
    setActiveButtom((oldValue:Boolean) =>{
      return !oldValue;
    });
  }
  return (
    < View style={styles.container}>
      {ActiveButtom && <Pressable style={styles.buttom} onPress={() => {activateBatSignal()}}><Text style={styles.text}>Activate Bat Signal</Text></Pressable>}    
      {!ActiveButtom && <Form/> }  
      {!ActiveButtom && <Pressable style={styles.buttom} onPress={() => {activateBatSignal()}}><Text style={styles.text}>Enviar</Text></Pressable> }      
    </View >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,     
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 5,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttom: {
    marginTop: 5,
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: 'black',
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#e5bf3c',
  }     
});


