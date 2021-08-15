import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-empty-nft-svg',
  templateUrl: './empty-nft-svg.component.svg',
  styleUrls: ['./empty-nft-svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyNftSvgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
