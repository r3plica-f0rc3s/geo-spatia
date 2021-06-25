import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LngLat } from 'mapbox-gl';
import { MapService } from 'ngx-mapbox-gl';
import { ImageMarker } from '../map-gl/map-gl.component';
import { GeoNFT, NFTsService } from '../services/NFTs.service';
import { UxService } from '../services/ux.service';

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.scss'],
})
export class NearbyComponent implements OnInit {
  coords;
  public markers: ImageMarker[];
  public NFTs: GeoNFT[];
  public userLocation: LngLat;
  constructor(private router: Router,
      private NFTsService: NFTsService,
      public uxService: UxService,
      private mapService: MapService
    ) {
    const navigation = this.router.getCurrentNavigation();
    this.coords = navigation.extras.state;
  }

  ngOnInit(): void {
    if(!this.coords) {
      this.router.navigate(['/']);
      return;
    }
    this.userLocation = new LngLat(this.coords.longitude, this.coords.latitude);

    this.NFTsService.randomizeLocations(this.userLocation, 10, 0.25);
    this.NFTs = this.NFTsService.NFTs;
    this.markers = this.NFTs.map((NFT: GeoNFT) => {
      return {
        image: NFT.image,
        coordinates: NFT.location,
      };
    });
  }
}
