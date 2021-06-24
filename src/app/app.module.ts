import { NFTsService } from './services/NFTs.service';
import { SVGGeneratorService } from './services/svggenerator.service';
import { GeolocationService } from './services/geolocation-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent, MapService, NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MapGlComponent } from './map-gl/map-gl.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { StartComponent } from './start/start.component';
import { NearbyComponent } from './nearby/nearby.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MapGlComponent,
    ConfirmOrderComponent,
    StartComponent,
    NearbyComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatSnackBarModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoidGhlY3liZXJkM20wbiIsImEiOiJja2FpcnNyeXowM21tMndwamxyZjU5ajJpIn0.TjWqQxlCdOZmoVFLFJBRsA', // Optional, can also be set per map (accessToken input of mgl-map)
    }),
  ],
  providers: [GeolocationService, MapService, SVGGeneratorService, NFTsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
