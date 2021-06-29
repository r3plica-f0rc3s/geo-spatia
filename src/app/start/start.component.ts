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
  @Output()
  changeSlide = new EventEmitter();
  constructor(
    private contractService: ContractService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}
  async connect() {
    try {
      await this.contractService.init();
      this.router.navigate(['/', 'nearby'])
      this.changeSlide.next();
      // convert nfts to imagemarkers
    } catch (error) {
      this.snackBar.open(error, 'Dismiss', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['snackbar-error'],
      });
      console.error(error);
    }
  }
}
