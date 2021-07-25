import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RetrieveNftsComponent } from 'src/app/retrieve-nfts/retrieve-nfts.component';
import { UxService } from '../ux.service';

@Injectable()
export class RouteLockGuard
  implements CanDeactivate<RetrieveNftsComponent>, CanActivate {
  constructor(private uxService: UxService, private matSnackBar: MatSnackBar) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.uxService.routeLock;
  }
  canDeactivate(
    component: RetrieveNftsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    this.matSnackBar.open('For now retrievals are forced. Please retrieve your NFT', 'Dismiss', {
      horizontalPosition: 'end',
      duration: 3000
    });
    return !this.uxService.routeLock;
  }
}
