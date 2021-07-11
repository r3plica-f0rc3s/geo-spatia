import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

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
  image: SafeHtml;
  @Input()
  state: NftUxState;
  NftUxState = NftUxState;
  @Input()
  focused: boolean; // sets width and height +24px
  constructor() { }

  ngOnInit(): void {
  }

}
