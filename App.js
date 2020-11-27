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
  const [getPrice , setPrice] = useState ("");
  const [getDiscount , setDiscount] = useState ("");
  const [gettotalDiscount , settotalDiscount ] = useState("");
  const [getsavings , setsavings  ] = useState ("");

  const calculate =  () =>{
      const price = Number (getPrice)
      const discount = Number (getDiscount)
      const totalDiscount = Number (price - (price * discount)/100)
      const savings = Number (price - totalDiscount)
      settotalDiscount(String(totalDiscount))
      setsavings(String(savings))
      

      

  }
  return(
    <View style = {{paddingTop : 40}}> 
    <Text> enter the price</Text>
    <TextInput style = {styles.inputtext} onChangeText = {text => setPrice(text)}  /> 
    <Text> enter the pdiscount</Text>
    <TextInput style = {styles.inputtext} onChangeText = {text => setDiscount(text)} /> 
    <Button title = " calculate"  onPress = {calculate}/>
    

    <Text> final price is : {gettotalDiscount} </Text>
     <Text> total saving is : {getsavings} </Text>


    
    
    </View>

  );

}
const styles = StyleSheet.create( {
  inputtext : {
    borderBottomWidth : 2

  }
})