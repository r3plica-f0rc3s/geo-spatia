import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeoNFT, NFTsService } from '../services/NFTs.service';
import { switchMap, withLatestFrom } from 'rxjs/operators';
@Component({
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
})
export class ConfirmOrderComponent implements OnInit {
  public nft: GeoNFT;
  constructor(
    private NFTsService: NFTsService,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      withLatestFrom(this.NFTsService.NFTs$)
    ).subscribe(([param, nfts]) => {
      this.nft = nfts.find((x) => x.name === param.name);
    });
  }
}

