/**
 * @format
 */

import React, { Component } from "react";
import {StyleSheet, Text, View, NativeModules, TouchableOpacity, StatusBar, TextInput} from 'react-native';

const { ReactViewManager } = NativeModules;


class AddRatingApp extends Component<{}>  {
  render() {
    var amount = this.props['transferAmount'];
    return (
      <View style={styles.container}>
      <Text style={styles.title}>ReactNative App</Text>
      <Text style={styles.text1}>Your amount £{amount} has been transfered!</Text>
      <Text style={styles.text3}>Thank you for choosing Lloyds Bank!</Text>
      <View >
      <TextInput
        style={{height: 20, width: '90%',textAlign: 'center',borderColor: 'gray', borderWidth: 2}}
        placeholder="Enter Amount"
        onChangeText={(text) => this.setState({input: text})}/>
        </View>
      <TouchableOpacity
        onPress={() => {
          ReactViewManager.save(this.props.rootTag, this.state.input);
        }}>
        <Text>
          Confirm
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

export default AddRatingApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
    color: "#00402e",
    fontWeight: "bold"
  },
  text1: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text2: {
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 22,
    color: "#00402e",
  },
  text3: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 15,
  },
});
