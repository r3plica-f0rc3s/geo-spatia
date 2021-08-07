import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleNftComponent } from './single-nft/single-nft.component';
import { StartComponent } from './start/start.component';
import { TransactionResultComponent } from './transaction-result/transaction-result.component';
import { AllNFTsComponent } from './all-nfts/all-nfts.component';
import { RetrieveNftsComponent } from './retrieve-nfts/retrieve-nfts.component';
import { RouteLockGuard } from './services/guards/route-lock.guard';
import { ResaleNftsComponent } from './resale-nfts/resale-nfts.component';
import { BidComponent } from './bid/bid.component';

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
    component: ResaleNftsComponent,
    path: 'resale/:id'
  },
  {
    component: BidComponent,
    path: 'bid/:id'
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
