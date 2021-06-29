import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ height: '0px' }),
        animate('100ms ease-out', style({ height: '40px' })),
      ]),
      transition(':leave', [
        style({ height: '40px' }),
        animate('100ms ease-out', style({ height: '0px' })),
      ]),
    ]),
  ],
  selector: 'app-courtain',
  templateUrl: './courtain.component.html',
  styleUrls: ['./courtain.component.scss'],
})
export class CourtainComponent implements OnInit {
  slideInOut = timer(0, 5000);

  constructor() {}

  ngOnInit() {}

  slideUp(slideInOut) {
    this.slideInOut;
  }
}
