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
export class NftListComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  nfts: GeoNFT[] = [];
  subscriptions = [];
  constructor(
    private uxService: UxService,
    private router: Router,
    public contractService: ContractService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('rendering nfts list', this.nfts);
  }

  ngOnInit(): void {
    console.log('rendering nfts list', this.nfts);
  }

  confirmOrder(i: number): void {
    this.uxService.closeSidenav();
    this.router.navigate(['single-nft', this.nfts[i].id]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
