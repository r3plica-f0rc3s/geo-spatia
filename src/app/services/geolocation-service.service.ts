import { Injectable } from '@angular/core';
import { LngLat, LngLatLike } from 'mapbox-gl';

export interface ILocation {
  lng: number;
  lat: number;
}

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  public allowed = false;
  private options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  public randomizedLocations: LngLat[];

  constructor() {}
  public askPermission() {
    return new Promise((resolve, reject) => {
      if (window.isSecureContext && 'geolocation' in navigator) {
        navigator.permissions
          .query({ name: 'geolocation' })
          .then((permissionStatus) => {
            if ('granted' === permissionStatus.state) {
              this.allowed = true;
              resolve(true);
            }
          });
      } else {
        reject('Geolocation not supported');
      }
    });
  }

  public getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const crd = pos.coords;

          console.log(`Latitude : ${crd.latitude}`);
          console.log(`Longitude: ${crd.longitude}`);
          console.log(`More or less ${crd.accuracy} meters.`);
          resolve(crd);
        },
        (err) => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
          reject(err);
        },
        this.options
      );
    });
  }

  randomizeLocations(latLng: ILocation, count, range) {
    this.randomizedLocations = new Array(count).fill(0).map((value) => {
      return new LngLat(
        Math.random() * (latLng.lng + range - (latLng.lng - range)) +
          (latLng.lng - range),
        Math.random() * (latLng.lat + range - (latLng.lat - range)) +
          (latLng.lat - range)
      );
    });
  }
  // public getRandomLocations(
  //   latLng: ILocation,
  //   count,
  //   range
  // ): LngLat[] {

  // }
}
