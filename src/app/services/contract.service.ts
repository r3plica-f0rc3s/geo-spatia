import { BehaviorSubject, forkJoin, Observable, ReplaySubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
const Web3 = require('web3');
import abi from './abi/ABI.json';
import { LngLat } from 'mapbox-gl';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export enum SoldStatus {
  SOLD,
  AVAILABLE,
  OWNED
}
// declare let window: any;
export interface NFT {
  name: string;
  location: string;
  status: string;
  price: number;
  layer: number;
  owner?: string;
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
  ownerAddress: string;
  owner: boolean;
}
export interface WalletInfo {
  address: string;
  balance: string;
}

export interface TransactionStartedEvent {
  txid: string;
}

export interface TransactionResultEvent {
  success: boolean;
  fee: number;
  confirmationNumber: number;
}

export type TransactionEventUnion = TransactionResultEvent | TransactionStartedEvent;
@Injectable()
export class ContractService {

  // old: 0x277333e8187d6d5C3f9d994E564662583EE88E4D
  contractAddress = '0x277333e8187d6d5C3f9d994E564662583EE88E4D';

  private walletInfoSubject = new BehaviorSubject<WalletInfo>(null);
  walletInfo$ = this.walletInfoSubject.asObservable();

  private errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  private nftsSubject = new BehaviorSubject<GeoNFT[]>(null);
  nfts$ = this.nftsSubject.asObservable();

  private ownedNFTsSubject = new BehaviorSubject<GeoNFT[]>(null);
  ownedNFTs$ = this.ownedNFTsSubject.asObservable();

  private transactionsSubject = new BehaviorSubject<TransactionEventUnion>(null);
  transactions$ = this.transactionsSubject.asObservable();

  contract: any;
  currentWeb3: any;
  wallet: any;
  selectedAddress: string;

  initializing = false;

  constructor(private domSanitizer: DomSanitizer) { }
  async init(): Promise<void> {
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
      await this.loadOwnedNFTs();
      await this.loadNFTs(1);
      this.setEvents();
      this.initializing = false;
    } catch (error) {
      this.initializing = false;
      this.errorSubject.next(error);
      throw new Error(error);
    }
  }

  setEvents(): void {
    this.wallet.on('networkChanged', function(networkId) {
      // Time to reload your interface with the new networkId
      console.log('New network ID:', networkId);
      if (networkId !== '0x6357d2e0') {
        console.error('You are not connected to harmony testnet s0');
        this.errorSubject.next('You are not connected to harmony testnet s0');
        return;
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
      // TODO: compare with owned and set SoldStatus

      this.contract.methods
        .getAllNFT(100, 1)
        .call({ from: this.selectedAddress })
        .then(nftsArr => nftsArr[0])
        .then(async (nfts: NFT[]) => {
          const ownerPromises = nfts.map((nft, index) => nft.status === '0' ?
            this.ownerOf(index + 1) : new Promise((resolve) => resolve(null)));

          const owners: any[] = await Promise.all(ownerPromises);
          const nftsWithOwners = nfts.map((nft, index) => {
            const nftCopy = { ...nft };
            nftCopy.owner = owners[index];
            return nftCopy;
          });
          const geoNFTs: GeoNFT[] = nftsWithOwners
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
            this.nftsSubject.next(geoNFTs);
            resolve(geoNFTs);
          });

        });
    });
  }

  getSvg$(tokenId: number): Observable<SafeHtml> {
    const svgSub = new Subject();
    const svg$ = svgSub.asObservable();
    this.contract.methods
      .GetTokenSVG(tokenId).call({ from: this.selectedAddress })
      .then((svg: string) => {
        svgSub.next(this.domSanitizer.bypassSecurityTrustHtml(decodeURIComponent(svg)));
        svgSub.complete();
      });
    return svg$;
  }

  mapNftToGeoNFT(nft: NFT, index: number): GeoNFT {
    console.log('mapping nft', nft);
    // check if owned
    const soldStatus = nft.status === '1' ? SoldStatus.AVAILABLE :
      (nft.owner === this.selectedAddress ? SoldStatus.OWNED : SoldStatus.SOLD);
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
      status: soldStatus,
      id: index + 1,
      ownerAddress: nft.owner,
      owner: nft.owner ? nft.owner.toLowerCase() === this.selectedAddress.toLowerCase() : false
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

  buyNFT(tokenId: number, amount: number): void {
    // TODO: make it observable
    const result = this.contract.methods
      .Buy(tokenId)
      .send({ from: this.selectedAddress, value: amount });
    console.log(result);
    result
      .on('transactionHash', (hash: string) => {
        console.log(
          'Transaction sent successfully. Check console for Transaction hash'
        );
        this.transactionsSubject.next({
          txid: hash
        });
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
          this.transactionsSubject.next({
            fee: receipt.fee,
            success: true,
            txid: receipt.id,
            confirmationNumber
          });
        } else {
          this.transactionsSubject.next({
            fee: receipt.fee,
            success: true,
            txid: receipt.id,
            confirmationNumber
          });
        }
        console.log(receipt);
      });
  }

  async ownerOf(tokenId: number): Promise<string> {
    return this.contract.methods
      .ownerOf(tokenId)
      .call({ from: this.selectedAddress });
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
    });
  }

  weiToOne(balance): string {
    return this.currentWeb3.utils.fromWei(balance, 'ether');
  }

  logout(): void {
    // TODO: to implement
    throw new Error('Not implemented yet');
  }
}
