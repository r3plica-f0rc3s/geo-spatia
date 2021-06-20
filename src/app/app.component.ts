import {
  GeolocationService,
  ILocation,
} from './services/geolocation-service.service';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { LngLat, LngLatBounds, Map, LngLatLike } from 'mapbox-gl';
import { MarkerComponent } from 'ngx-mapbox-gl/lib/marker/marker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'geo-spatia';
  userLocation: ILocation = null;
  public map: Map;
  public bounds: LngLatBounds;
  public NFTs: LngLat[];
  @ViewChildren('markers') public markers: QueryList<MarkerComponent>;
  constructor(private locationService: GeolocationService) {}
  ngOnInit(): void {}

  queryLocation() {
    this.locationService.getCurrentLocation().then((coords) => {
      this.onUserLocated(coords);
    });
  }

  onUserLocated(coords): void {
    this.userLocation = {
      lat: coords.latitude,
      lng: coords.longitude,
    };
    // mapbox fit bounds
    // load 10 local NFT's
    if (!this.bounds) {
      this.bounds = new LngLatBounds();
    }

    this.NFTs = this.locationService.getRandomLocations(
      this.userLocation,
      10,
      0.25
    );
    this.NFTs.forEach((location) => {
      this.bounds.extend(location);
    });
    console.log(this.NFTs);
    this.map.fitBounds(this.bounds, { padding: 50 });
  }

  onMapLoaded($event): void {
    this.map = $event;
  }
}
