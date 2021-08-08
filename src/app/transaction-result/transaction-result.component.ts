import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-transaction-result',
  templateUrl: './transaction-result.component.html',
  styleUrls: ['./transaction-result.component.scss'],
  animations: [
    trigger('disableButton', [
      state('true', style({ width: '*' })),
      state('false', style({ width: '20px' })),
      transition('false <=> true', animate('500ms cubic-bezier(0.32,0,1,1)')),
    ]),
  ],
})
export class TransactionResultComponent implements OnInit {
  success = this.router.getCurrentNavigation().extras.state.success;
  closable = this.router.getCurrentNavigation().extras.state.closable;
  constructor(
    private router: Router,
    private location: Location
    ) {}

  ngOnInit(): void {
  }

  close(): void {
    console.log('close invoked');
    if (this.success && this.closable) {
      console.log('navigating to all-nfts');
      this.router.navigate(['/', 'all-nfts']);
    } else {
      this.location.back();
    }
  }
}
