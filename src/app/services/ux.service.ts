import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UxService {
  private sidenavOpenedSubject = new BehaviorSubject<boolean>(false);
  sidenavOpened$ = this.sidenavOpenedSubject.asObservable();

  openSidenav() {
    this.sidenavOpenedSubject.next(true);
  }

  closeSidenav() {
    this.sidenavOpenedSubject.next(false);
  }
}
