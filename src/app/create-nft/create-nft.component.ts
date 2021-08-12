import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LngLat } from 'mapbox-gl';
import { MapHelperService } from '../services/map-helper.service';

@Component({
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.scss']
})
export class CreateNftComponent implements OnInit {
  selected: LngLat;
  constructor(private mapHelperService: MapHelperService, private router: Router) {
    // get new markers location
    this.selected = this.router.getCurrentNavigation().extras.state as LngLat;
  }

  ngOnInit(): void {
    // this.mapHelperService.setSingleMarker({

    // })
  }

}
