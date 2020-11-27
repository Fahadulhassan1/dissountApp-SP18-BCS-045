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
  const[getHistory , setHistory] = useState ([]);

  const calculate =  () =>{
      const price = Number (getPrice)
      const discount = Number (getDiscount)
      const totalDiscount = Number (price - (price * discount)/100).toFixed(2)
      const savings = Number (price - totalDiscount).toFixed(2)
      settotalDiscount(String(totalDiscount))
      setsavings(String(savings))
  }
    const discountCheck = (e) =>{
      const check = Number (e)
      if(check < 0 || check > 100){
        alert("you entered wrong discount")
        setDiscount("")
      }else{
        setDiscount(e)
      }

    }
    const saved = () => {
        const data = [
          getPrice,
          getDiscount,
          gettotalDiscount,
          getsavings

        ];
        setHistory([...getHistory , data]);
    }

      
  
  return(
    <View style = {{backgroundColor: 'orange'}}> 
    <Text style ={styles.header}>Discount App</Text>
    <View style = {styles.priceborder}>
    <Text style = {{fontSize : 16}}> enter the price</Text>
    <TextInput style = {styles.inputtext} onChangeText = {text => setPrice(text)} keyboardType={'numeric'}  /> 
    </View>
    < View style = {styles.priceborder} >
    <Text style = {{fontSize : 16}}> enter the discount</Text>
    <TextInput style = {styles.inputtext} keyboardType={'numeric'}  onChangeText = {(text) => discountCheck(text)}  /> 
    </View>
    <Button  color = "green" title = " calculate"  onPress = {calculate}/>
    
    <View style={{marginTop : 50  , borderBottomWidth:2}}>
    <Text style = {{fontSize : 24}}> final price is : {gettotalDiscount} </Text>
    </View>
    <View  style={{marginTop : 50  , borderBottomWidth:2}}>
     <Text style = {{fontSize : 24}}> total saving is : {getsavings} </Text>
     </View>
     <View style = {{paddingTop: 70, flexDirection: "row" ,marginLeft: 20, justifyContent: 'space-evenly'}}>
      <Button  color ="green" title = "Save"  onPress = {saved}/>
      <Button color ="green" title = "View History" />
      </View>
    
    </View>

  );

}
const styles = StyleSheet.create( {
  inputtext : {
    borderBottomWidth : 2 ,
    padding : 20,
    marginBottom : 10,
    fontSize: 24
  },
  header: {
    padding: 40 , 
    color : "brown" ,
    fontSize : 24,
    textAlign : "center",
    justifyContent : 'center' ,
    alignItems : 'center'
  }, 
  priceborder : {
    borderWidth : 2 , 
    marginBottom : 5
  }
})