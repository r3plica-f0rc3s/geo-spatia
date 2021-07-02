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
export interface WalletInfo {
  address: string;
  balance: string;
}

@Injectable()
export class ContractService {
  contractAddress = '0x844B9f34Ef221c5c29b406BDd068f4fAB71be211';

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
      await this.loadNFTs();
      this.initializing = false;
      // await this.loadNFTs();
    } catch (error) {
      this.initializing = false;
      throw new Error(error);
    }
  }

  async loadNFTs(): Promise<GeoNFT[]> {
    return new Promise((resolve, reject) => {
      // TODO: I need to add timeout because of some limits
        this.contract.methods
          .getAllNFT()
          .call({ from: this.wallet.selectedAddress })
          .then((nfts) => {
            console.log('nfts', nfts);
            return nfts;
          })
          .then((nfts: NFT[]) => {
            const geoNFTs: GeoNFT[] = nfts
              .filter((nft) => {
                return nft.location.length > 0 && nft.location !== 'coordinates';
              })
              .map((nft: NFT) => {
                console.log('mapping nft', nft);
                return {
                  name: nft.name,
                  location: new LngLat(
                    Number(nft.location.split(',')[1]),
                    Number(nft.location.split(',')[0])
                  ),
                  image: this.domSanitizer.bypassSecurityTrustHtml(
                    decodeURIComponent(nft.svg)
                  ),
                  price: Number(nft.price),
                  status: SoldStatus[nft.status],
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

  async buyNFT(tokenId: string, amount: number): Promise<void> {
    const result = await this.contract.methods
      .Buy(tokenId)
      .call({ from: this.wallet.selectedAddress, value: amount });

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
