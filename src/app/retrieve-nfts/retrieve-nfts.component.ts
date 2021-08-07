import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ContractService, GeoNFT, TransactionResultEvent } from '../services/contract.service';
import { MapHelperService } from '../services/map-helper.service';
import { UxService } from '../services/ux.service';

@Component({
  templateUrl: './retrieve-nfts.component.html',
  styleUrls: ['./retrieve-nfts.component.scss']
})
export class RetrieveNftsComponent implements OnInit, OnDestroy {
  subscriptions = [];
  retrieving = false;
  nftsToRetrieve: GeoNFT[] = [];
  constructor(
    private contractService: ContractService,
    private mapHelperService: MapHelperService,
    private uxService: UxService,
    private router: Router) { }


  ngOnInit(): void {
    this.uxService.enableSidenav();
    this.uxService.enableLeftSidenav();
    this.subscriptions.push(
      this.contractService.getNftsToRetrieve$().pipe(filter(x => x.length > 0)).subscribe((nftsToRetrieve) => {
        this.mapHelperService.setMultipleMarkers(nftsToRetrieve);

        this.nftsToRetrieve = nftsToRetrieve;
        this.uxService.routeLock = true;
      })
    );

  }

  retrieve(): void {
    this.retrieving = true;
    if (this.nftsToRetrieve[0].resaleId) {
      this.contractService.retrieveResaleNFT(
        this.nftsToRetrieve.map(nft => String(nft.resaleId)), this.nftsToRetrieve.map(nft => String(nft.id)));

    } else {

      this.contractService.retrieveNFTs(this.nftsToRetrieve.map(nft => String(nft.id)));
    }
    this.subscriptions.push(
      this.contractService.transactions$.subscribe((transactionEvent: TransactionResultEvent) => {
        if (transactionEvent && transactionEvent.success !== undefined) {
          this.uxService.routeLock = false;
          this.router.navigate(['/', 'transaction-result'], { state: { ...{ closable: true }, ...transactionEvent } });
        }
      }, (err) => {
        this.router.navigate(['/', 'transaction-result'], { state: { success: false, closable: false } });
      })
    );

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

}
