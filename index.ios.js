import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { CreateAccount } from './src/components/index';

export default class react_native_eth_wallet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CreateAccount />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('react_native_eth_wallet', () => react_native_eth_wallet);
