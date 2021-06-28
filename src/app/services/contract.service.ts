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
interface WalletInfo {
  address: string;
  balance: string;
}

@Injectable()
export class ContractService {
  contractAddress = '0x045aECf094E86554501bF093b77d1a5Cd7e5F165';

  private walletInfoSubject = new BehaviorSubject<WalletInfo>(null);
  walletInfo$ = this.walletInfoSubject.asObservable();

  private errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  private nftsSubject = new BehaviorSubject<GeoNFT[]>(null);
  nfts$ = this.nftsSubject.asObservable();

  contract: any;
  currentWeb3: any;
  wallet: any;

  constructor(private domSanitizer: DomSanitizer) {}
  async init() {
    this.wallet = (window as any).ethereum || (window as any).onewallet;
    if (!this.wallet) {
      throw new Error('No supported wallet');
    }

    // Ask User permission to connect to Metamask
    //   await window.ethereum.enable();
    try {
      this.currentWeb3 = new Web3(this.wallet);

      this.contract = new this.currentWeb3.eth.Contract(
        abi,
        this.contractAddress
      );
      await this.loadWalletInfo()
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
      .call({ from: this.wallet.selectedAddress })
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

  async loadWalletInfo(): Promise<void> {
    const balance = await this.currentWeb3.eth.getBalance(this.wallet.selectedAddress);
    this.walletInfoSubject.next({
      address: this.wallet.selectedAddress,
      balance
    });
  }
}
