import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { ContractService } from '../services/contract.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    private contractService: ContractService,

    private router: Router
  ) {}

  ngOnInit() {}

  async connect() {
    this.connectToMetamask.next();
  }
}
