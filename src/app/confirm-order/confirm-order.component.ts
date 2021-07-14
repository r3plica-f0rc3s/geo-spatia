import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { ContractService, GeoNFT, TransactionResultEvent } from './../services/contract.service';
import { MapHelperService } from './../services/map-helper.service';
@Component({
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
})
export class ConfirmOrderComponent implements OnInit, OnDestroy {
  timeLeft: number;
  Math = Math;
  public nft: GeoNFT;
  subscriptions: Subscription[] = [];
  buying = false;
  newBid = -1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public contractService: ContractService,
    private mapHelperService: MapHelperService
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
      })
    );

    this.timeLeft = this.nft.saleTime.getTime() - Date.now();
    this.subscriptions.push(timer(1000, 1000).subscribe(() => {
      this.timeLeft = this.timeLeft - 1000;
    }));
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

