import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert} from 'react-native';
  import db from '../Config'

  export default class extends React.Component{
    constructor(){
        super();
        this.state ={
          userId : firebase.auth().currentUser.email,
          bookName:"",
          reasonToRequest:""
        }
    }
    addItem=(itemName, description)=>{
        var userName=this.state.userName
        db.collection("exchange_requests").add({
            "username": userName,
            "item_Name": itemName,
            "description": description
        })
        this.setState({
            itemName:'',
            description:''
        })
        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text: 'OK', onPress :()=>{
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        )
    }
    render(){
        return(
            <View>
      <TouchableOpacity style={[styles.button, {marginTop:10}]}
      onPress={()=>{
          this.addItem(this.state.itemName,this.state.discription)
      }}>
      <Text style={{color:'#ffff',fontSize:18, fontWeight:bold,}}>AddITem</Text>
      </TouchableOpacity>
        <TextInput
        style ={styles.formTextInput}
        placeholder={"Item Name"}
        onChangeText={(text)=>{
            this.setState({
                bookName:text
            })
        }}
        value={this.state.bookName}
      />
      <TextInput
        style ={[styles.formTextInput,{height:300}]}
        multiline
        numberOfLines ={8}
        placeholder={"Description"}
        onChangeText ={(text)=>{
            this.setState({
                reasonToRequest:text
            })
        }}
        value ={this.state.reasonToRequest}
      />
            </View>
        )
    }
}