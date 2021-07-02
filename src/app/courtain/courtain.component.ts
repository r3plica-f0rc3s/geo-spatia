import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courtain',
  templateUrl: './courtain.component.html',
  styleUrls: ['./courtain.component.scss'],
  animations: [
    trigger('disableButton', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '20px' })),
      transition('false <=> true', animate('500ms cubic-bezier(0.32,0,1,1)')),
    ]),
  ],
})
export class CourtainComponent implements OnInit {
  @Output()
  connectToMetamask = new EventEmitter();
  @Input()
  loading = false;
  constructor() {}

  ngOnInit() {}

  connect() {
    this.connectToMetamask.next();
  }
}
