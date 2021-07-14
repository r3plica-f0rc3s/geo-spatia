import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContractService, GeoNFT } from '../services/contract.service';

@Component({
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit, OnDestroy {
  subscriptions = [];
  nft: GeoNFT;
  buying = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contractService: ContractService
  ) { }
  ngOnInit(): void {
    this.subscriptions.push(this.activatedRoute.params.subscribe((params: Params) => {
      const tokenId = params.id;
      const nft = this.contractService.getNftById(tokenId);

      console.log('load', tokenId);
    }));
  }

  placeOrder() {

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

}
