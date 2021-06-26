import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum SidenavState {
  DISABLED,
  HIDDEN,
  ACTIVE,
}
@Injectable({
  providedIn: 'root',
})
export class UxService {
  private sidenavOpenedSubject = new BehaviorSubject<SidenavState>(SidenavState.DISABLED);
  sidenavOpened$ = this.sidenavOpenedSubject.asObservable();

  openSidenav() {
    this.sidenavOpenedSubject.next(SidenavState.ACTIVE);
  }

  closeSidenav() {
    this.sidenavOpenedSubject.next(SidenavState.HIDDEN);
  }

  enableSidenav() {
    this.sidenavOpenedSubject.next(SidenavState.HIDDEN);
  }

  disableSidenav() {
    this.sidenavOpenedSubject.next(SidenavState.DISABLED);
  }
}
