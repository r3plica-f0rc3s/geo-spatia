import { MapHelperService } from './../services/map-helper.service';
import { ContractService } from './../services/contract.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeolocationService } from '../services/geolocation-service.service';
import { UxService } from '../services/ux.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(
    private locationService: GeolocationService,
    private router: Router,
    private contractService: ContractService,
    private mapHelperService: MapHelperService,
    private uxService: UxService,
  ) {}

  ngOnInit(): void {}

  async connect() {
    await this.contractService.init();
    const nfts = await this.contractService.getAllNFTs();
    // convert nfts to imagemarkers
  }
}
