import { ContractService } from './../services/contract.service';
import { MapHelperService } from './../services/map-helper.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeoNFT, NFTsService } from '../services/NFTs.service';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
  animations: [
    trigger('disableButton', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '20px' })),
      transition('false <=> true', animate('500ms cubic-bezier(0.32,0,1,1)')),
    ]),
  ],
})
export class ConfirmOrderComponent implements OnInit {
  @Output()
  buyNft = new EventEmitter();
  public nft: GeoNFT;
  constructor(
    private NFTsService: NFTsService,
    private activatedRoute: ActivatedRoute,
    private mapHelperService: MapHelperService,
    private router: Router,
    private contractService: ContractService
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      withLatestFrom(this.contractService.nfts$)
    ).subscribe(([param, nfts]) => {
      this.nft = nfts.find((x) => x.name === param.name);
      if (!this.nft) {
        this.router.navigate(['/', 'nearby'])
      }
      // this.mapHelperService.setSingleMarker({
      //   image: this.nft.image,
      //   coordinates: this.nft.location
      // });
    });
  }

  buyNFT(): void {
    this.contractService.buyNFT(this.nft.name, 1).then(() => {

    })
    this.buyNft.next();
    this.router.navigate(['nft-bought']);

  }

}

