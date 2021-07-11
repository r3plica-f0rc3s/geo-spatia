import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { StartComponent } from './start/start.component';
import { TransactionResultComponent } from './transaction-result/transaction-result.component';
import { AllNFTsComponent } from './all-nfts/all-nfts.component';

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
    component: ConfirmOrderComponent,
    path: 'confirm-order/:id',
  },
  {
    component: TransactionResultComponent,
    path: 'transaction-result',
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
