import { Injectable } from '@angular/core';
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
  constructor(private uxService: UxService) {}
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
    nextState?: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return !this.uxService.routeLock;
  }
}
