import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { NearbyComponent } from './nearby/nearby.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    component: StartComponent,
    path: 'start',
  },
  {
    component: ConfirmOrderComponent,
    path: 'confirm-order/:name',
  },
  {
    component: NearbyComponent,
    path: 'nearby',
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
