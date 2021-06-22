import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeoNFT, NFTsService } from '../services/NFTs.service';
@Component({
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
})
export class ConfirmOrderComponent implements OnInit {
  public nft: GeoNFT;
  constructor(
    private NFTsService: NFTsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.nft = this.NFTsService.NFTs.find((x) => x.name === param.name);
    });

  }
}
