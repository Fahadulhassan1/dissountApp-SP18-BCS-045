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
  Dimensions
} from "react-native";




export default function App() {
  const [getPrice , setPrice] = useState ("");
  const [getDiscount , setDiscount] = useState ("");
  const [gettotalDiscount , settotalDiscount ] = useState("");
  const [getsavings , setsavings  ] = useState ("");
  const[getHistory , setHistory] = useState ([]);
  const [modalVisible, setModalVisible] = useState(false);

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
    <View style = {styles.container}>
      <Modal
        animationType="slide"
        
        transparent={true}
        visible={modalVisible}
        
      >
        <View >
          <View style={styles.modalView}>
          <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "green" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle }>X</Text>
            </TouchableHighlight>
          <Text style={styles.modalText}>Price| Discount%| Discounted Price| You Saved</Text>
          <ScrollView>
                {getHistory.map(
                    (data) => <Text style = {{fontSize : 30}}>{data[0]}| {data[1]}%| {data[2] }| {data[3]}</Text>
                )}
            </ScrollView>
            
          </View>
        </View>
      </Modal> 
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
      <Button color ="green" title = "View History"  onPress={() => {setModalVisible(!modalVisible)}}/>
      </View>
    
    </View>

  );

}
const styles = StyleSheet.create( {
  container:{
    backgroundColor : "orange",
    height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
  },

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
  },
  textStyleModal: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    
  
  },
  textStyle :{
    fontSize : 40, 
    paddingLeft: 30,
    width : 80,
    alignItems: "center",
    justifyContent: "center"
    
  }

})