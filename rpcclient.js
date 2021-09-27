'use strict';

const Web3 = require('web3');

class RpcClient {
  provider

  constructor(opts) {
    this.provider = new Web3(opts.provider);
  }

  getBlock(blockNumber, returnTransactionObjects, cbFunc) {
    this.provider.eth.getBlock(blockNumber, returnTransactionObjects, cbFunc)
  }
}

module.exports = RpcClient