import { StyleSheet, Text, View } from 'react-native';
import Navigator from "./navigation/Navigator";
import React, { Component } from "react";

interface Props {}

export default class App extends Component<Props> {
  render (){
    return( <Navigator />);
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