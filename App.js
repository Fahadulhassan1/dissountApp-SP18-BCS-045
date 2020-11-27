import React, { useDebugValue, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Modal,
  TouchableHighlight,
  ScrollView,
} from "react-native";




export default function App() {
  const [getPrice , setPrice] = useState ("dummy text");
  const [getDiscount , setDiscount] = useState ("dummydiscount");

  const calculate =  () =>{
      const price = Number (getPrice)
      const discount = Number (getDiscount)
      

  }
  return(
    <View style = {{paddingTop : 40}}> 
    <Text> enter the price</Text>
    <TextInput style = {styles.inputtext} onChangeText = {text => setPrice(text)}  /> 
    <Text> enter the pdiscount</Text>
    <TextInput style = {styles.inputtext} onChangeText = {text => setDiscount(text)} /> 
    <Button title = " calculate"  onPress = {calculate}/>

    <Text>  {getPrice} </Text>
     <Text>{getDiscount} </Text>


    
    
    </View>

  );

}
const styles = StyleSheet.create( {
  inputtext : {
    borderBottomWidth : 2

  }
})