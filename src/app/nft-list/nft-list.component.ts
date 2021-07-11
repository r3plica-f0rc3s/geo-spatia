import { ContractService, GeoNFT, NFT } from './../services/contract.service';
import { UxService } from './../services/ux.service';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nft-list',
  templateUrl: './nft-list.component.html',
  styleUrls: ['./nft-list.component.scss'],
})
export class NftListComponent implements OnInit, OnDestroy {
  @Input()
  nfts: GeoNFT[] = [];
  subscriptions = [];
  constructor(
    private uxService: UxService,
    private router: Router,
    public contractService: ContractService
  ) {}

  ngOnInit(): void {
  }

  confirmOrder(i: number) {
    this.uxService.closeSidenav();
    this.router.navigate(['confirm-order', this.nfts[i].id]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
