import { ContractService, NFT } from './../services/contract.service';
import { MapHelperService } from './../services/map-helper.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LngLat } from 'mapbox-gl';
import { MapService } from 'ngx-mapbox-gl';
import { ImageMarker } from '../services/map-helper.service';
import { GeoNFT, NFTsService } from '../services/NFTs.service';
import { UxService } from '../services/ux.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.scss'],
})
export class NearbyComponent implements OnInit {
  isMobile: boolean;
  coords;
  public markers: ImageMarker[];
  public NFTs: NFT[];
  constructor(
      private NFTsService: NFTsService,
      public uxService: UxService,
      private mapHelperService: MapHelperService,
      private router: Router,
      private media: MediaMatcher,
      private contractService: ContractService
    ) {
  }

  ngOnInit(): void {
    this.contractService.nfts$.subscribe((nfts) => {
      console.log('nfts', this.NFTs);
      if (!nfts) {
        return;
      }
      this.NFTs = nfts.filter((nft) => {
        return nft.location.length > 0;
      });
      this.mapHelperService.setNearby(this.NFTs.map((nft) => {
        return {
          image: nft.svg.replace('/', ''),
          coordinates: new LngLat(Number(nft.location.split(',')[0]), Number(nft.location.split(',')[1]))
        }
      }))
    }, (err) => {
      this.router.navigate(['/', 'start']);
    })
    this.isMobile = this.media.matchMedia('(max-width: 700px)').matches;
    this.uxService.enableSidenav();
    this.contractService.loadNFTs();
    // this.mapHelperService.setMultipleMarkers(this.NFTs.map((nft) => {
    //   return {
    //     image: nft.svg,
    //     coordinates: nft.location
    //   }
    // }))
    // this.mapHelperService.findCurrentLocation().then((userLocation) => {
    //   this.NFTsService.randomizeLocations(userLocation, 10, 0.25);
    //   this.NFTsService.NFTs$.subscribe((nfts) => {
    //     this.mapHelperService.setNearby(nfts.map((NFT: GeoNFT) => {
    //       return {
    //         image: NFT.image,
    //         coordinates: NFT.location,
    //       };
    //     }));
    //   });

    // })

  }
}
