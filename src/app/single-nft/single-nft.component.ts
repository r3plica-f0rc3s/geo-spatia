import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { ContractService, GeoNFT, TransactionResultEvent } from '../services/contract.service';
import { MapHelperService } from '../services/map-helper.service';
@Component({
  templateUrl: './single-nft.component.html',
  styleUrls: ['./single-nft.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleNftComponent implements OnInit, OnDestroy {
  timeLeft: Date;
  Math = Math;
  public nft: GeoNFT;
  subscriptions: Subscription[] = [];
  buying = false;
  highestBid: string;
  endedPercent: number;
  latestBidIsOwn: boolean;
  newBid = -1;
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
        withLatestFrom(this.contractService.nfts$)
      ).subscribe(([param, nfts]) => {

        this.nft = nfts.find((x) => Number(x.id) === Number(param.id));
        if (!this.nft) {
          this.router.navigate(['/', 'all-nfts']);
          return;
        }
        this.mapHelperService.setSingleMarker(this.nft);
        this.calculateTimeLeft();
        this.highestBid = null;
        if (Number(this.nft.bidInfo.highestBid) > Number(this.nft.price)) {
          this.highestBid = String(this.nft.bidInfo.highestBid);
          this.latestBidIsOwn = this.contractService.selectedAddress.toLowerCase() === this.nft.bidInfo.bidderAddress.toLowerCase();
        }
        this.changeDetector.detectChanges();
      })
    );


  }

  calculateTimeLeft(): void {
    if (Math.max(this.nft.saleTime.getTime() - Date.now(), 0) === 0) {
      this.timeLeft = null;
    } else {
      this.timeLeft = new Date(Math.max(this.nft.saleTime.getTime() - Date.now(), 0));
    }
    if (this.timeLeft) {
      this.subscriptions.push(
        timer(1000, 1000).subscribe(() => {
          this.timeLeft = new Date(this.timeLeft.getTime() - 1000);
          const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
          this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
          this.changeDetector.detectChanges();
        })
        );
    }
  }

  submitBid(): void {
    this.contractService.bidNFT(this.nft.id, this.contractService.oneToWei(String(this.newBid)));
    this.buying = true;
    this.subscriptions.push(
      this.contractService.transactions$.subscribe((transactionEvent: TransactionResultEvent) => {
        if (transactionEvent && transactionEvent.success !== undefined) {
          this.router.navigate(['/', 'transaction-result'], { state: transactionEvent});
        }
      })
    );

  }

  getMinPrice(wei: string): number {
    return Number(this.contractService.weiToOne(wei));
  }

  bidChanged(newBid: number): void {
    this.newBid = newBid;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}

