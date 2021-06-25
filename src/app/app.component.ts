import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LngLat, Map } from 'mapbox-gl';
import { DialogComponent } from './dialog/dialog.component';
import { GeolocationService } from './services/geolocation-service.service';
import { GeoNFT, NFTsService } from './services/NFTs.service';
import { UxService } from './services/ux.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'geo-spatia';
  public markers: ImageMarker[];
  public userLocation: LngLat;
  public map: Map;
  public confirmOrderOpened = false;
  public NFTs: GeoNFT[];
  constructor(
    public uxService: UxService,
    private NFTsService: NFTsService,
    public dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit(): void {}


  onUserLocated(coords): void {
    this.userLocation = new LngLat(coords.longitude, coords.latitude);

    this.NFTsService.randomizeLocations(this.userLocation, 10, 0.25);
    this.NFTs = this.NFTsService.NFTs;
    this.markers = this.NFTs.map((NFT: GeoNFT) => {
      return {
        image: NFT.image,
        coordinates: NFT.location,
      };
    });
  }

  onMapLoaded($event): void {
    this.map = $event;
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      backdropClass: 'backdropBackground',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  confirmOrder(drawer, i: number) {
    drawer.close();
    this.confirmOrderOpened = true;
    const nft = this.NFTs[i];
    const imageMarker = {
      image: nft.image,
      coordinates: nft.location,
    };
    this.markers = [imageMarker];
    this.router.navigate(['/confirm-order', nft.name]);


  }
}
