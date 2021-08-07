import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ContractService, GeoNFT, SoldStatus, TransactionResultEvent } from '../services/contract.service';
import { MapHelperService } from '../services/map-helper.service';

@Component({
  templateUrl: './resale-nfts.component.html',
  styleUrls: ['./resale-nfts.component.scss']
})
export class ResaleNftsComponent implements OnInit, OnDestroy {
  // resaleForm = {
  //   resalePrice: 0,
  //   resaleDate: new Date(Date.now())
  // };
  resaleForm = this.formBuilder.group({
    resalePrice: ['', Validators.required],
    resaleDate: ['', Validators.required],
  });
  resaling = false;
  subscriptions: Subscription[] = [];
  SoldStatus = SoldStatus;
  newBid = -1;
  minPrice = 0;
  public nft: GeoNFT;
  highestBid: string;
  endedPercent: number;
  latestBidIsOwn: boolean;
  timeLeft: Date;
  Math = Math;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mapHelperService: MapHelperService,
    public contractService: ContractService,
    private router: Router,
    private formBuilder: FormBuilder
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
        this.minPrice = this.getMinPrice();
        this.mapHelperService.setSingleMarker(nft);
        this.calculateTimeLeft();
        this.latestBidIsOwn = nft.bidInfo && nft.bidInfo.bidderAddress.toLowerCase() === this.contractService.selectedAddress.toLowerCase();

      })
    );
  }



  calculateTimeLeft(): void {
    if (Math.max(this.nft.saleTime.getTime() - Date.now(), 0) === 0) {
      this.timeLeft = null;
    } else {
      this.timeLeft = new Date(Math.max(this.nft.saleTime.getTime() - Date.now(), 0));
    }
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

  getMinPrice(): number {
    if (!this.nft) {
      return null;
    }
    const price = this.nft.bidInfo ? (this.nft.bidInfo.highestBid ) : (this.nft?.price);
    return Number(this.contractService.weiToOne(price));
  }

  resalePriceChanged(newPrice): void {
    // this.resaleForm.resalePrice = newPrice;
    this.newBid = newPrice;
  }

  // resaleDateSelected($event): void {
  //   this.resaleForm.resaleDate = $event;
  // }

  submitResale(): void {
    // this.contractService.resaleNft(
    //   this.contractService.oneToWei(String(this.resaleForm.resalePrice)),
    //   String(this.nft.id), this.resaleForm.resaleDate.getTime());
    // // listen to transactions$ to change view
    // this.handleTransaction();
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
