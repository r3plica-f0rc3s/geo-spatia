import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BidInfo, BidViewModel, ContractService, GeoNFT, SoldStatus } from 'src/app/services/contract.service';

@Component({
  selector: 'app-nft-list-item',
  templateUrl: './nft-list-item.component.html',
  styleUrls: ['./nft-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftListItemComponent implements OnInit, OnDestroy {
  @Input()
  nftId: number;
  nft: GeoNFT;
  timeLeft: Date;
  subscriptions = [];
  endedPercent: number;
  Math = Math;
  SoldStatus = SoldStatus;
  bidsViewModel: BidViewModel;
  passed = false;
  hasHighestBid = false;
  latestBidIsOwn = false;
  constructor(
    private changeDetector: ChangeDetectorRef,
    public contractService: ContractService
  ) { }

  ngOnInit(): void {
    // this.contractService.getNftById
    this.subscriptions.push(
      timer(1000, 1000).subscribe(() => {
        if (this.timeLeft && this.timeLeft.getTime() > 1000) {
          this.timeLeft = new Date(this.timeLeft.getTime() - 1000);
          const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
          this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
          this.changeDetector.detectChanges();
        } else {
          this.timePassed();
        }
      })
    );
    this.subscriptions.push(
      this.contractService.getNftById$(this.nftId).subscribe((nft) => {
        this.nft = nft;
        this.calculateTimeLeft();
        this.latestBidIsOwn = nft.bidInfo && nft.bidInfo.bidderAddress.toLowerCase() === this.contractService.selectedAddress.toLowerCase();
        this.changeDetector.detectChanges();
      })
    );

  }

  calculateTimeLeft(): void {
    if (this.nft.saleTime.getTime() < Date.now()) {
      this.timeLeft = null;
    } else {
      this.timeLeft = new Date(Math.max(this.nft.saleTime.getTime() - Date.now(), 0));
    }
    if (this.timeLeft) {

    }

  }

  isAddressOwn(address: string): boolean {
    if (!this.contractService.selectedAddress || !address) {
      return false;
    }
    return this.contractService.selectedAddress?.toLowerCase() === address.toLowerCase();
  }

  timePassed(): void {
    if (!this.passed) {
      this.passed = true;
      setTimeout(() => {
        this.contractService.refresh();
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
