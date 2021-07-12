import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { ContractService, GeoNFT, TransactionResultEvent } from './../services/contract.service';
import { MapHelperService } from './../services/map-helper.service';
@Component({
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
})
export class ConfirmOrderComponent implements OnInit, OnDestroy {
  public nft: GeoNFT;
  subscriptions: Subscription[] = [];
  buying = false;
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


  }

  buyNFT(): void {
    this.contractService.buyNFT(this.nft.id, this.nft.price);
    this.buying = true;
    this.subscriptions.push(
      this.contractService.transactions$.subscribe((transactionEvent: TransactionResultEvent) => {
        if (transactionEvent && transactionEvent.success !== undefined) {
          this.router.navigate(['/', 'transaction-result'], { state: transactionEvent});
        }
      })
    );

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}

