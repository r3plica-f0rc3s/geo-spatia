import { ContractService, NFT } from './../services/contract.service';
import { GeoNFT } from './../services/NFTs.service';
import { UxService } from './../services/ux.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NFTsService } from '../services/NFTs.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nft-list',
  templateUrl: './nft-list.component.html',
  styleUrls: ['./nft-list.component.scss']
})
export class NftListComponent implements OnInit, OnDestroy {
  nfts: GeoNFT[] = [];
  subscriptions = [];
  constructor(
    private contractService: ContractService,
    private uxService: UxService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(this.contractService.nfts$
      .subscribe((nfts) => {
        this.nfts = nfts;
      }));
    }

    confirmOrder(i: number) {
      this.uxService.closeSidenav();
      this.router.navigate(['confirm-order', this.nfts[i].name]);
    }

    ngOnDestroy(): void {
      this.subscriptions.forEach((sub: Subscription) => {
        sub.unsubscribe();
      });
    }
}
