import { ContractService } from './contract.service';
import { BehaviorSubject } from 'rxjs';
import { SVGGeneratorService } from './svggenerator.service';
import { Injectable } from '@angular/core';
import { LngLat } from 'mapbox-gl';
import { ILocation } from './geolocation-service.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export enum SoldStatus {
  OWNED,
  SOLD,
  AVAILABLE,
}

export interface GeoNFT {
  name: string;
  location: LngLat;
  image: SafeHtml;
  price: number;
  status: SoldStatus;
  id: number;
}

@Injectable()
export class NFTsService {
  private NFTsSubject = new BehaviorSubject<GeoNFT[]>([]);
  public NFTs$ = this.NFTsSubject.asObservable();
  constructor(
    private svgGeneratorService: SVGGeneratorService,
    private sanitizer: DomSanitizer,
    private contractService: ContractService
  ) {}

  // randomizeLocations(latLng: ILocation, count, range): void {
  //   this.NFTsSubject.next(
  //     new Array(count).fill(0).map((value) => {
  //       return {
  //         location: new LngLat(
  //           Math.random() * (latLng.lng + range - (latLng.lng - range)) +
  //             (latLng.lng - range),
  //           Math.random() * (latLng.lat + range - (latLng.lat - range)) +
  //             (latLng.lat - range)
  //         ),
  //         image: this.sanitizer.bypassSecurityTrustHtml(
  //           this.svgGeneratorService.generateAvatar(
  //             Math.random().toString(36).substring(7)
  //           )
  //         ),
  //         name: Math.random().toString(36).substring(7),
  //         price: Math.random() * (200 + 100 - (200 - 100)),
  //         status: SoldStatus.AVAILABLE,
  //       };
  //     })
  //   );
  // }

}
