import Promise from 'bluebird';
// import Tx from 'ethereumjs-tx';
import Web3 from 'web3';

export default class Wallet {
  constructor() {

  }

  load() {
    console.log('hit load function')
    return new Promise((resolve, reject) => {
      Promise.delay(0)
      .then(() => {
        console.log('Web3', Web3);
        let web3 = new Web3()
        web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
        console.log('web3', web3);
      });
    });
  }

  web3() {

  }

  createVault() {

  }
}
