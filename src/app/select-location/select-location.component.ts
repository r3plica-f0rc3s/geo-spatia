import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LngLat } from 'mapbox-gl';

@Component({
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {
  label: string;
  constructor(private router: Router) {
    this.label = this.router.getCurrentNavigation().extras.state.label;
  }
  selectedLocation: LngLat;
  ngOnInit(): void {
  }

  submitLocation(): void {
    if (this.selectedLocation) {

    }
  }

}
