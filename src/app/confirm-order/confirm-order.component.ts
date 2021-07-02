import { ContractService } from './../services/contract.service';
import { MapHelperService } from './../services/map-helper.service';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      // display buyed modal
    })
  }
}

