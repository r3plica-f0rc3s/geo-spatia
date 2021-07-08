import { BehaviorSubject, forkJoin, Observable, ReplaySubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
const Web3 = require('web3');
import abi from './abi/ABI.json';
import { LngLat } from 'mapbox-gl';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export enum SoldStatus {
  SOLD,
  AVAILABLE,
}
// declare let window: any;
export interface NFT {
  name: string;
  location: string;
  status: string;
  price: number;
  layer: number;
}

export interface NewNFTEvent {
  Info: NFT;
  tokenId: string;
}

export interface GeoNFT {
  name: string;
  location: LngLat;
  image?: SafeHtml;
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
  contractAddress = '0x06D99B413BAE1209ae6B98514CF8149d0e65B807';

  private walletInfoSubject = new BehaviorSubject<WalletInfo>(null);
  walletInfo$ = this.walletInfoSubject.asObservable();

  private errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  private nftsSubject = new BehaviorSubject<GeoNFT[]>(null);
  nfts$ = this.nftsSubject.asObservable();

  private ownedNFTsSubject = new BehaviorSubject<GeoNFT[]>(null);
  ownedNFTs$ = this.ownedNFTsSubject.asObservable();

  private transactionsSubject = new BehaviorSubject<GeoNFT[]>(null);
  contract: any;
  currentWeb3: any;
  wallet: any;
  selectedAddress: any;

  initializing = false;

  constructor(private domSanitizer: DomSanitizer) { }
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
      await this.loadOwnedNFTs();
      this.setEvents();
      this.initializing = false;
    } catch (error) {
      this.initializing = false;
      this.errorSubject.next(error);
      throw new Error(error);
    }
  }

  setEvents(): void {
    this.wallet.on('networkChanged', function (networkId) {
      // Time to reload your interface with the new networkId
      console.log("New network ID:", networkId);
      if (networkId != "0x6357d2e0") {
        console.error("You are not connected to harmony testnet s0");
        this.errorSubject.next('You are not connected to harmony testnet s0');
      }
    });
    this.contract.events.NFTCreation({})
      .on('data', (nft: NewNFTEvent) => {
        const geoNft = this.mapNftToGeoNFT(nft.Info, Number(nft.tokenId));
        // TODO: invoke emits
        const nfts = this.nftsSubject.getValue();

        this.nftsSubject.next(
          nfts.concat([geoNft])
        );
      });
  }

  async loadNFTs(layer = 0): Promise<GeoNFT[]> {
    return new Promise((resolve, reject) => {
      // TODO: I need to add timeout because of some limits

      this.contract.methods
        .getAllNFT(100, 1)
        .call({ from: this.selectedAddress })
        .then(nftsArr => nftsArr[0])
        .then((nfts: NFT[]) => {
          const geoNFTs: GeoNFT[] = nfts
            .filter((nft) => {
              return nft.location.length > 0;
            })
            .map((nft, index) => this.mapNftToGeoNFT(nft, index));
          // load nfts
          const observables = geoNFTs.map((nft) => {
            return this.getSvg$(nft.id);
          });
          forkJoin(observables).subscribe((svgs: string[]) => {
            svgs.forEach((svg, index) => {
              geoNFTs[index].image = svg;
            });
          })
          this.nftsSubject.next(geoNFTs);
          resolve(geoNFTs);
          return geoNFTs;
        });
    });
  }

  getSvg$(tokenId: number): Observable<SafeHtml> {
    const svgSub = new Subject();
    const svg$ = svgSub.asObservable();
    this.contract.methods
      .GetTokenSVG(tokenId).call({ from: this.selectedAddress })
      .then((svg: string) => {
        console.log(svg);
        svgSub.next(this.domSanitizer.bypassSecurityTrustHtml(decodeURIComponent(svg)));
        svgSub.complete();
      })
    return svg$;
  }

  mapNftToGeoNFT(nft: NFT, index: number): GeoNFT {
    console.log('mapping nft', nft);
    return {
      name: nft.name,
      layer: Number(nft.layer),
      location: new LngLat(
        Number(nft.location.split(',')[1]),
        Number(nft.location.split(',')[0])
      ),
      // image: this.domSanitizer.bypassSecurityTrustHtml(
      //   // '<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="white"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#f85931"></rect><rect x="0" y="0" width="36" height="36" transform="translate(-5 9) rotate(209 18 18) scale(1.2)" fill="#009989" rx="36"></rect><g transform="translate(-1 4.5) rotate(-9 18 18)"><path d="M13,21 a1,0.75 0 0,0 10,0" fill="white"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect></g></g></svg>'
      //   decodeURIComponent(nft.svg)
      // ),
      price: Number(nft.price),
      status: nft.status === "0" ? SoldStatus.SOLD : SoldStatus.AVAILABLE,
      id: index + 1
    };
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
    // TODO: make it observable
    const transactionSubject = new Subject()
    const transaction$ = this.transactionsSubject.asObservable();
    const result = await this.contract.methods
      .Buy(tokenId)
      .send({ from: this.selectedAddress, value: amount });
    result
      .on('transactionHash', (hash) => {
        console.log(
          'Transaction sent successfully. Check console for Transaction hash'
        );
        transactionSubject.next(hash);
        console.log('Transaction Hash is ', hash);
      })
      .once('confirmation', (confirmationNumber, receipt) => {
        if (receipt.status) {
          console.log('Transaction processed successfully', receipt);
          // find this nft in loaded nfts
          const buyedNft = this.ownedNFTsSubject.getValue().find(x => x.id === tokenId);
          this.ownedNFTsSubject.next(
            this.ownedNFTsSubject.getValue().concat(buyedNft)
          );
        } else {
          console.log('Transaction failed');
        }
        console.log(receipt);
      });
  }

  loadOwnedNFTs(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      this.contract.methods.getUserOwnedNFT().call({
        from: this.selectedAddress
      }).then((result) => {
        console.log('owned nfts', []);
        this.ownedNFTsSubject.next(result);
        resolve();
      }).catch((err) => {
        this.ownedNFTsSubject.error(err);
        reject(err);
      });
    })
  }

  weiToOne(balance): string {
    return this.currentWeb3.utils.fromWei(balance, 'ether');
  }
}
