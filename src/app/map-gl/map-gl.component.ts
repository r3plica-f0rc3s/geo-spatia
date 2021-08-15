import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { LngLat, LngLatBounds, Map, MapEventType } from 'mapbox-gl';
import { MarkerComponent } from 'ngx-mapbox-gl/lib/marker/marker.component';
import { fromEvent, Subscription, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { GeoNFT } from '../services/contract.service';
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
export class MapGlComponent implements OnChanges, OnDestroy {
  nfts: Partial<GeoNFT>[] = [];
  @Input()
  userLocation: LngLat = null;
  public bounds: LngLatBounds;
  public map: Map;
  public mapStatus: MapStatus;
  subscriptions = [];
  level = 1;
  CameraState = CameraState;
  NftUxState = NftUxState;
  newNft = false;
  selectionControls = false;
  selectionMarker = null;
  @ViewChildren('markers') public markerViews: QueryList<MarkerComponent>;
  constructor(
    private mapHelperService: MapHelperService,
    private router: Router
  ) { }

  enableSelectionControls(): void {
    this.selectionControls = true;
    this.map.on('click', (event) => {
      this.selectionMarker = event.lngLat;
      // report it to service
      this.mapHelperService.selected(this.selectionMarker);
    });
  }

  disableSelectionControls(): void {
    this.selectionControls = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.bounds = new LngLatBounds();

    if (changes.markers.currentValue) {
      this.map.fitBounds(this.bounds, { padding: 50 });
    }
  }

  onMapLoaded($event): void {
    this.map = $event;
    this.setEvents();
    this.mapHelperService.mapStatus$.subscribe((mapState) => {
      this.mapStatus = mapState;
      // apply status
      this.nfts = mapState.markers;
      this.setCamera();

    });
  }

  markerClicked(marker: ImageMarker): void {
    this.router.navigate(['single-nft', marker.id]);
  }

  private setEvents(): void {
    const source = fromEvent(this.map, 'zoom');
    this.subscriptions.push(source.pipe(debounce(() => timer(500))).subscribe(() => {
      if (this.mapStatus.markers && this.mapStatus.cameraState !== CameraState.SINGLE) {
        this.nfts = this.mapStatus.markers.filter((marker) => {
          return Math.max(Math.floor(this.map.getZoom()), 1) === marker.layer;
        });
      }
    }));
  }

  private setCamera(): void {
    switch (this.mapStatus.cameraState) {
      case CameraState.NEARBY:
        this.bounds = new LngLatBounds();
        this.mapStatus.markers.forEach((marker) => {
          this.bounds.extend(marker.location);
        });
        this.bounds.extend(this.mapStatus.userLocation);
        if (this.map) {
          this.map.fitBounds(this.bounds, { zoom: 1 });
        }

        this.disableSelectionControls();
        break;
      case CameraState.IDLE:

        if (this.map && this.mapStatus.markers) {
          this.bounds = new LngLatBounds();
          this.mapStatus.markers.forEach((marker) => {
            this.bounds.extend(marker.location);
          });
          if (this.map && !this.bounds.isEmpty()) {
            this.map.fitBounds(this.bounds, {
              zoom: 1,
              bearing: 0,
              pitch: 0,
              offset: [-400, 1],
            });
          }
        }

        this.disableSelectionControls();
        break;
      case CameraState.SELECT:
        this.map.flyTo({
          zoom: 0,
          bearing: 0,
          pitch: 0,
          offset: [-400, -60]
        });
        this.enableSelectionControls();
        break;
      case CameraState.SINGLE:
              this.disableSelectionControls();
        if (this.mapStatus.newNft) {
          // TODO: add new nft
          this.newNft = true;
        }
        if (!this.mapStatus.markers) {
          return;
        }
        if (this.mapStatus.markers[0]) {
          const coords = this.mapStatus.markers[0].location;
           this.map.flyTo({
          center: coords,
          essential: true,
          pitch: 60,
          zoom: 10,
          offset: [-400, -60]
        });
        }
       
        break;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
