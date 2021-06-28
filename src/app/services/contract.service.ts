import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
const Web3 = require('web3');
import abi from './abi/ABI.json';

// declare let window: any;
export interface NFT {
  location: string;
  name: string;
  price: string;
  status: string;
  svg: string;
}

@Injectable()
export class ContractService {
  currentWeb3: any;

  errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  nftsSubject = new BehaviorSubject<NFT[]>(null);
  nfts$ = this.nftsSubject.asObservable();

  contractAddress = '0x045aECf094E86554501bF093b77d1a5Cd7e5F165';
  contract: any;

  selectedAddress: any;
  async init() {
    const wallet = (window as any).ethereum || (window as any).onewallet;
    if (!wallet) {
      throw new Error('No supported wallet');
    }

    // Ask User permission to connect to Metamask
    //   await window.ethereum.enable();
    try {
      this.currentWeb3 = new Web3(wallet);
      this.selectedAddress = (window as any).ethereum.selectedAddress;

      this.contract = new this.currentWeb3.eth.Contract(
        abi,
        this.contractAddress
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async loadNFTs(): Promise<NFT[]> {
    if (!this.contract) {
      this.init();
    }
    const result = await this.contract.methods
      .getAllNFT()
      .call({ from: this.selectedAddress })
      .then((nfts) => {
        this.nftsSubject.next(nfts);
        return nfts;
      });
    return result;
  }
}
