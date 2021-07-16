import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleNftComponent } from './single-nft/single-nft.component';
import { StartComponent } from './start/start.component';
import { TransactionResultComponent } from './transaction-result/transaction-result.component';
import { AllNFTsComponent } from './all-nfts/all-nfts.component';
import { SellComponent } from './sell/sell.component';
import { RetrieveNftsComponent } from './retrieve-nfts/retrieve-nfts.component';
import { RouteLockGuard } from './services/guards/route-lock.guard';

const routes: Routes = [
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
    path: 'confirm-order/:id',
  },
  {
    component: SellComponent,
    path: 'sell/:id'
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
