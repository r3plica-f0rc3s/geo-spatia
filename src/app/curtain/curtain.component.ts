import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



declare var VANTA;

@Component({
  selector: 'app-curtain',
  templateUrl: './curtain.component.html',
  styleUrls: ['./curtain.component.scss'],
  animations: [
    trigger('disableButton', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '20px' })),
      transition('false <=> true', animate('500ms cubic-bezier(0.32,0,1,1)')),
    ]),
  ],
})
export class CurtainComponent implements OnInit {
  @Output()
  connectToMetamask = new EventEmitter();
  @Input()
  loading = false;
  constructor() {}

  ngOnInit() {
    VANTA.GLOBE({
      el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x7f3bb1
 })
  }

  connect() {
    this.connectToMetamask.next();
  }
}
