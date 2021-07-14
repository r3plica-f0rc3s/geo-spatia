import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { GeoNFT } from 'src/app/services/contract.service';

@Component({
  selector: 'app-nft-list-item',
  templateUrl: './nft-list-item.component.html',
  styleUrls: ['./nft-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NftListItemComponent implements OnInit, OnDestroy {
  @Input()
  nft: GeoNFT;
  timeLeft: number;
  subscriptions = [];
  endedPercent: number;
  Math = Math;
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.timeLeft = this.nft.saleTime.getTime() - Date.now();
    this.subscriptions.push(timer(1000, 1000).subscribe(() => {
      this.timeLeft = this.timeLeft - 1000;
      const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
      this.endedPercent = ( 100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
      this.changeDetector.detectChanges();
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
