import { BehaviorSubject, combineLatest, forkJoin, Observable, ReplaySubject, Subject, timer } from 'rxjs';
import { Injectable } from '@angular/core';
const Web3 = require('web3');
import abi from './abi/ABI.json';
import { LngLat } from 'mapbox-gl';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { filter, first, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

export enum SoldStatus {
  SOLD,
  AVAILABLE,
  OWNED,
  RESALE,
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

export interface NFTCreationEvent {
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
  latestBidAddress?: string;
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

export interface ResaleBidEvent {
  returnValues: {
    latestInfo: ResaleInfo; // name of the property? auctionInfo, or something else?
    tokenId: string;
    resaleId: string;
  };
}

export interface BidViewModel {
  highestBid: string;
  latestBidIsOwn: boolean;
  outBidden: boolean;
}

export interface SaleRetrieveEvent {
  returnValues: {
    UserAddress: string;
    tokenID: string;
  };
}

export interface ResaleInfo {
  highestBid: string;
  bidderAddress: string;
  resalePrice: string;
  tokenID: string;
  resaleTime: number;
}
export interface ResaleCreation {
  returnValues: {
    tokenID: string;
    resaleID: string;
    creationTime: number;
    Info: {
      resalePrice: string;
      resaleTime: string;
    }
  };
}

export interface ResaleRetrieve {
  returnValues: {
    tokenID: string;
    resaleID: string;
    previousOwner: string;
    newOwner: string;
  };
}

export type TransactionEventUnion = TransactionResultEvent | TransactionStartedEvent;
@Injectable()
export class ContractService {

  // old: 0x277333e8187d6d5C3f9d994E564662583EE88E4D
  contractAddress = '0xbb8a976429ba8D5f0516529Ae02253939b968A9b';
  blockNumber = 12341288;
  private walletInfoSubject = new BehaviorSubject<WalletInfo>(null);
  walletInfo$ = this.walletInfoSubject.asObservable();

  private errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  private nftsSubject = new BehaviorSubject<GeoNFT[]>([]);
  nfts$ = this.nftsSubject.asObservable();
  nftsOnSale$ = this.nftsSubject.asObservable().pipe(
    filter(x => !!x),
    map(nfts => {
      return nfts.filter(((nft) => {
        return nft.saleTime.getTime() > Date.now();
      }));
    }));
  nftsOutdated$ = this.nftsSubject.asObservable().pipe(
    filter(x => !!x),
    map(nfts => {
      return nfts.filter(((nft) => {
        return nft.saleTime.getTime() < Date.now();
      }));
    }));

  private ownedNFTsSubject = new BehaviorSubject<GeoNFT[]>(null);
  ownedNFTs$ = this.ownedNFTsSubject.asObservable();

  private transactionsSubject = new Subject<TransactionEventUnion>();
  transactions$ = this.transactionsSubject.asObservable();

  bidsMap = new Map<string, BidInfo[]>();
  bidsMapSubject = new BehaviorSubject<Map<string, BidInfo[]>>(new Map<string, BidInfo[]>());
  bidsMap$ = this.bidsMapSubject.asObservable();

  // resalesMap = new Map<string, ResaleInfo[]>();
  // resalesMapSubject = new BehaviorSubject<Map<string, ResaleInfo[]>>(new Map<string, ResaleInfo[]>());
  // resalesMap$ = this.resalesMapSubject.asObservable();

  newBidsSubject = new Subject<NftBidEvent>();
  newBids$ = this.newBidsSubject.asObservable();

  newResaleCreationsSubject = new Subject<ResaleCreation>();
  newResaleCreations$ = this.newResaleCreationsSubject.asObservable();

  newResaleBidSubject = new Subject<ResaleBidEvent>();
  newResaleBid$ = this.newResaleCreationsSubject.asObservable();

  newNftsSubject = new Subject<NFTCreationEvent>();
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
      // await this.loadOwnedNFTs();
      // await this.loadNFTs(1);
      await this.loadPassedEvents();
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
      .on('data', async (nft: NFTCreationEvent) => {
        console.log('nft created', nft);
        this.newNftsSubject.next(nft);
        const newGeoNftList = await this.applyNftCreation(this.nftsSubject.getValue(), nft);
        this.nftsSubject.next(newGeoNftList);
      });

    this.contract.events.NFTBid({})
      .on('data', (bidEvent: NftBidEvent) => {
        // TODO: update bidsMap
        if (!this.bidsMap.get(bidEvent.returnValues.tokenId)) {
          this.bidsMap.set(bidEvent.returnValues.tokenId, [bidEvent.returnValues.newBid]);
        } else {
          const arr = this.bidsMap.get(bidEvent.returnValues.tokenId);
          arr.push(bidEvent.returnValues.newBid);
          this.bidsMap.set(bidEvent.returnValues.tokenId, arr);
        }
        this.bidsMapSubject.next(this.bidsMap);
        this.newBidsSubject.next(bidEvent);
      });

    this.contract.events.SaleRetrieve({})
      .on('data', (saleEvent: SaleRetrieveEvent) => {
        const nft = this.getNftById(Number(saleEvent.returnValues.tokenID));
        const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(saleEvent.returnValues.tokenID));
        const nfts = this.nftsSubject.getValue();
        nft.owner = saleEvent.returnValues.UserAddress.toLowerCase() === this.selectedAddress;
        nft.ownerAddress = saleEvent.returnValues.UserAddress;
        // nft.bidInfo = null;
        nfts[nftIdx] = nft;
        this.nftsSubject.next(nfts);
      });

    this.contract.events.ResaleCreation({})
      .on('data', (resaleEvent: ResaleCreation) => {
        console.log('ResaleCreation', resaleEvent);
        const nft = this.getNftById(Number(resaleEvent.returnValues.tokenID));
        const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(resaleEvent.returnValues.tokenID));
        const nfts = this.nftsSubject.getValue();
        // set status to resale

        // nft.price = resaleEvent.
        // set date to new date
        nfts[nftIdx] = this.applyResaleCreationToNft(nft, resaleEvent);
        this.nftsSubject.next(nfts);
        this.newResaleCreationsSubject.next(resaleEvent);
      });

    this.contract.events.ResaleBid({})
      .on('data', (resaleBidEvent) => {
        // add resaleBid to bidsMap, just reusing existing bids system
        if (!this.bidsMap.get(resaleBidEvent.returnValues.tokenId)) {
          this.bidsMap.set(resaleBidEvent.returnValues.tokenId, [resaleBidEvent.returnValues.newBid]);
        } else {
          const arr = this.bidsMap.get(resaleBidEvent.returnValues.tokenId);
          arr.push(resaleBidEvent.returnValues.newBid);
          this.bidsMap.set(resaleBidEvent.returnValues.tokenId, arr);
        }
        this.bidsMapSubject.next(this.bidsMap);
        this.newBidsSubject.next(resaleBidEvent);
      });

    this.contract.events.ResaleRetrieve({})
      .on('data', (resaleBidEvent) => {
        // same as sale retrieve
        const nft = this.getNftById(Number(resaleBidEvent.returnValues.tokenID));
        const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(resaleBidEvent.returnValues.tokenID));
        const nfts = this.nftsSubject.getValue();
        nft.owner = resaleBidEvent.returnValues.UserAddress.toLowerCase() === this.selectedAddress;
        nft.ownerAddress = resaleBidEvent.returnValues.UserAddress;
        nfts[nftIdx] = nft;
        this.nftsSubject.next(nfts);
      });
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

  getNftById$(tokenId: number): Observable<GeoNFT> {
    return this.nfts$.pipe(map(nfts => nfts.find(x => x.id === tokenId)));
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
        highestBid: null,
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
    this.listenToTransaction(result);
  }

  resaleNft(price: string, tokenId: string, daysAfter = 1): void {
    // TODO: return transaction, push to resales events stream
    const result = this.contract.methods
      .putTokenForResale(price, tokenId, daysAfter)
      .send({ from: this.selectedAddress });
    console.log(result);
    this.listenToTransaction(result);
    // return this.contract.methods.putTokenForResale(price, tokenId, daysAfter).call({ from: this.selectedAddress });
  }

  private loadPassedEvents(): Promise<void> {
    return Promise.all([
      this.contract.getPastEvents('NFTCreation', { fromBlock: this.blockNumber }),
      this.contract.getPastEvents('NFTBid', { fromBlock: this.blockNumber }),
    ])
      .then(([nftCreationEvents, nftBidsEvents]: [NFTCreationEvent[], NftBidEvent[]]) => {
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
        return Promise.all(nftCreationEvents.map((nftCreationEvent => this.mapNFTCreationEventToGeoNFT(nftCreationEvent))));
      })
      .then(async (nfts: GeoNFT[]) => {
        // assign resales as bids here
        const mappedNfts = nfts;
        const resaleEvents = await Promise.all([
          this.contract.getPastEvents('NFTCreation', { fromBlock: this.blockNumber }),
          this.contract.getPastEvents('NFTBid', { fromBlock: this.blockNumber }),
          this.contract.getPastEvents('ResaleCreation', { fromBlock: this.blockNumber }),
          this.contract.getPastEvents('ResaleBid', { fromBlock: this.blockNumber }),
          this.contract.getPastEvents('ResaleRetrieve', { fromBlock: this.blockNumber }),
        ]);
        console.log('apply modifiers for events', resaleEvents);
        const nftCreations = resaleEvents[0] as NFTCreationEvent[];
        nftCreations.forEach(() => {

        });
        const nftBids = resaleEvents[1] as NftBidEvent[];
        const resaleCreations = resaleEvents[2] as ResaleCreation[];
        const resaleBids = resaleEvents[3] as ResaleBidEvent[];
        resaleCreations.forEach((resaleCreation) => {
          const nftId = resaleCreation.returnValues.tokenID;
          const nft = mappedNfts.find(x => String(x.id) === nftId);
          const nftIdx = mappedNfts.findIndex(x => String(x.id) === nftId);

          mappedNfts[nftIdx] = this.applyResaleCreationToNft(nft, resaleCreation);
        });
        // const resaleRetrieve = resaleEvents[2] as ResaleRetir
        this.nftsSubject.next(mappedNfts);
        // this.startNFTWatch();
      })
      .catch(e => {
        console.error(e);
      });
  }

  // as we're scanning whole history of contract events, "appliers" are desired way to load only newest state of nfts to RAM memory
  // limiting this resource usage by browser. Historical data should be lost or applied to GeoNFT entity in minimal way if needed on view

  // appliers can be used also on new events. Check which tokenID has an event, find GeoNFT and process it by respective to event applier
  // TODO:  refactor code to use that approach with all of events

  private async applyNftCreation(nftList: GeoNFT[], nftEvent: NFTCreationEvent): Promise<GeoNFT[]> {
    const geoNft = await this.mapNFTCreationEventToGeoNFT(nftEvent);
    nftList.push(geoNft);
    return nftList;
  }

  private applyNftBid(nft: GeoNFT, nftCreation: NftBidEvent): GeoNFT {
    // set BidInfo if not exist or exists with lower value
    if (nft.bidInfo && Number(nft.bidInfo.highestBid) > Number(nftCreation.returnValues.newBid.highestBid)) {
      nft.bidInfo = nftCreation.returnValues.newBid;
    } else {
      nft.bidInfo = nftCreation.returnValues.newBid;
    }
    return nft;
  }

  private applySaleRetrieve(nft: GeoNFT, saleRetrieveEvent: SaleRetrieveEvent): GeoNFT {
    // if (nft.)
    nft.owner = saleRetrieveEvent.returnValues.UserAddress.toLowerCase() === this.selectedAddress;
    nft.ownerAddress = saleRetrieveEvent.returnValues.UserAddress;
    return nft;

  }

  private applyResaleCreationToNft(nft: GeoNFT, resaleCreation: ResaleCreation): GeoNFT {
    nft.status = SoldStatus.RESALE;
    // set price to new price
    nft.price = resaleCreation.returnValues.Info.resalePrice;
    nft.saleTime = this.epochToDate(resaleCreation.returnValues.Info.resaleTime);
    return nft;
  }

  private applyResaleBidToNft(nft: GeoNFT, resaleBidEvent: ResaleBidEvent): GeoNFT {
    // set price to new price, set latest bidInfo to new bid
    nft.price = resaleBidEvent.returnValues.latestInfo.resalePrice;
    nft.bidInfo = {
      bidderAddress: resaleBidEvent.returnValues.latestInfo.bidderAddress,
      highestBid: resaleBidEvent.returnValues.latestInfo.highestBid
    };
    return nft;
  }

  private applyResaleRetrieveToNft(nft: GeoNFT, resaleRetrieve: ResaleRetrieve): GeoNFT {
    // change owner to new owner, change status to "OWNED"
    nft.owner = resaleRetrieve.returnValues.previousOwner.toLowerCase() === this.selectedAddress.toLowerCase();
    nft.status = SoldStatus.OWNED;
    return nft;
  }


  getOwnedNFTs$(): Observable<GeoNFT[]> {
    return this.nfts$.pipe(
      map(
        (nfts: GeoNFT[]) => {
          return nfts.filter(nft => {
            return nft.owner;
          });
        })
    );
  }

  refresh(): void {
    console.log('refreshing list');
    this.nftsSubject.next(this.nftsSubject.getValue());
  }


  private async mapNFTCreationEventToGeoNFT(nftCreation: NFTCreationEvent): Promise<GeoNFT> {
    return new Promise(async (resolve, reject) => {
      try {
        const image = await this.getSvg(Number(nftCreation.returnValues.tokenID));
        const owner = await this.ownerOf(Number(nftCreation.returnValues.tokenID));
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
    // TODO: treat error as lack of owner
    return new Promise((resolve) => {
      this.contract.methods
        .ownerOf(tokenId)
        .call({ from: this.selectedAddress })
        .then((result) => {
          resolve(result);
        })
        .catch(e => {
          resolve(null);
        });
    });
  }

  getNftsWithMyBids$(): Observable<GeoNFT[]> {
    const subject = new BehaviorSubject<GeoNFT[]>([]);
    this.nftsOnSale$.pipe(
      filter(nfts => nfts.length > 0),
      withLatestFrom(this.bidsMap$.pipe(filter(x => x.size > 0))),
      map(([nfts, bidsMap]: [GeoNFT[], Map<string, BidInfo[]>]) => {
        const nftIds: string[] = [];
        bidsMap.forEach((bid: BidInfo[], key: string) => {
          if (bid.find(x => x.bidderAddress.toLowerCase() === this.selectedAddress.toLowerCase())) {
            nftIds.push(key);
          }
        });
        return nftIds.map(nftId => nfts.find(x => String(x.id) === nftId));
      }),
    ).subscribe((nfts: GeoNFT[]) => {
      subject.next(nfts.filter(x => !!x).filter(x => !x.owner));
    });


    this.newBids$.subscribe((newBidEvent) => {
      if (newBidEvent.returnValues.newBid.bidderAddress.toLowerCase() === this.selectedAddress) {

        const newArr = subject.getValue().concat(this.getNftById(Number(newBidEvent.returnValues.tokenId)));
        const filteredArr = [...new Map(newArr.map(item =>
          [item.id, item])).values()];
        subject.next(filteredArr);
      }
    });
    return subject.asObservable();

  }

  getNftsToRetrieve$(): Observable<GeoNFT[]> {
    const subject = new BehaviorSubject<GeoNFT[]>([]);

    this.nftsOutdated$.pipe(
      tap(x => console.log('scanning outdated nfts', x)),
      filter(nfts => nfts.length > 0),
      withLatestFrom(this.bidsMap$.pipe(filter(x => x.size > 0))),
      map(([nfts, bidsMap]: [GeoNFT[], Map<string, BidInfo[]>]) => {
        // TODO: not founds highest bid
        const nftIds: string[] = [];
        bidsMap.forEach((bid: BidInfo[], key: string) => {
          const highestBid = bid.reduce((prev, current) => {
            return (Number(prev.highestBid) > Number(current.highestBid)) ? prev : current;
          }); // returns object
          if (highestBid.bidderAddress.toLowerCase() === this.selectedAddress.toLowerCase()) {
            nftIds.push(key);
          }
        });
        return nftIds.map(nftId => nfts.find(x => String(x.id) === nftId));
      })
    ).subscribe((nfts: GeoNFT[]) => {
      subject.next(nfts.filter(nft => !!(nft)).filter(nft => nft.saleTime.getTime() < Date.now()).filter(nft => !nft.owner));
    });


    this.newBids$.subscribe((newBidEvent) => {
      if (newBidEvent.returnValues.newBid.bidderAddress.toLowerCase() === this.selectedAddress) {

        const newArr = subject.getValue().concat(this.getNftById(Number(newBidEvent.returnValues.tokenId)));
        const filteredArr = [...new Map(newArr.map(item =>
          [item.id, item])).values()];
        subject.next(filteredArr.filter(nft => nft.saleTime.getTime() < Date.now()).filter(nft => !nft.owner));
      }
    });
    return subject.asObservable();

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

  retrieveNFTs(tokenIds: string[]): void {
    console.log('retrieve', tokenIds);
    const transaction = this.contract.methods.RetrieveNFT(tokenIds).send({ from: this.selectedAddress });
    this.listenToTransaction(transaction);
  }

  listenToTransaction(transaction): void {
    transaction
      .on('transactionHash', (hash: string) => {
        console.log(
          'Transaction sent successfully. Check console for Transaction hash'
        );
        this.transactionsSubject.next({
          txid: hash
        });
        console.log('Transaction Hash is ', hash);
      })
      .on('error', (error) => {
        this.transactionsSubject.error(error);
      })
      .once('confirmation', (confirmationNumber, receipt) => {
        if (receipt.status) {
          console.log('Transaction processed successfully', receipt);
          // find this nft in loaded nfts
          //           const buyedNft = this.ownedNFTsSubject.getValue().find(x => x.id === tokenId);
          //           this.ownedNFTsSubject.next(
          //             this.ownedNFTsSubject.getValue().concat(buyedNft)
          //           );
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
