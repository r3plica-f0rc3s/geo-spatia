import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
const Web3 = require('web3');
import abi from './abi/ABI.json';
import { LngLat } from 'mapbox-gl';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SoldStatus } from './NFTs.service';

// declare let window: any;
export interface NFT {
  location: string;
  name: string;
  price: string;
  status: string;
  svg: string;
}

export interface GeoNFT {
  name: string;
  location: LngLat;
  image: SafeHtml;
  price: number;
  status: SoldStatus;
}

@Injectable()
export class ContractService {
  currentWeb3: any;

  errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  nftsSubject = new BehaviorSubject<GeoNFT[]>(null);
  nfts$ = this.nftsSubject.asObservable();

  contractAddress = '0x045aECf094E86554501bF093b77d1a5Cd7e5F165';
  contract: any;

  selectedAddress: any;
  constructor(private domSanitizer: DomSanitizer) {}
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

  async loadNFTs(): Promise<GeoNFT[]> {
    if (!this.contract) {
      this.init();
    }
    const result = await this.contract.methods
      .getAllNFT()
      .call({ from: this.selectedAddress })
      .then((nfts: NFT[]) => {
        const geoNFTs: GeoNFT[] = nfts
          .filter((nft) => {
            return nft.location.length > 0;
          })
          .map((nft: NFT) => {
            return {
              name: nft.name,
              location: new LngLat(
                Number(nft.location.split(',')[0]),
                Number(nft.location.split(',')[1])
              ),
              image: this.domSanitizer.bypassSecurityTrustHtml(
                decodeURIComponent(nft.svg)
              ),
              price: Number(nft.price),
              status: SoldStatus[nft.status],
            };
          });
        this.nftsSubject.next(geoNFTs);
        return geoNFTs;
      });
    return result;
  }
}
