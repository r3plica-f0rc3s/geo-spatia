import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
@Component({
  selector: 'app-nft-bought',
  templateUrl: './nft-bought.component.html',
  styleUrls: ['./nft-bought.component.scss'],
  animations: [
    trigger('disableButton', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '20px' })),
      transition('false <=> true', animate('500ms cubic-bezier(0.32,0,1,1)')),
    ]),
  ],
})
export class NftBoughtComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
