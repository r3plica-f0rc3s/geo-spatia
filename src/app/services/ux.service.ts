import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum SidenavState {
  DISABLED,
  HIDDEN,
  ACTIVE,
}

export interface SidenavsState {
  leftSidenavState: SidenavState;
  rightSidenavState: SidenavState;
}
@Injectable({
  providedIn: 'root',
})
export class UxService {
  private sidenavOpenedSubject = new BehaviorSubject<SidenavsState>({
    leftSidenavState: SidenavState.DISABLED,
    rightSidenavState: SidenavState.DISABLED,
  });
  sidenavOpened$ = this.sidenavOpenedSubject.asObservable();
  routeLock = false;

  openSidenav() {
    this.sidenavOpenedSubject.next({
      rightSidenavState: SidenavState.ACTIVE,
      leftSidenavState: this.sidenavOpenedSubject.getValue().leftSidenavState,
    });
  }

  openLeftSidenav() {
    this.sidenavOpenedSubject.next({
      rightSidenavState: this.sidenavOpenedSubject.getValue().rightSidenavState,
      leftSidenavState: SidenavState.ACTIVE,
    });
  }

  closeSidenav() {
    this.sidenavOpenedSubject.next({
      rightSidenavState: SidenavState.HIDDEN,
      leftSidenavState: this.sidenavOpenedSubject.getValue().leftSidenavState,
    });
  }
  closeLeftSidenav() {
    this.sidenavOpenedSubject.next({
      rightSidenavState: this.sidenavOpenedSubject.getValue().rightSidenavState,
      leftSidenavState: SidenavState.HIDDEN,
    });
  }
  enableSidenav() {
    this.sidenavOpenedSubject.next({
      rightSidenavState: SidenavState.HIDDEN,
      leftSidenavState: this.sidenavOpenedSubject.getValue().leftSidenavState,
    });
  }
  enableLeftSidenav() {
    this.sidenavOpenedSubject.next({
      rightSidenavState: this.sidenavOpenedSubject.getValue().rightSidenavState,
      leftSidenavState: SidenavState.HIDDEN,
    });
  }

  disableSidenav() {
    this.sidenavOpenedSubject.next({
      rightSidenavState: SidenavState.DISABLED,
      leftSidenavState: this.sidenavOpenedSubject.getValue().leftSidenavState,
    });
  }
  disableLeftSidenav() {
    this.sidenavOpenedSubject.next({
      rightSidenavState: this.sidenavOpenedSubject.getValue().rightSidenavState,
      leftSidenavState: SidenavState.DISABLED,
    });
  }
}
