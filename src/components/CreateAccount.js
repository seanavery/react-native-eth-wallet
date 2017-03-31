import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      password_check : ''
    }
  }

  handleSubmit() {
    console.log('handling submit...')
  }

  render() {
    return (
      <View>
        <Text>checking</Text>
        <TextInput
          style={{height: 100, width: 300}}
          placeholder="enter password"
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
        />
        <TextInput
          style={{height: 100, width: 300}}
          placeholder="re-enter password"
          onChangeText={(text) => this.setState({password_check: text})}
          secureTextEntry={true}
        />
        <TouchableHighlight onPress={this.handleSubmit}>
          <View style={{height: 200, backgroundColor: 'darkgrey'}}>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
