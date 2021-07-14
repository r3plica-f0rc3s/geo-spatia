import { Component, Input, OnInit } from '@angular/core';
import { GeoNFT } from 'src/app/services/contract.service';

@Component({
  selector: 'app-nft-grid',
  templateUrl: './nft-grid.component.html',
  styleUrls: ['./nft-grid.component.scss']
})
export class NftGridComponent implements OnInit {
  @Input()
  nft: GeoNFT;
  constructor() { }

  ngOnInit(): void {
  }

  openNft() {}
}
