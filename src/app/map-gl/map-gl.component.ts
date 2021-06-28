import { CameraState, MapHelperService, MapStatus } from './../services/map-helper.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChildren
} from '@angular/core';
import { LngLat, LngLatBounds, Map } from 'mapbox-gl';
import { MarkerComponent } from 'ngx-mapbox-gl/lib/marker/marker.component';
import { ImageMarker } from '../services/map-helper.service';


@Component({
  selector: 'app-map-gl',
  templateUrl: './map-gl.component.html',
  styleUrls: ['./map-gl.component.scss'],
})
export class MapGlComponent implements OnChanges, OnInit {
  @Input()
  markers: ImageMarker[] = [];
  @Input()
  userLocation: LngLat = null;
  public bounds: LngLatBounds;
  public map: Map;
  public mapStatus: MapStatus;
  @ViewChildren('markers') public markerViews: QueryList<MarkerComponent>;
  constructor(
    private mapHelperService: MapHelperService
  ) {}

  ngOnInit(): void {
    this.mapHelperService.mapStatus$.subscribe((mapState) => {
      this.mapStatus = mapState;
      // apply status
      this.setCamera();
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
          this.map.fitBounds(this.bounds, { padding: 50 });
        }
        break;
      case CameraState.SINGLE:
        if (!this.mapStatus.markers) {
          return;
        }
        this.map.setCenter(this.mapStatus.markers[0].coordinates);
        this.map.setZoom(8);
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
    this.setCamera();
  }

}
