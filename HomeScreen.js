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

  export default class extends React.Component{
    render(){
        return(
            <View>
                <FlatList>
                    keyExtractor={this.keyExtractor}
                    data={this.state.allRequests}
                    renderItem={this.renderItem}
                </FlatList>
            </View>
        )
    }
    }