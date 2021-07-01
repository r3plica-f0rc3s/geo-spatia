import { MapHelperService } from './../services/map-helper.service';
import { ContractService } from './../services/contract.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GeolocationService } from '../services/geolocation-service.service';
import { UxService } from '../services/ux.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  constructor(

  ) {}

  ngOnInit(): void {}

}
