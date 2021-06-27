import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
const Web3 = require('web3');
import abi from './abi/ABI.json';

// declare let window: any;

@Injectable()
export class ContractService {
  currentWeb3: any;

  errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  contractAddress = '0x844B9f34Ef221c5c29b406BDd068f4fAB71be211';
  contract: any;
  async init() {
      const wallet = (window as any).ethereum || (window as any).onewallet;
      if (!wallet) {
          this.errorSubject.next('No supported wallet');
      }

      this.currentWeb3 = new Web3(wallet);
      // Ask User permission to connect to Metamask
    //   await window.ethereum.enable();
      this.contract = new this.currentWeb3.eth.Contract(abi,this.contractAddress);
      console.log(this.contract);
  }
}
