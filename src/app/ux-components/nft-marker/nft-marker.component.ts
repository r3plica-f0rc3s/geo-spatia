import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { GeoNFT, SoldStatus } from 'src/app/services/contract.service';

export enum NftUxState {
  AVAILABLE, OWNEDBYME, OWNEDBYSOMEBODY
}

@Component({
  selector: 'app-nft-marker',
  templateUrl: './nft-marker.component.html',
  styleUrls: ['./nft-marker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NftMarkerComponent implements OnInit {
  @Input()
  nft: GeoNFT;
  @Input()
  focused: boolean;
  SoldStatus = SoldStatus;
  constructor() { }

  ngOnInit(): void {
    console.log('nft param', this.nft);
  }

}
