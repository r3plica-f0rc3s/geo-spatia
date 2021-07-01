import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-courtain',
  templateUrl: './courtain.component.html',
  styleUrls: ['./courtain.component.scss'],
})
export class CourtainComponent implements OnInit {
  slideOut = timer(0, 5000);
  @Output()
  connectToMetamask = new EventEmitter();
  constructor(
  ) {}

  ngOnInit() {}

  connect() {
    this.connectToMetamask.next();
  }
}
