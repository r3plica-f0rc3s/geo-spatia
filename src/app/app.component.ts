import { animate, query, style, transition, trigger } from '@angular/animations';
import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LngLat, Map } from 'mapbox-gl';
import { DialogComponent } from './dialog/dialog.component';
import { ContractService, GeoNFT } from './services/contract.service';
import { ImageMarker } from './services/map-helper.service';
import { SidenavState, UxService } from './services/ux.service';
@Component({
  animations: [
    trigger('slideOut', [
      transition(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate(
          '0.5s cubic-bezier(0.32,0,1,1)',
          style({ transform: 'translateY(-100%)' })
        ),
      ]),
    ]),
    trigger('slideUpIn', [
      transition('* => *', [
        query(':enter', [style({ transform: 'translateY(100%)', opacity: 0 })], {
          optional: true
        }),
        query(
          ':leave',
          [
            style({ transform: 'translateY(0%)', opacity: 1 }),
            animate('200ms', style({ transform: 'translateY(100%)', opacity: 0 }))
          ],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ transform: 'transitionY(100%)', opacity: 0 }),
            animate(
              '200ms cubic-bezier(0.32,0,1,1)',
              style({ transform: 'translateY(0%)', opacity: 1 })
            )
          ],
          { optional: true }
        )
      ])
    ]),
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  curtain = true;
  confirmOrder = true;
  public SidenavState = SidenavState;
  isMobile: boolean;
  title = 'geo-spatia';
  public markers: ImageMarker[];
  public userLocation: LngLat;
  public map: Map;
  public confirmOrderOpened = false;
  rightSidenavOpened: boolean;
  leftSidenavOpened: boolean;
  loading = false;
  subscriptions = [];
  nfts: GeoNFT[] = [];

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
    const wasStarted = window.localStorage.getItem('wasStarted');
    // if (wasStarted) {
    //   this.connectToMetamask();
    // }
    this.subscriptions.push(
      this.contractService.nfts$.subscribe((nfts) => {
        this.nfts = nfts;
      })
    );

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
    this.subscriptions.push(
      this.contractService.nfts$.subscribe((nfts) => {
        this.nfts = nfts;
      })
    );

    // this.contractService.init().then(() => {
    //   // this.router.navigate(['/', 'all-nfts'])
    // });
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
    window.localStorage.setItem('wasStarted', 'true');
    try {
      this.loading = true;
      await this.contractService.init();
      this.curtain = false;
      await this.router.navigate(['/', 'all-nfts']);
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      console.log('curtain: ', this.curtain);

      // convert nfts to imagemarkers
    } catch (error) {
      console.log('error happened');
      this.snackBar.open(error, 'Dismiss', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['snackbar-error'],
      });
      console.error(error);
    }
  }
  async buyNft() {
    this.router.navigate(['/', 'nft-bought']);
  }

}
