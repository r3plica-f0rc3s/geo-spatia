import { Component, Input, OnInit } from '@angular/core';
import { GeoNFT } from 'src/app/services/contract.service';

@Component({
  selector: 'app-nft-list-item',
  templateUrl: './nft-list-item.component.html',
  styleUrls: ['./nft-list-item.component.scss']
})
export class NftListItemComponent implements OnInit {
  @Input()
  nft: GeoNFT;
  constructor() { }

  ngOnInit(): void {
  }

}
