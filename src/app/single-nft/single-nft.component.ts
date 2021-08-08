import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ContractService, GeoNFT, SoldStatus, TransactionResultEvent } from '../services/contract.service';
import { MapHelperService } from '../services/map-helper.service';
@Component({
  templateUrl: './single-nft.component.html',
  styleUrls: ['./single-nft.component.scss'],
})
export class SingleNftComponent implements OnInit, OnDestroy {
  timeLeft: Date;
  Math = Math;
  public nft: GeoNFT;
  subscriptions: Subscription[] = [];
  SoldStatus = SoldStatus;
  buying = false;
  highestBid: string;
  endedPercent: number;
  latestBidIsOwn: boolean;
  resaling = false;
  newBid = -1;
  resalePrice = 0.1;
  minPrice = 0;
  resaleForm = {
    resalePrice: 0,
    resaleDate: new Date(Date.now())
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public contractService: ContractService,
    private mapHelperService: MapHelperService,
    private changeDetector: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.params.pipe(
        switchMap((param) => this.contractService.getNftById$(Number(param.id))),
        tap(x => console.log('nft', x))
      ).subscribe((nft: GeoNFT) => {

        this.nft = nft;
        if (!this.nft) {
          this.router.navigate(['/', 'all-nfts']);
          return;
        }
        console.log(nft);
        this.minPrice = this.getMinPrice();
        this.mapHelperService.setSingleMarker(nft);
        this.calculateTimeLeft();
        this.latestBidIsOwn = nft.bidInfo && nft.bidInfo.bidderAddress.toLowerCase() === this.contractService.selectedAddress.toLowerCase();

        this.changeDetector.detectChanges();
      })
    );


  }

  calculateTimeLeft(): void {
    console.log('single-nft sale time', this.nft.saleTime);
    if (Math.max(this.nft.saleTime.getTime() - Date.now(), 0) === 0) {
      this.timeLeft = null;
    } else {
      this.timeLeft = new Date(Math.max(this.nft.saleTime.getTime() - Date.now(), 0));
    }
    console.log(this.timeLeft);
    this.subscriptions.push(
      timer(1000, 1000).subscribe(() => {
        if (this.timeLeft) {
          this.timeLeft = new Date(this.timeLeft.getTime() - 1000);
          // const saleTime = this.nft.resaleId ? this.nft.resaleTime : this.nft.saleTime;
          const creationTime = this.nft.status === SoldStatus.RESALE ? this.nft.resaleTime : this.nft.creationTime;
          const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
          this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - creationTime.getTime())) * 100);
        }
      })
    );
  }

  submitBid(): void {
    console.log('new bid', this.newBid);
    if (this.nft.resaleId) {
      this.contractService.bidResale(this.nft.resaleId, String(this.nft.id), this.contractService.oneToWei(String(this.newBid)));
    } else {
      this.contractService.bidNFT(this.nft.id, this.contractService.oneToWei(String(this.newBid)));
    }
    this.buying = true;

    this.handleTransaction();

  }

  resalePriceChanged(newPrice): void {
    this.resaleForm.resalePrice = newPrice;
    this.newBid = newPrice;
  }

  resaleDateSelected($event): void {
    this.resaleForm.resaleDate = $event;
  }

  submitResale(): void {
    this.resaling = true;
    this.contractService.resaleNft(
      this.contractService.oneToWei(String(this.resaleForm.resalePrice)),
      String(this.nft.id), this.resaleForm.resaleDate.getTime());
    // listen to transactions$ to change view
    this.handleTransaction();
  }

  getMinPrice(): number {
    if (!this.nft) {
      return null;
    }
    const price = this.nft.bidInfo ? (this.nft.bidInfo.highestBid ) : (this.nft?.price);
    return Number(this.contractService.weiToOne(price));
  }

  bidChanged(newBid: number): void {
    this.newBid = newBid;
  }

  private handleTransaction(): void {
    this.subscriptions.push(
      this.contractService.transactions$.subscribe((transactionEvent: TransactionResultEvent) => {
        if (transactionEvent && transactionEvent.success !== undefined) {
          this.router.navigate(['/', 'transaction-result'], { state: { ...{ closable: true }, ...transactionEvent } });
        }
      }, (err) => {
        this.router.navigate(['/', 'transaction-result'], { state: { success: false, closable: true } });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}

