import { BehaviorSubject, combineLatest, forkJoin, Observable, ReplaySubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
const Web3 = require('web3');
import abi from './abi/ABI.json';
import { LngLat } from 'mapbox-gl';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';

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
  price: string;
  layer: number;
  owner?: string;
}

export interface NewNFTEvent {
  returnValues: {
    Info: NFT;
    tokenID: string;
    creationTime: string;
    saleTime: string;
  };
}

export interface BidInfo {
  highestBid: string;
  bidderAddress: string;
}

export interface GeoNFT {
  name: string;
  location: LngLat;
  image?: SafeHtml;
  price: string;
  status: SoldStatus;
  id: number;
  layer: number;
  ownerAddress: string;
  owner: boolean;
  saleTime?: Date;
  bidInfo?: BidInfo;
  creationTime?: Date;
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

export interface NFTSaleEvent {
  address: string;
  tokenId: string;
}

export interface NftBidEvent {
  returnValues: {
    newBid: BidInfo; // name of the property? auctionInfo, or something else?
    tokenId: string;
  };

}

export interface BidViewModel {
  highestBid: string;
  latestBidIsOwn: boolean;
  outBidden: boolean;
}

export type TransactionEventUnion = TransactionResultEvent | TransactionStartedEvent;
@Injectable()
export class ContractService {

  // old: 0x277333e8187d6d5C3f9d994E564662583EE88E4D
  contractAddress = '0x3a3B277712DcD3C1607c09A4b241AF7edCB5eb39';
  blockNumber = 12295877;
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

  bidsMap = new Map<string, BidInfo[]>();
  bidsMapSubject = new BehaviorSubject<Map<string, BidInfo[]>>(new Map<string, BidInfo[]>());
  bidsMap$ = this.bidsMapSubject.asObservable();

  newBidsSubject = new Subject<NftBidEvent>();
  newBids$ = this.newBidsSubject.asObservable();

  newNftsSubject = new Subject<NewNFTEvent>();
  newNfts$ = this.newNftsSubject.asObservable();

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
      // await this.loadNFTs(1);
      await this.loadNftPassedEvents();
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
      .on('data', async (nft: NewNFTEvent) => {
        console.log('nft created', nft);
        this.newNftsSubject.next(nft);
        const geoNft = await this.mapNewNFTEventToGeoNFT(
          nft
        );

        const nfts = this.nftsSubject.getValue();
        this.getSvg$(geoNft.id).subscribe((svg) => {
          geoNft.image = svg;

          this.nftsSubject.next(
            nfts.concat([geoNft])
          );
        });
      });

    this.contract.events.NFTBid({})
      .on('data', (bidEvent: NftBidEvent) => {

        this.newBidsSubject.next(bidEvent);
      });

    // this.contract.events.NFTSale({})
    //   .on('data', (data: any) => {
    //     console.log('nft-sale', data);
    //     // const geoNft = this.mapNftToGeoNFT(nft.Info, Number(nft.tokenId));
    //     // // TODO: invoke emits
    //     // const nfts = this.nftsSubject.getValue();

