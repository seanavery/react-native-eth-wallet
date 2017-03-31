import React, { Component } from 'react';

import {
  View,
  TextInput,
} from 'react-native';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    }
  }

  handleSubmit() {

  }
  
  render() {
    return (
      <View>
        <TextInput
          style{{height: 40}}
          placeHolder="Enter Password"
          onChangeText={(text) => this.setState({password: text})}
        />

      </View>
    );
  }
}
