import { LngLat } from 'mapbox-gl';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ContractService, GeoNFT, SoldStatus } from 'src/app/services/contract.service';

export interface EmptyNft {
  location: LngLat;
  name: string;
}

@Component({
  selector: 'app-nft-grid-item',
  templateUrl: './nft-grid-item.component.html',
  styleUrls: ['./nft-grid-item.component.scss'],
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
  constructor(private contractService: ContractService) { }
  ngOnInit(): void {

    this.subscriptions.push(
      timer(1000, 1000).subscribe(() => {
        if (this.timeLeft && this.nft) {
          this.timeLeft = new Date(this.timeLeft.getTime() - 1000);
          // const saleTime = this.nft.resaleId ? this.nft.resaleTime : this.nft.saleTime;
          const creationTime = this.nft.status === SoldStatus.RESALE ? this.nft.resaleTime : this.nft.creationTime;
          const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
          this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - creationTime.getTime())) * 100);
        }
      })
    );
    this.subscriptions.push(this.contractService.getNftById$(this.nftId).subscribe((nft) => {
      this.nft = nft;
      console.log('rendering grid item', this.nft);
      if (this.nft.saleTime.getTime() < Date.now()) {
        this.timeLeft = null;
      } else {
        this.timeLeft = new Date(Math.max(this.nft.saleTime.getTime() - Date.now(), 0));
      }
      const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
      this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
    }));

  }


  calculateTimeLeft(): void {

    if (this.timeLeft) {
      this.subscriptions.push(
        timer(1000, 1000).subscribe(() => {
          if (this.timeLeft) {
            this.timeLeft = new Date(this.timeLeft.getTime() - 1000);
            const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
            this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
          }
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
