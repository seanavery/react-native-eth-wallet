import Promise from 'bluebird';
import Tx from 'ethereumjs-tx';
// import { keystore } from 'eth-lightwallet';
import Web3 from 'web3';

export default class Wallet {
  constructor() {
    this.password = '';
  }

  load() {
    console.log('hit load function')
    return new Promise((resolve, reject) => {
      Promise.delay(0)
      .then(() => {
        console.log('Web3', Web3);
        let web3 = new Web3();
        web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
        console.log('web3', web3);
      }).catch((error) => {
        reject(error);
      })
    });
  }

  createAccount(password) {
    // console.log('keystore', keystore);
    // return new Promise((resolve, reject) => {
    //   // first, set local global to password
    //   keystore.createVault({
    //     password: this.password
    //   }).then((error, pwDerivedKey) => {
    //     console.log('pwDerivedKey', pwDerivedKey);
    //   }).catch((error) => {
    //     reject(error);
    //   });
    //   // then, save hashed password in
    // });
  }

  web3() {

  }

  createVault() {

  }
}
