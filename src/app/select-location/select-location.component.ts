import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LngLat } from 'mapbox-gl';

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

  constructor(private router: Router) {
    this.label = this.router.getCurrentNavigation().extras.state.label;
  }
  ngOnInit(): void {
  }

  submitLocation(): void {
    if (this.selectedLocation) {

    }
  }

}
