import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ContractService, GeoNFT } from 'src/app/services/contract.service';

@Component({
  selector: 'app-nft-list-item',
  templateUrl: './nft-list-item.component.html',
  styleUrls: ['./nft-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftListItemComponent implements OnInit, OnDestroy {
  @Input()
  nft: GeoNFT;
  timeLeft: Date;
  subscriptions = [];
  endedPercent: number;
  Math = Math;
  highestBid: string;
  latestBidIsOwn: boolean;
  constructor(
    private changeDetector: ChangeDetectorRef,
    private contractService: ContractService
  ) { }

  ngOnInit(): void {
    console.log('rendering nft', this.nft.saleTime.getTime() - Date.now());
    console.log(this.nft.saleTime.getTime() - Date.now());
    this.calculateTimeLeft();
    if (Number(this.nft.bidInfo.highestBid) > Number(this.nft.price)) {
      this.highestBid = String(this.nft.bidInfo.highestBid);
      this.latestBidIsOwn = this.contractService.selectedAddress.toLowerCase() === this.nft.bidInfo.bidderAddress.toLowerCase();
    }
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
