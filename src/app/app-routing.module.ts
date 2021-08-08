import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleNftComponent } from './single-nft/single-nft.component';
import { StartComponent } from './start/start.component';
import { TransactionResultComponent } from './transaction-result/transaction-result.component';
import { AllNFTsComponent } from './all-nfts/all-nfts.component';
import { RetrieveNftsComponent } from './retrieve-nfts/retrieve-nfts.component';
import { RouteLockGuard } from './services/guards/route-lock.guard';
import { SelectLocationComponent } from './select-location/select-location.component';

const routes: Routes = [
  {
    path: '*',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    component: StartComponent,
    path: 'start',
  },
  {
    component: AllNFTsComponent,
    path: 'all-nfts',
  },
  {
    component: SingleNftComponent,
    path: 'single-nft/:id',
  },
  {
    component: SelectLocationComponent,
    path: 'select-location'
  },
  {
    component: TransactionResultComponent,
    path: 'transaction-result',
  },
  {
    component: RetrieveNftsComponent,
    path: 'retrieve-nfts',
    canDeactivate: [RouteLockGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
