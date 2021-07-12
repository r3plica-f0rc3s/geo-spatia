import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('nft param', this.nft);
  }

  openNft(): void {
    this.router.navigate(['/', 'confirm-order', this.nft.id]);
  }

}
