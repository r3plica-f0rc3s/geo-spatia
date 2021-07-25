import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LngLat } from 'mapbox-gl';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import abi from './abi/ABI.json';
const Web3 = require('web3');

export enum SoldStatus {
  SOLD,
  AVAILABLE,
  OWNED,
  RESALE,
  AWAITING_TRANSFER
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
  resaleTime?: Date;
  creationTime?: Date;
  latestBidAddress?: string;
  hasUserBids?: boolean;
  resaleId?: string;
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
    tokenID: string;
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
    creationTime: string;
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
  contractAddress = '0xF66bF75491859A1d6fb60E6eb1890a02fea58D9d';
  blockNumber = 12703002;
  private loggedSubject = new BehaviorSubject<boolean>(false);
  logged$ = this.loggedSubject.asObservable();

  private walletInfoSubject = new BehaviorSubject<WalletInfo>(null);
  walletInfo$ = this.walletInfoSubject.asObservable();

  private errorSubject = new BehaviorSubject<string>('');
  error$ = this.errorSubject.asObservable();

  private nftsSubject = new BehaviorSubject<GeoNFT[]>([]);
  nfts$ = this.nftsSubject.asObservable().pipe(
    map(nfts => nfts.sort((a, b) => new Date(b.saleTime).getTime() - new Date(a.saleTime).getTime()),
  ));