    //     // this.nftsSubject.next(
    //     //   nfts.concat([geoNft])
    //     // );
    //   });

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
          const imageObservables = geoNFTs.map((nft) => {
            return this.getSvg$(nft.id);
          });
          const tokenSaleTimeObservables = geoNFTs.map((nft) => {
            return this.tokenSaleTime(nft.id);
          });
          const auctionInfoObservables = geoNFTs.map((nft) => {
            return this.auctionInfo$(nft.id);
          });
          forkJoin([forkJoin(imageObservables), forkJoin(tokenSaleTimeObservables), forkJoin(auctionInfoObservables)])
            .subscribe(([svgs, tokenSaleTimes, auctionInfo]: [string[], Date[], BidInfo[]]) => {
              svgs.forEach((svg, index) => {
                geoNFTs[index].image = svg;
              });
              tokenSaleTimes.forEach((tst: Date, index) => {
                geoNFTs[index].saleTime = tst;
              });
              auctionInfo.forEach((auctionInfo: BidInfo, index) => {
                if (auctionInfo) {
                  geoNFTs[index].bidInfo = auctionInfo;
                }
              });
              this.nftsSubject.next(geoNFTs);
              resolve(geoNFTs);
            });

        });
    });
  }

  private tokenSaleTime(tokenId: number): Observable<unknown> {
    const tokenSaleTimeSubject = new Subject();
    const tokenSaleTime$ = tokenSaleTimeSubject.asObservable();
    this.contract.methods.TokenSaleTime(tokenId)
      .call({ from: this.selectedAddress })
      .then((result: any) => {
        console.log('tst result', result);
        // TODO: convert epoch to date
        const utcSeconds = result;

        const date = new Date(0); // The 0 there is the key, which sets the date to the epoch
        date.setUTCSeconds(utcSeconds);

        tokenSaleTimeSubject.next(date);
        tokenSaleTimeSubject.complete();
      });
    return tokenSaleTime$;

  }

  private epochToDate(epoch: string): Date {
    const date = new Date(0);
    const utcSeconds = Number(epoch);
    date.setUTCSeconds(utcSeconds);
    return date;
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

  getSvg(tokenId: number): Promise<SafeHtml> {
    return this.contract.methods
      .GetTokenSVG(tokenId).call({ from: this.selectedAddress })
      .then((svg: string) => {
        return this.domSanitizer.bypassSecurityTrustHtml(decodeURIComponent(svg));
      });
  }

  getNftById(tokenId: number): GeoNFT {
    return this.nftsSubject.getValue().find(x => x.id === tokenId);
  }

  getNFTBids$(tokenId: string): Observable<BidInfo[]> {
    const sub = new BehaviorSubject<BidInfo[]>(this.bidsMap.get(tokenId) || []);
    this.newBids$.pipe(
      filter((newBidEvent: NftBidEvent) => newBidEvent.returnValues.tokenId === tokenId),
    ).subscribe((newBidEvent: NftBidEvent) => {
      const bids = sub.getValue();
      bids.push(newBidEvent.returnValues.newBid);
      sub.next(bids);
    });
    return sub.asObservable();
  }

  normalizeBids(bids: BidInfo[]): BidViewModel {
    if (bids.length === 0) {
      return {
        highestBid: '0',
        latestBidIsOwn: false,
        outBidden: false
      };
    }
    const highestBid = bids.reduce((prev, current) => {
      return (prev.highestBid > current.highestBid) ? prev : current;
    });
    return {
      highestBid: highestBid.highestBid,
      latestBidIsOwn: this.selectedAddress.toLowerCase() === highestBid.bidderAddress.toLowerCase(),

      // has own bid but not highest
      outBidden: !(this.selectedAddress.toLowerCase() === highestBid.bidderAddress.toLowerCase()) && !!(bids
        .find(x => x.bidderAddress.toLowerCase() === this.selectedAddress.toLowerCase()))
    };
  }

  getNftsOnSale$(): Observable<GeoNFT[]> {
    return this.nftsSubject.pipe(
      map(nfts => nfts.filter(nft => !(nft.ownerAddress)))
    );
  }


  private mapNftToGeoNFT(nft: NFT, index: number): GeoNFT {
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
      price: nft.price,
      status: soldStatus,
      id: index + 1,
      ownerAddress: nft.owner,
      owner: nft.owner ? nft.owner.toLowerCase() === this.selectedAddress.toLowerCase() : false
    };
  }

  private async loadWalletInfo(): Promise<void> {
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

  bidNFT(tokenId: number, amount: string): void {
    // TODO: make it observable
    const result = this.contract.methods
      .Bid(tokenId)
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
          this.transactionsSubject.error({
            fee: receipt.fee,
            success: false,
            txid: receipt.id,
            confirmationNumber
          });
        }
        console.log(receipt);
      });
  }

  private loadNftPassedEvents(): Promise<void> {
    return Promise.all([
      this.contract.getPastEvents('NFTCreation', { fromBlock: this.blockNumber }),
      this.contract.getPastEvents('NFTBid', { fromBlock: this.blockNumber })
    ])
      .then(([nftCreationEvents, nftBidsEvents]: [NewNFTEvent[], NftBidEvent[]]) => {
        console.log('passed nftcreation', nftCreationEvents);
        console.log('passed nftbids', nftBidsEvents);
        nftBidsEvents.forEach((bid: NftBidEvent) => {
          if (!this.bidsMap.get(bid.returnValues.tokenId)) {
            this.bidsMap.set(bid.returnValues.tokenId, []);
          }
          const arr = this.bidsMap.get(bid.returnValues.tokenId);
          arr.push(bid.returnValues.newBid);
          this.bidsMap.set(bid.returnValues.tokenId, arr);

        });
        this.bidsMapSubject.next(this.bidsMap);
        return Promise.all(nftCreationEvents.map((nftCreationEvent => this.mapNewNFTEventToGeoNFT(nftCreationEvent))));
      })
      .then((nfts: GeoNFT[]) => {
        // map biddings
        const auctionInfos = nfts.map((nft, idx) => ({ bid: nft.bidInfo, idx }));
        console.log('auctionInfos', auctionInfos);
        return nfts;
      })
      .then((nfts: GeoNFT[]) => {

        this.nftsSubject.next(nfts);
      })
      .catch(e => {
        console.error(e);
      });
  }


  private async mapNewNFTEventToGeoNFT(nftCreation: NewNFTEvent): Promise<GeoNFT> {
    return new Promise(async (resolve, reject) => {
      try {
        const image = await this.getSvg(Number(nftCreation.returnValues.tokenID));
        const owner = await (nftCreation.returnValues.Info.status === '0' ?
          this.ownerOf(Number(nftCreation.returnValues.tokenID)) : new Promise((res) => res(null)));
        const auctionInfo = await this.auctionInfo(Number(nftCreation.returnValues.tokenID));
        const status = nftCreation.returnValues.Info.status === '1' ? SoldStatus.AVAILABLE :
          ((owner as string) === this.selectedAddress ? SoldStatus.OWNED : SoldStatus.SOLD);
        resolve({
          id: Number(nftCreation.returnValues.tokenID),
          layer: Number(nftCreation.returnValues.Info.layer),
          location: new LngLat(
            Number(nftCreation.returnValues.Info.location.split(',')[1]),
            Number(nftCreation.returnValues.Info.location.split(',')[0])
          ),
          name: nftCreation.returnValues.Info.name,
          ownerAddress: owner as string,
          owner: owner ? (owner as string).toLowerCase() === this.selectedAddress.toLowerCase() : false,
          saleTime: this.epochToDate(nftCreation.returnValues.saleTime),
          creationTime: this.epochToDate(nftCreation.returnValues.creationTime),
          bidInfo: auctionInfo,
          price: nftCreation.returnValues.Info.price,
          image,
          status
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  auctionInfo$(tokenID: number): Observable<BidInfo> {
    const bidSubject = new Subject<BidInfo>();
    const bid$ = bidSubject.asObservable();
    this.contract.methods.AuctionInfo(tokenID)
      .call({ from: this.selectedAddress })
      .then((bidInfo) => {
        bidSubject.next(bidInfo);
        bidSubject.complete();
      });
    return bid$;
  }

  auctionInfo(tokenID: number): Promise<BidInfo> {
    return this.contract.methods.AuctionInfo(tokenID)
      .call({ from: this.selectedAddress });
  }

  async ownerOf(tokenId: number): Promise<string> {
    return this.contract.methods
      .ownerOf(tokenId)
      .call({ from: this.selectedAddress });
  }

  getNftsWithMyBids(): Observable<GeoNFT[]> {
    return combineLatest([this.bidsMap$, this.nfts$]).pipe(
      filter(([bidsMap, nfts]) => !!bidsMap && !!nfts),
      map(([bidsMap, nfts]: [Map<string, BidInfo[]>, GeoNFT[]]) => {
        const nftIds: string[] = [];
        bidsMap.forEach((bid: BidInfo[], key: string) => {
          if (bid.find(x => x.bidderAddress.toLowerCase() === this.selectedAddress.toLowerCase())) {
            nftIds.push(key);
          }
        });

        return nftIds.map((x) => nfts.find(nft => String(nft.id) === x));
      }),
    );

  }

  enableResalePermission(): void {
    const transaction = this.contract.methods
      .enableResale()
      .send({ from: this.selectedAddress });
    this.listenToTransaction(transaction);
  }

  disableResalePermission(): void {
    const transaction = this.contract.methods
      .disableResale()
      .send({ from: this.selectedAddress });
    this.listenToTransaction(transaction);
  }

  async isApprovedForAll(): Promise<boolean> {
    return this.contract.methods.isApprovedForAll(this.selectedAddress, this.contractAddress);
  }

  listenToTransaction(transaction): void {
    transaction.on('transactionHash', (hash: string) => {
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
          this.transactionsSubject.next({
            fee: receipt.fee,
            success: true,
            txid: receipt.id,
            confirmationNumber
          });
        } else {
          this.transactionsSubject.error({
            fee: receipt.fee,
            success: false,
            txid: receipt.id,
            confirmationNumber
          });
        }
      });
  }

  loadOwnedNFTs(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      this.contract.methods.getUserOwnedNFT().call({
        from: this.selectedAddress
      }).then((result) => {
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


  oneToWei(balance): string {
    return this.currentWeb3.utils.toWei(balance, 'ether');
  }

  logout(): void {
    // TODO: to implement
    throw new Error('Not implemented yet');
  }
}
