import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SignUpLogin from "./Screens/SignUpLogin"
import CreateDrawerNavigator from 'react-navigation-drawer'
import SettingScreen from './Sceens/SettingsScreen'

export default class App extends React.Component{
  renderItem =({item,i})=>{
console.log(item.item_name);
return(
  <ListItem
  key={i}
  title={item.item_name}
  subtitle={item.description}
  titleStyle={{color:'black',fonteWeight:'bold'}}
  right={
    <TouchableOpacity style={styles.button}>
      <Text style={{color:'#ffff'}}>Exchange</Text>
    </TouchableOpacity>
   
  }
  bottomDivider
  />
)
  }
  render(){
  return (
    <View style={styles.container}>
       <SignUpLogin/>
      
     
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
