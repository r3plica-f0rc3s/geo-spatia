import { NFTsService, GeoNFT } from './services/NFTs.service';
import {
  GeolocationService,
  ILocation,
} from './services/geolocation-service.service';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { LngLat, LngLatBounds, Map, LngLatLike } from 'mapbox-gl';
import { MarkerComponent } from 'ngx-mapbox-gl/lib/marker/marker.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DomSanitizer } from '@angular/platform-browser';

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
  public NFTs: GeoNFT[];
  @ViewChildren('markers') public markers: QueryList<MarkerComponent>;
  constructor(
    private locationService: GeolocationService, 
    private NFTsService: NFTsService, 
    public dialog: MatDialog) {}
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
    // console.log('svg length', this.svgGeneratorService.generateAvatar(`${this.userLocation.lng},${this.userLocation.lat}`));
    // mapbox fit bounds
    // load 10 local NFT's
    if (!this.bounds) {
      this.bounds = new LngLatBounds();
    }
    this.NFTsService.randomizeLocations(
      this.userLocation,
      10,
      0.25
    );
    this.NFTs = this.NFTsService.NFTs; 

    this.NFTs.forEach((nft) => {
      this.bounds.extend(nft.location);
    });
    console.log(this.NFTs);
    this.map.fitBounds(this.bounds, { padding: 50 });
  }

  onMapLoaded($event): void {
    this.map = $event;
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