  nftsOnSale$ = this.nftsSubject.asObservable().pipe(
    filter(x => !!x),
    map(nfts => {
      return nfts.filter(((nft) => {
        return nft.saleTime.getTime() > Date.now() && !nft.hasUserBids;
      }));
    }));
  nftNotSold$ = this.nftsSubject.asObservable().pipe(
    filter(x => !!x),
    map(nfts => {
      return nfts.filter(((nft) => {
        return nft.saleTime.getTime() > Date.now() && !(nft.ownerAddress);
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


  newNftsSubject = new Subject<NFTCreationEvent>();
  newNfts$ = this.newNftsSubject.asObservable();

  contract: any;
  currentWeb3: any;
  wallet: any;
  selectedAddress: string;

  initializing = false;
  applyNftProcessing: boolean;

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
      this.loggedSubject.next(true);
    } catch (error) {
      this.initializing = false;
      this.errorSubject.next(error);
      throw new Error(error);
    }
  }

  setEvents(): void {
    this.wallet.on('networkChanged', (networkId) => {
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
        // console.log('nft created', nft);
        this.loadWalletInfo();
        const nft = this.getNftById(Number(bidEvent.returnValues.tokenId));
        const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(bidEvent.returnValues.tokenId));
        const nfts = this.nftsSubject.getValue();
        // set status to resale
        // nft.price = resaleEvent.
        // set date to new date
        nfts[nftIdx] = this.applyNftBid(nft, bidEvent);
        this.nftsSubject.next(nfts);

      });

    this.contract.events.SaleRetrieve({})
      .on('data', (saleEvent: SaleRetrieveEvent) => {
        this.loadWalletInfo();
        const nft = this.getNftById(Number(saleEvent.returnValues.tokenID));
        const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(saleEvent.returnValues.tokenID));
        const nfts = this.nftsSubject.getValue();
        nft.owner = saleEvent.returnValues.UserAddress.toLowerCase() === this.selectedAddress;
        nft.ownerAddress = saleEvent.returnValues.UserAddress;
        // nft.bidInfo = null;
        nfts[nftIdx] = this.applySaleRetrieve(nft, saleEvent);
        nfts[nftIdx] = nft;
        this.nftsSubject.next(nfts);
      });

    this.contract.events.ResaleCreation({})
      .on('data', (resaleEvent: ResaleCreation) => {
        console.log('ResaleCreation', resaleEvent);
        const nft = this.getNftById(Number(resaleEvent.returnValues.tokenID));
        const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(resaleEvent.returnValues.tokenID));
        const nfts = this.nftsSubject.getValue();
        nfts[nftIdx] = this.applyResaleCreationToNft(nft, resaleEvent);
        this.nftsSubject.next(nfts);
      });

    this.contract.events.ResaleBid({})
      .on('data', (resaleBidEvent) => {
        this.loadWalletInfo();
        // add resaleBid to bidsMap, just reusing existing bids system
        console.log('ResaleBid', resaleBidEvent);
        const nft = this.getNftById(Number(resaleBidEvent.returnValues.tokenID));
        const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(resaleBidEvent.returnValues.tokenID));
        const nfts = this.nftsSubject.getValue();
        nfts[nftIdx] = this.applyResaleBidToNft(nft, resaleBidEvent);
        this.nftsSubject.next(nfts);
      });

    this.contract.events.ResaleRetrieve({})
      .on('data', (resaleRetrieveEvent) => {
        this.loadWalletInfo();
        // same as sale retrieve
        const nft = this.getNftById(Number(resaleRetrieveEvent.returnValues.tokenID));
        const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(resaleRetrieveEvent.returnValues.tokenID));
        const nfts = this.nftsSubject.getValue();

        nfts[nftIdx] = this.applyResaleRetrieveToNft(nft, resaleRetrieveEvent);
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
        }, (err) => reject(err));
    });
  }

  bidNFT(tokenId: number, amount: string): void {
    // TODO: make it observable
    const result = this.contract.methods
      .Bid(tokenId)
      .send({ from: this.selectedAddress, value: amount });

    this.listenToTransaction(result);
  }

  bidResale(resaleId: string, tokenId: string, amount: string): void {
    console.log('bidResale', resaleId, tokenId, amount);
    const transaction = this.contract.methods.bidResale(resaleId, tokenId).send({ from: this.selectedAddress, value: amount });
    this.listenToTransaction(transaction);
  }

  resaleNft(price: string, tokenId: string, resaleTime: number): void {
    // TODO: return transaction, push to resales events stream
    console.log('resale token', price, tokenId, 600);
    const result = this.contract.methods
      .putTokenForResale(price, tokenId, 600) // TODO: MOCKED 5mins!!
      .send({ from: this.selectedAddress });
    this.listenToTransaction(result);
  }

  private loadPassedEvents(): Promise<void> {
    return Promise.all([
      this.contract.getPastEvents('NFTCreation', { fromBlock: this.blockNumber }),
      this.contract.getPastEvents('NFTBid', { fromBlock: this.blockNumber }),
      this.contract.getPastEvents('ResaleCreation', { fromBlock: this.blockNumber }),
      this.contract.getPastEvents('ResaleBid', { fromBlock: this.blockNumber }),
      this.contract.getPastEvents('ResaleRetrieve', { fromBlock: this.blockNumber })
    ])
      .then(async ([
        nftCreations,
        nftBids,
        resaleCreations,
        resaleBids,
        resaleRetrieves
      ]: [NFTCreationEvent[], NftBidEvent[], ResaleCreation[], ResaleBidEvent[], ResaleRetrieve[]]) => {
        // assign resales as bids here
        let nftList = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < nftCreations.length; i++) {
          nftList = await this.applyNftCreation(nftList, nftCreations[i]);
        }
        nftBids.forEach((nftBid: NftBidEvent) => {
          const nftId = nftBid.returnValues.tokenId;
          const nft = nftList.find(x => String(x.id) === nftId);
          const nftIdx = nftList.findIndex(x => String(x.id) === nftId);

          nftList[nftIdx] = this.applyNftBid(nft, nftBid);
        });

        resaleCreations.forEach((resaleCreation: ResaleCreation) => {
          const nftId = resaleCreation.returnValues.tokenID;
          const nft = nftList.find(x => String(x.id) === nftId);
          const nftIdx = nftList.findIndex(x => String(x.id) === nftId);

          nftList[nftIdx] = this.applyResaleCreationToNft(nft, resaleCreation);
        });

        resaleBids.forEach((resaleBid: ResaleBidEvent) => {
          const nftId = resaleBid.returnValues.tokenID;
          const nft = nftList.find(x => String(x.id) === nftId);
          const nftIdx = nftList.findIndex(x => String(x.id) === nftId);

          nftList[nftIdx] = this.applyResaleBidToNft(nft, resaleBid);
        });

        resaleRetrieves.forEach((resaleRetrieve) => {
          const nftId = resaleRetrieve.returnValues.tokenID;
          const nft = nftList.find(x => String(x.id) === nftId);
          const nftIdx = nftList.findIndex(x => String(x.id) === nftId);

          nftList[nftIdx] = this.applyResaleRetrieveToNft(nft, resaleRetrieve);
        });
        // filter out nfts we can delete for sure

        nftList = this.cleanupNfts(nftList);
        // const resaleRetrieve = resaleEvents[2] as ResaleRetir
        this.nftsSubject.next(nftList);
        // this.startNFTWatch();
      })
      .catch(e => {
        console.error(e);
      });
  }

  private cleanupNfts(nfts: GeoNFT[]): GeoNFT[] {
    return nfts.filter((nft: GeoNFT) => {
      return !(!nft.bidInfo && nft.saleTime.getTime() < Date.now() && !nft.ownerAddress);
    });
  }

  // as we're scanning whole history of contract events, "appliers" are desired way to load only newest state of nfts to RAM memory
  // limiting this resource usage by browser. Historical data should be lost or applied to GeoNFT entity in minimal way if needed on view

  // appliers can be used also on new events. Check which tokenID has an event, find GeoNFT and process it by respective to event applier
  // TODO:  refactor code to use that approach with all of events

  private async applyNftCreation(nftList: GeoNFT[], nftEvent: NFTCreationEvent): Promise<GeoNFT[]> {
    if (this.applyNftProcessing) {
      return nftList;
    }
    this.applyNftProcessing = true;
    if (nftList.find(x => String(x.id) === nftEvent.returnValues.tokenID)) {
      return nftList;
    }
    const geoNft = await this.mapNFTCreationEventToGeoNFT(nftEvent);
    nftList.push(geoNft);
    this.applyNftProcessing = false;
    return nftList;
  }

  private applyNftBid(nft: GeoNFT, nftBid: NftBidEvent): GeoNFT {
    // set BidInfo if not exist or exists with lower value
    if (nftBid.returnValues.newBid.bidderAddress.toLowerCase() === this.selectedAddress.toLowerCase()) {
      nft.hasUserBids = true;
    }
    nft.bidInfo = nftBid.returnValues.newBid;

    return nft;
  }

  private applySaleRetrieve(nft: GeoNFT, saleRetrieveEvent: SaleRetrieveEvent): GeoNFT {
    // if (nft.)
    nft.owner = saleRetrieveEvent.returnValues.UserAddress.toLowerCase() === this.selectedAddress;
    nft.ownerAddress = saleRetrieveEvent.returnValues.UserAddress;
    nft.status = SoldStatus.OWNED;
    return nft;

  }

  private applyResaleCreationToNft(nft: GeoNFT, resaleCreation: ResaleCreation): GeoNFT {
    console.log('ResaleCreation', resaleCreation, Date.now());
    if (this.epochToDate(resaleCreation.returnValues.Info.resaleTime).getTime() > Date.now()) {
      nft.status = SoldStatus.RESALE;
      // set price to new price
      nft.bidInfo = null;
      nft.price = resaleCreation.returnValues.Info.resalePrice;
      // console.log('resaleCreation', this.epochToDate(resaleCreation.returnValues.Info.resaleTime));
      nft.saleTime = this.epochToDate(resaleCreation.returnValues.Info.resaleTime);
      nft.resaleTime = this.epochToDate(resaleCreation.returnValues.creationTime);
      nft.resaleId = resaleCreation.returnValues.resaleID;
    }
    return nft;
  }

  private applyResaleBidToNft(nft: GeoNFT, resaleBidEvent: ResaleBidEvent): GeoNFT {
    // set price to new price, set latest bidInfo to new bid
    nft.price = resaleBidEvent.returnValues.latestInfo.resalePrice;
    if (resaleBidEvent.returnValues.latestInfo.bidderAddress.toLowerCase() === this.selectedAddress.toLowerCase()) {
      nft.hasUserBids = true;
    }
    nft.bidInfo = {
      bidderAddress: resaleBidEvent.returnValues.latestInfo.bidderAddress,
      highestBid: resaleBidEvent.returnValues.latestInfo.highestBid
    };
    return nft;
  }

  private applyResaleRetrieveToNft(nft: GeoNFT, resaleRetrieve: ResaleRetrieve): GeoNFT {
    // change owner to new owner, change status to "OWNED"
    nft.owner = resaleRetrieve.returnValues.newOwner.toLowerCase() === this.selectedAddress.toLowerCase();
    nft.ownerAddress = resaleRetrieve.returnValues.newOwner;
    nft.status = nft.owner ? SoldStatus.OWNED : SoldStatus.SOLD;
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
    this.nftsSubject.next(this.cleanupNfts(this.nftsSubject.getValue()));
  }


  private async mapNFTCreationEventToGeoNFT(nftCreation: NFTCreationEvent): Promise<GeoNFT> {
    return new Promise(async (resolve, reject) => {
      try {
        const image = await this.getSvg(Number(nftCreation.returnValues.tokenID));
        const owner = await this.ownerOf(Number(nftCreation.returnValues.tokenID));
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
          price: nftCreation.returnValues.Info.price,
          image,
          status,
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
    return this.nftsSubject.pipe(
      map((nfts: GeoNFT[]) => {
        return nfts.filter(x => (x.status === SoldStatus.AVAILABLE || x.status === SoldStatus.RESALE) &&
          (x.saleTime.getTime() > Date.now()) && x.hasUserBids && !x.owner);
      })
    );

  }

  getNftsToRetrieve$(): Observable<GeoNFT[]> {
    return this.nfts$.pipe(
      map(nfts => nfts.filter(nft => nft.bidInfo && nft.bidInfo.bidderAddress.toLowerCase() === this.selectedAddress.toLowerCase() &&
        nft.saleTime.getTime() < Date.now() && !nft.owner)),
        tap(x => console.log('retrieve', x))
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

  retrieveNFTs(tokenIds: string[]): void {
    const transaction = this.contract.methods.RetrieveNFT(tokenIds).send({ from: this.selectedAddress });
    this.listenToTransaction(transaction);
  }


  /**
   * TODO: retrieve many NFTs at once
   * @param tokenId
   */
  retrieveResaleNFT(tokenId: string): void {
    const transaction = this.contract.methods.RetrieveReSale(tokenId).send({ from: this.selectedAddress });
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
        console.error(error);
        this.transactionsSubject.error(error);
      })
      .once('confirmation', async (confirmationNumber, receipt) => {
        if (receipt.status) {
          console.log('Transaction processed successfully', receipt);
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
        await this.loadWalletInfo();
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
    this.currentWeb3 = null;
    this.contract = null;
    this.selectedAddress = null;
    this.nftsSubject.next([]);
    this.ownedNFTsSubject.next([]);
    this.loggedSubject.next(false);
    window.localStorage.removeItem('wasStarted');

  }

}
