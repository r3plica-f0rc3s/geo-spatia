import {
  Component,
  Input,
  OnChanges,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { LngLat, LngLatBounds, Map } from 'mapbox-gl';
import { MarkerComponent } from 'ngx-mapbox-gl/lib/marker/marker.component';
import { fromEvent, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { ImageMarker } from '../services/map-helper.service';
import { NftUxState } from '../ux-components/nft-marker/nft-marker.component';
import {
  CameraState,
  MapHelperService,
  MapStatus,
} from './../services/map-helper.service';

@Component({
  selector: 'app-map-gl',
  templateUrl: './map-gl.component.html',
  styleUrls: ['./map-gl.component.scss'],
})
export class MapGlComponent implements OnChanges {
  @Input()
  markers: ImageMarker[] = [];
  @Input()
  userLocation: LngLat = null;
  public bounds: LngLatBounds;
  public map: Map;
  public mapStatus: MapStatus;
  level = 1;
  NftUxState = NftUxState;
  @ViewChildren('markers') public markerViews: QueryList<MarkerComponent>;
  constructor(
    private mapHelperService: MapHelperService,
    private router: Router
  ) {}

  private setEvents() {
    const source = fromEvent(this.map, 'zoom');
    source.pipe(debounce(() => timer(500))).subscribe(() => {
      if (this.mapStatus.markers && this.mapStatus.cameraState !== CameraState.SINGLE) {
        this.markers = this.mapStatus.markers.filter((marker) => {
          return Math.max(Math.floor(this.map.getZoom()), 1) === marker.layer;
        });
      }
    });
  }

  private setCamera(): void {
    switch (this.mapStatus.cameraState) {
      case CameraState.NEARBY:
        this.bounds = new LngLatBounds();
        this.mapStatus.markers.forEach((marker) => {
          this.bounds.extend(marker.coordinates);
        });
        this.bounds.extend(this.mapStatus.userLocation);
        if (this.map) {
          this.map.fitBounds(this.bounds, { zoom: 1 });
        }
        break;
      case CameraState.IDLE:
        if (this.map && this.mapStatus.markers) {
          this.bounds = new LngLatBounds();
          this.mapStatus.markers.forEach((marker) => {
            this.bounds.extend(marker.coordinates);
          });
          if (this.map) {
            this.map.fitBounds(this.bounds, {
              zoom: 1,
              bearing: 0,
              pitch: 0,
              essential: true,
            });
          }
        }
        break;
      case CameraState.SINGLE:
        if (!this.mapStatus.markers) {
          return;
        }
        const coords = this.mapStatus.markers[0].coordinates;
        this.map.flyTo({
          center: coords,
          essential: true,
          pitch: 60,
          zoom: 7,
        });
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.bounds = new LngLatBounds();

    if (changes.markers.currentValue) {
      const currentValue = changes.markers.currentValue;

      console.log(this.markers);
      this.map.fitBounds(this.bounds, { padding: 50 });
    }
  }

  onMapLoaded($event): void {
    this.map = $event;
    this.mapHelperService.mapStatus$.subscribe((mapState) => {
      this.mapStatus = mapState;
      // apply status
      this.markers = mapState.markers;
      this.setCamera();
      this.setEvents();
    });
  }

  markerClicked(marker: ImageMarker) {
    this.router.navigate(['confirm-order', marker.id]);
  }
}
