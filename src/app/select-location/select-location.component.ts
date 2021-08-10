import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LngLat } from 'mapbox-gl';
import { MapHelperService } from '../services/map-helper.service';
import { UxService } from '../services/ux.service';

export interface LocationSelectorState {
  label: string;
  moveTo: string;
  withState: any;
}

@Component({
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {
  label: string;
  selectedLocation: LngLat;

  constructor(
    private router: Router,
    private mapHelperService: MapHelperService,
    private uxService: UxService) {
    this.label = this.router.getCurrentNavigation().extras.state.label;
  }
  ngOnInit(): void {
    this.mapHelperService.setSelectMode();
    this.uxService.disableLeftSidenav();
    this.uxService.disableSidenav();
  }

  submitLocation(): void {
    if (this.selectedLocation) {

    }
  }

}
