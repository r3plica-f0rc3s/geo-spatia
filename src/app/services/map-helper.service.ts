import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { LngLat } from 'mapbox-gl';
import { BehaviorSubject, Subject } from 'rxjs';
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
  markers?: Partial<GeoNFT>[];
  showUser: boolean;
  userLocation?: LngLat;
  changeCameraState: boolean;
  newNft?: boolean;
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
  mapSelectedSubject = new Subject<LngLat>();
  mapSelected$ = this.mapSelectedSubject.asObservable();
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
    this.mapStatusSubject.next({
      cameraState: CameraState.SELECT,
      showUser: false,
      newNft: false,
      changeCameraState: true,
      markers: []
    });
  }

  setNearby(imageMarkers: GeoNFT[]): void {
    this.locationService.getCurrentLocation().then((userLocation) => {
      console.log(imageMarkers);
      this.mapStatusSubject.next({
        cameraState: CameraState.NEARBY,
        showUser: true,
        markers: imageMarkers,
      newNft: false,
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
      newNft: false,
      userLocation: this.mapStatusSubject.getValue().userLocation,
      changeCameraState: true
    });
  }

  setSingleNewNftMarker(): void {
    this.mapStatusSubject.next({
      cameraState: CameraState.SINGLE,
      showUser: false,
      markers: [],
      newNft: true,
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

  selected(coords: LngLat): void {
    console.log('selected', coords);
    this.mapSelectedSubject.next(coords);
  }
}
