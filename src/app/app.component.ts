import { ContractService } from './services/contract.service';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LngLat, Map } from 'mapbox-gl';
import { DialogComponent } from './dialog/dialog.component';
import { ImageMarker } from './services/map-helper.service';
import { SidenavState, UxService } from './services/ux.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  animations: [
    trigger('slideOut', [
      transition(':leave', [
        style({ height: '100%' }),
        animate('1000ms ease-out', style({ height: '0px' })),
      ]),
    ]),
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  curtain = true;
  public SidenavState = SidenavState;
  isMobile: boolean;
  title = 'geo-spatia';
  public markers: ImageMarker[];
  public userLocation: LngLat;
  public map: Map;
  public confirmOrderOpened = false;
  rightSidenavOpened: boolean;
  leftSidenavOpened: boolean;
  loading: false;
  constructor(
    public uxService: UxService,
    public dialog: MatDialog,
    private media: MediaMatcher,
    private contractService: ContractService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.isMobile.addListener(this.mobileQueryListener);
    // console.log("mobileSidenav: ", this.isMobile, "mobilequerylistener: ", this.mobileQueryListener);
  }
  ngOnInit(): void {
    this.isMobile = this.media.matchMedia('(max-width: 700px)').matches;
    this.uxService.sidenavOpened$.subscribe((sideNavOpened) => {
      this.rightSidenavOpened = this.isMobile
        ? sideNavOpened.rightSidenavState === SidenavState.ACTIVE
          ? true
          : false
        : sideNavOpened.rightSidenavState === SidenavState.HIDDEN ||
          sideNavOpened.rightSidenavState === SidenavState.ACTIVE
        ? true
        : false;

      this.leftSidenavOpened = this.isMobile
        ? sideNavOpened.leftSidenavState === SidenavState.ACTIVE
          ? true
          : false
        : sideNavOpened.leftSidenavState === SidenavState.HIDDEN ||
          sideNavOpened.leftSidenavState === SidenavState.ACTIVE
        ? true
        : false;
    });
    this.contractService.init().then(() => {
      // this.router.navigate(['/', 'nearby'])
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      backdropClass: 'backdropBackground',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async connectToMetamask() {
    try {
      await this.contractService.init();
      this.curtain = false;
     await this.router.navigate(['/', 'nearby', {
       data: {

       }
     }]);
      console.log('curtain: ', this.curtain);

      // convert nfts to imagemarkers
    } catch (error) {
      this.snackBar.open(error, 'Dismiss', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['snackbar-error'],
      });
      console.error(error);
    }
  }
}
