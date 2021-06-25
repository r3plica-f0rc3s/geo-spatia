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
export class MapGlComponent implements OnChanges {
  @Input()
  markers: ImageMarker[] = [];
  @Input()
  userLocation: LngLat = null;
  public bounds: LngLatBounds;
  public map: Map;

  @ViewChildren('markers') public markerViews: QueryList<MarkerComponent>;
  constructor(
  ) {}
  ngOnChanges(changes: SimpleChanges): void {

    this.bounds = new LngLatBounds();

    if (changes.markers.currentValue) {
      const currentValue = changes.markers.currentValue;
      currentValue.forEach((item) => {
        this.bounds.extend(item.coordinates);

      });
      this.bounds.extend(this.userLocation);
      console.log(this.markers);
      this.map.fitBounds(this.bounds, { padding: 50 });
    }
  }

  onMapLoaded($event): void {
    this.map = $event;
  }

}
