/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button , 
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      result : ""
    };
  }
  render(){
    return (
     <View>

       <Text>enter thr original price </Text>
       <TextInput style = {[styles.textinput]}></TextInput>
       <Text>enter the discount </Text>
       <TextInput style = {[styles.textinput]} ></TextInput>
       <Button title = "hello"/>
     </View>
      

    )
  }
  
}
const styles = StyleSheet.create({
  textinput:{
    borderBottomWidth : 2
  
  }
})


export default App;
