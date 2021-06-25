import { MapHelperService } from './../services/map-helper.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LngLat } from 'mapbox-gl';
import { MapService } from 'ngx-mapbox-gl';
import { ImageMarker } from '../services/map-helper.service';
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
  constructor(
      private NFTsService: NFTsService,
      public uxService: UxService,
      private mapHelperService: MapHelperService,
      private router: Router
    ) {
  }

  ngOnInit(): void {
    this.mapHelperService.findCurrentLocation().then((userLocation) => {
      this.NFTsService.randomizeLocations(userLocation, 10, 0.25);
      this.NFTsService.NFTs$.subscribe((nfts) => {
        this.mapHelperService.setNearby(nfts.map((NFT: GeoNFT) => {
          return {
            image: NFT.image,
            coordinates: NFT.location,
          };
        }));
      });

    })

  }
}
