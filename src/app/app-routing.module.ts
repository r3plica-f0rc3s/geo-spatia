import { CurtainComponent } from './curtain/curtain.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { AllNFTsComponent } from './all-nfts/all-nfts.component';
import { StartComponent } from './start/start.component';
import { NftBoughtComponent } from './nft-bought/nft-bought.component';

const routes: Routes = [
  {
    component: StartComponent,
    path: 'start',
  },
  {
    component: AllNFTsComponent,
    path: 'nearby',
  },
  {
    component: ConfirmOrderComponent,
    path: 'confirm-order/:name',
  },
  {
    component: NftBoughtComponent,
    path: 'nft-bought',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
