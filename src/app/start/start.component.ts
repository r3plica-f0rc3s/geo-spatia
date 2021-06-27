import { ContractService } from './../services/contract.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeolocationService } from '../services/geolocation-service.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(
    private locationService: GeolocationService,
    private router: Router,
    private contractService: ContractService
  ) {}

  ngOnInit(): void {}

  connect(): void {
    this.contractService.init();
  }
}
