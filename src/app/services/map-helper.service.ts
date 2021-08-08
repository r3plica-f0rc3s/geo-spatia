import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { LngLat, LngLatBounds } from 'mapbox-gl';
import { BehaviorSubject } from 'rxjs';
import { GeoNFT } from './contract.service';
import { GeolocationService } from './geolocation-service.service';

export enum CameraState {
  IDLE,
  NEARBY,
  SINGLE,
  SELECT
}
export interface MapStatus {
  cameraState: CameraState;
  markers?: GeoNFT[];
  showUser: boolean;
  userLocation?: LngLat;
  changeCameraState: boolean;
}

export interface ImageMarker {
  image: SafeHtml;
  coordinates: LngLat;
  id: any;
  layer: number;
}

@Injectable({
  providedIn: 'root'
})
export class MapHelperService {
  private mapStatusSubject = new BehaviorSubject<MapStatus>({
    cameraState: CameraState.IDLE,
    showUser: false,
    changeCameraState: false
  });
  userLocation: LngLat = null;
  mapStatus$ = this.mapStatusSubject.asObservable();
  constructor(private locationService: GeolocationService) { }

  findCurrentLocation(): Promise<LngLat> {
    return this.locationService.getCurrentLocation().then((coords) => {
      const lngLat = new LngLat(coords.longitude, coords.latitude);
      this.mapStatusSubject.next({
        cameraState: this.mapStatusSubject.getValue().cameraState,
        showUser: true,
        userLocation: lngLat,
        changeCameraState: true
      });
      return lngLat;
    });
  }

  setSelectMode(): void {
    // this.mapStatusSubject.next({
    //   cameraState: CameraState.SINGLE,

    // });
  }

  setNearby(imageMarkers: GeoNFT[]): void {
    this.locationService.getCurrentLocation().then((userLocation) => {
      console.log(imageMarkers);
      this.mapStatusSubject.next({
        cameraState: CameraState.NEARBY,
        showUser: true,
        markers: imageMarkers,
        userLocation: new LngLat(userLocation.longitude, userLocation.latitude),
        changeCameraState: true
      });
    });
  }

  setSingleMarker(imageMarker: GeoNFT): void {
    this.mapStatusSubject.next({
      cameraState: CameraState.SINGLE,
      showUser: false,
      markers: [imageMarker],
      userLocation: this.mapStatusSubject.getValue().userLocation,
      changeCameraState: true
    });
  }

  setMultipleMarkers(imageMarkers: GeoNFT[]): void {
    this.mapStatusSubject.next({
      showUser: false,
      cameraState: CameraState.IDLE,
      markers: imageMarkers,
      changeCameraState: false
    });
  }

}
