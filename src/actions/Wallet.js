// import browserify shim
import '../../shim.js';
import Promise from 'bluebird';
// import Tx from 'ethereumjs-tx';
import { keystore, txutils, signing } from 'eth-lightwallet/index';
import Web3 from 'web3';

export default class Wallet {
  constructor() {
    this.password = '';
  }

  load() {
    console.log('hit load function');
    return new Promise((resolve, reject) => {
      Promise.delay(0)
      .then(() => {
        let web3 = new Web3();
        web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
        console.log('web3', web3);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  createAccount(password1, password2) {
    console.log('keystore', keystore);
    // return new Promise((resolve, reject) => {
    //   comparePassword().then((hash))
    // });
  }

  comparePassword(password1, password2) {
    const same = password1.localeCompare(password2) ? true : false;
    return same;
  }

  vault() {
    // // first, set local global to password
    // keystore.createVault({
    //   password: this.password
    // }).then((error, pwDerivedKey) => {
    //   console.log('pwDerivedKey', pwDerivedKey);
    // }).catch((error) => {
    //   reject(error);
    // });
    // // then, save hashed password in
  }

  web3() {

  }

  createVault() {

  }
}
