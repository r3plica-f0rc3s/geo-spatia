import { PriceConverterService } from './services/price-converter.service';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapService, NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { CurtainComponent } from './curtain/curtain.component';
import { DialogComponent } from './dialog/dialog.component';
import { MapGlComponent } from './map-gl/map-gl.component';
import { NftListComponent } from './nft-list/nft-list.component';
import { ShortAddressPipe } from './pipes/short-address.pipe';
import { ContractService } from './services/contract.service';
import { DeviceDetectorService } from './services/device-detector.service';
import { GeolocationService } from './services/geolocation-service.service';
import { SVGGeneratorService } from './services/svggenerator.service';
import { StartComponent } from './start/start.component';
import { WalletComponent } from './wallet/wallet.component';
import { TransactionResultComponent } from './transaction-result/transaction-result.component';
import { HttpClientModule } from '@angular/common/http';
import { WeiToOnePipe } from './pipes/wei-to-one.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { AllNFTsComponent } from './all-nfts/all-nfts.component';
import { LoadingButtonComponent } from './ux-components/loading-button/loading-button.component';
import { NftMarkerComponent } from './ux-components/nft-marker/nft-marker.component';
import { SellComponent } from './sell/sell.component';
import { ButtonComponent } from './ux-components/button/button.component';
import { NftListItemComponent } from './ux-components/nft-list-item/nft-list-item.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MapGlComponent,
    ConfirmOrderComponent,
    StartComponent,
    AllNFTsComponent,
    NftListComponent,
    WalletComponent,
    ShortAddressPipe,
    CurtainComponent,
    TransactionResultComponent,
    WeiToOnePipe,
    LoadingButtonComponent,
    NftMarkerComponent,
    SellComponent,
    ButtonComponent,
    NftListItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatChipsModule,
    MatSnackBarModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoidGhlY3liZXJkM20wbiIsImEiOiJja2FpcnNyeXowM21tMndwamxyZjU5ajJpIn0.TjWqQxlCdOZmoVFLFJBRsA', // Optional, can also be set per map (accessToken input of mgl-map)
    }),
    MatProgressSpinnerModule,
  ],
  providers: [
    GeolocationService,
    MapService,
    SVGGeneratorService,
    ContractService,
    DeviceDetectorService,
    PriceConverterService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
