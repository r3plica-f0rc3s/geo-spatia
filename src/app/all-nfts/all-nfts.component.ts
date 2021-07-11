import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageMarker } from '../services/map-helper.service';
import { UxService } from '../services/ux.service';
import { ContractService, GeoNFT } from '../services/contract.service';
import { MapHelperService } from '../services/map-helper.service';

@Component({
  templateUrl: './all-nfts.component.html',
  styleUrls: ['./all-nfts.component.scss'],
})
export class AllNFTsComponent implements OnInit {
  isMobile: boolean;
  coords;
  public markers: ImageMarker[];
  public NFTs: GeoNFT[];
  constructor(
    public uxService: UxService,
    private mapHelperService: MapHelperService,
    private router: Router,
    private media: MediaMatcher,
    private contractService: ContractService,
  ) {
  }

  ngOnInit(): void {
    this.contractService.nfts$.subscribe((nfts) => {
      if (!nfts) {
        return;
      }
      this.NFTs = nfts;
      this.mapHelperService.setMultipleMarkers(
        this.NFTs.map((nft) => {
          console.log('image', nft.image)
          return nft;
        }))
    }, (err) => {
      this.router.navigate(['/', 'start']);
    });
    this.isMobile = this.media.matchMedia('(max-width: 700px)').matches;
    this.uxService.enableSidenav();
    this.uxService.enableLeftSidenav();
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
