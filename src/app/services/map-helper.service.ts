import { Injectable } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { LngLat, LngLatBounds } from 'mapbox-gl';
import { BehaviorSubject } from 'rxjs';
import { GeolocationService } from './geolocation-service.service';

export enum CameraState {
  IDLE,
  NEARBY,
  SINGLE
}
export interface MapStatus {
  cameraState: CameraState;
  markers?: ImageMarker[];
  showUser: boolean;
  userLocation?: LngLat;
}

export interface ImageMarker {
  image: SafeHtml;
  coordinates: LngLat;
}

@Injectable({
  providedIn: 'root'
})
export class MapHelperService {
  private mapStatusSubject = new BehaviorSubject<MapStatus>({
    cameraState: CameraState.IDLE,
    showUser: false,
  });
  userLocation: LngLat = null;
  mapStatus$ = this.mapStatusSubject.asObservable();
  constructor(private locationService: GeolocationService) { }

  findCurrentLocation(): Promise<LngLat> {
    return this.locationService.getCurrentLocation().then((coords) => {
      const lngLat = new LngLat(coords.longitude, coords.latitude)
      this.mapStatusSubject.next({
        cameraState: this.mapStatusSubject.getValue().cameraState,
        showUser: true,
        userLocation: lngLat
      });
      return lngLat;
    })
  }

  setNearby(imageMarkers: ImageMarker[]): void {
    this.locationService.getCurrentLocation().then((userLocation) => {
      this.mapStatusSubject.next({
        cameraState: CameraState.NEARBY,
        showUser: true,
        markers: imageMarkers,
        userLocation: new LngLat(userLocation.longitude, userLocation.latitude)
      });
    })
  }

  setSingleMarker(imageMarker: ImageMarker): void {
    this.mapStatusSubject.next({
      cameraState: CameraState.SINGLE,
      showUser: false,
      markers: [imageMarker],
      userLocation: this.mapStatusSubject.getValue().userLocation
    })
  }

}