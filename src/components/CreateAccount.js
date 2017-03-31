import React, { Component } from 'react';

import {
  View,
  Text,
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
        <Text>checking</Text>
        <TextInput
          style={{height: 100, width: 300}}
          placeholder="Enter password"
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
        />

      </View>
    );
  }
}
