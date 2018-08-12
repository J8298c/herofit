import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/containers/Splash';

export default class App extends Component {
  render() {
    return (
      <Splash />
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
