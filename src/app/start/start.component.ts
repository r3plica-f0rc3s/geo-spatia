import { MapHelperService } from './../services/map-helper.service';
import { ContractService } from './../services/contract.service';
import { Component, OnInit } from '@angular/core';
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
    private contractService: ContractService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  openSnackBar() {
    this.snackBar.open('Unable to connect to metamask', 'Dismiss', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['snackbar-error']
    });
  }
  async connect() {
    try {
      await this.contractService.init();
      const nfts = await this.contractService.getAllNFTs();
      // convert nfts to imagemarkers
    } catch (error) {
      this.openSnackBar();
      console.error(error);
    }
  }
}
