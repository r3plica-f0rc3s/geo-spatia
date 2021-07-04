import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
const Web3 = require('web3');
import abi from './abi/ABI.json';
import { LngLat } from 'mapbox-gl';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export enum SoldStatus {
  OWNED,
  SOLD,
  AVAILABLE,
}
// declare let window: any;
export interface NFT {
  location: string;
  name: string;
  price: string;
  status: string;
  svg: string;
  layer: string;
}

export interface GeoNFT {
  name: string;
  location: LngLat;
  image: SafeHtml;
  price: number;
  status: SoldStatus;
  id: number;
  layer: number;
}
export interface WalletInfo {
  address: string;
  balance: string;
}

@Injectable()
export class ContractService {
  contractAddress = '0x42900Bd63Cf85be003195253dC2aeb96f4F1A897';

  private walletInfoSubject = new BehaviorSubject<WalletInfo>(null);
  walletInfo$ = this.walletInfoSubject.asObservable();

  private errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  private nftsSubject = new BehaviorSubject<GeoNFT[]>(null);
  nfts$ = this.nftsSubject.asObservable();

  contract: any;
  currentWeb3: any;
  wallet: any;
  selectedAddress: any;

  initializing = false;

  constructor(private domSanitizer: DomSanitizer) {}
  async init() {
    this.initializing = true;
    this.wallet = (window as any).ethereum || (window as any).onewallet;
    if (!this.wallet) {
      throw new Error('No supported wallet');
    }

    // Ask User permission to connect to Metamask
    //   await window.ethereum.enable();
    try {
      if (!this.wallet.selectedAddress) {
        await this.wallet.enable(); // <<< ask for permission
      }
      this.currentWeb3 = new Web3(this.wallet);
      this.contract = new this.currentWeb3.eth.Contract(
        abi,
        this.contractAddress
      );
      this.selectedAddress = this.wallet.selectedAddress;
      console.log('selected address', this.selectedAddress);
      await this.loadWalletInfo();
      await this.loadNFTs(1);
      this.initializing = false;
      // await this.loadNFTs();
    } catch (error) {
      this.initializing = false;
      throw new Error(error);
    }
  }

  async loadNFTs(layer = 0): Promise<GeoNFT[]> {
    return new Promise((resolve, reject) => {
      // TODO: I need to add timeout because of some limits
        this.contract.methods
          .getAllNFT()
          .call({ from: this.selectedAddress, layer: 1 })
          .then((nfts: NFT[]) => {
            const geoNFTs: GeoNFT[] = nfts
              .filter((nft) => {
                return nft.location.length > 0;
              })
              .filter((nft) => {
                return Number(nft.layer) === layer;
              })
              .map((nft: NFT, index: number) => {
                console.log('mapping nft', nft);
                return {
                  name: nft.name,
                  layer: Number(nft.layer),
                  location: new LngLat(
                    Number(nft.location.split(',')[1]),
                    Number(nft.location.split(',')[0])
                  ),
                  image: this.domSanitizer.bypassSecurityTrustHtml(
                    // '<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="white"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#f85931"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-5 9) rotate(209 18 18) scale(1.2)" fill="#009989" rx="36"></rect><g transform="translate(-1 4.5) rotate(-9 18 18)"><path d="M13,21 a1,0.75 0 0,0 10,0" fill="white"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect></g></g></svg>'
                    decodeURIComponent(nft.svg)
                  ),
                  price: Number(nft.price),
                  status: nft.status === "1" ? SoldStatus.SOLD : SoldStatus.AVAILABLE,
                  id: index + 1
                };
              });
            this.nftsSubject.next(geoNFTs);
            resolve(geoNFTs);
            return geoNFTs;
          });
    });
  }

  async loadWalletInfo(): Promise<void> {
    return new Promise((resolve, reject) => {
        const address = this.wallet.selectedAddress;
        this.currentWeb3.eth
          .getBalance(this.selectedAddress)
          .then((balance) => {
            const displayBalance = this.currentWeb3.utils.fromWei(balance, 'ether');
            this.walletInfoSubject.next({
              address,
              balance: displayBalance,
            });
            resolve();
        });
    });
  }

  async buyNFT(tokenId: number, amount: number): Promise<void> {
    const result = await this.contract.methods
      .Buy(tokenId)
      .send({ from: this.selectedAddress, value: amount });
    result
      .on('transactionHash', (hash) => {
        console.log(
          'Transaction sent successfully. Check console for Transaction hash'
        );
        console.log('Transaction Hash is ', hash);
      })
      .once('confirmation', (confirmationNumber, receipt) => {
        if (receipt.status) {
          console.log('Transaction processed successfully');
        } else {
          console.log('Transaction failed');
        }
        console.log(receipt);
      });
  }
}
