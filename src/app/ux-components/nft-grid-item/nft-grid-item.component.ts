import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BidInfo, BidViewModel, ContractService, GeoNFT, SoldStatus } from 'src/app/services/contract.service';

@Component({
  selector: 'app-nft-grid-item',
  templateUrl: './nft-grid-item.component.html',
  styleUrls: ['./nft-grid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NftGridItemComponent implements OnInit, OnDestroy {
  @Input()
  nftId: number;
  @Input()
  small = false;
  nft: GeoNFT;

  timeLeft: Date;
  subscriptions = [];
  endedPercent: number;
  SoldStatus = SoldStatus;
  Math = Math;
  bidsViewModel: BidViewModel;
  constructor(private contractService: ContractService, private changeDetector: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.subscriptions.push(this.contractService.getNftById$(this.nftId).subscribe((nft) => {
      this.nft = nft;
      this.changeDetector.detectChanges();
    }));

    this.subscriptions.push(
      this.contractService.getNFTBids$(String(this.nftId))
        .subscribe((bids: BidInfo[]) => {
          console.log('nft', this.nft, 'bids', bids);
          this.processBids(bids);
          this.calculateTimeLeft();
        })
    );
  }

  processBids(bids: BidInfo[]): void {
    this.bidsViewModel = this.contractService.normalizeBids(bids);
    this.changeDetector.detectChanges();
  }

  calculateTimeLeft(): void {
    if (this.nft.saleTime.getTime() < Date.now()) {
      this.timeLeft = null;
    } else {
      this.timeLeft = new Date(Math.max(this.nft.saleTime.getTime() - Date.now(), 0));
    }
    if (this.timeLeft) {
      this.subscriptions.push(
        timer(1000, 1000).subscribe(() => {
          if (this.timeLeft) {
            this.timeLeft = new Date(this.timeLeft.getTime() - 1000);
            const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
            this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
            this.changeDetector.detectChanges();
          }
        })
      );
    }

  }

  openNft() {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

}
