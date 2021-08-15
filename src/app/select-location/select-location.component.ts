import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LngLat } from 'mapbox-gl';
import { MapHelperService } from '../services/map-helper.service';
import { UxService } from '../services/ux.service';

export interface LocationSelectorState {
  label: string;
  moveTo: string;
  withState: any;
  selectedLocation: LngLat;
}

@Component({
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {
  label: string;
  selectedLocation: LngLat;
  navParams: LocationSelectorState;
  constructor(
    private router: Router,
    private mapHelperService: MapHelperService,
    private uxService: UxService) {
    this.navParams = this.router.getCurrentNavigation().extras.state as LocationSelectorState;
  }

  ngOnInit(): void {
    this.mapHelperService.setSelectMode();
    this.uxService.disableLeftSidenav();
    this.uxService.disableSidenav();

    this.mapHelperService.mapSelected$.subscribe((selected) => {

      this.router.navigateByUrl(this.navParams.moveTo, {
        state: { moveTo: this.navParams.moveTo, label: this.navParams.label, withState: this.navParams.withState, selectedLocation: selected } as LocationSelectorState
      });
    });
  }

}
