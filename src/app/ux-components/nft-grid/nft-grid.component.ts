import { Component, Input, OnInit } from '@angular/core';
import { ContractService, GeoNFT } from 'src/app/services/contract.service';

@Component({
  selector: 'app-nft-grid',
  templateUrl: './nft-grid.component.html',
  styleUrls: ['./nft-grid.component.scss']
})
export class NftGridComponent implements OnInit {
  @Input()
  nfts: GeoNFT[];
  constructor() { }

  ngOnInit(): void {
  }

  openNft() {}
}
