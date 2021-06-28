import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LngLat, Map } from 'mapbox-gl';
import { DialogComponent } from './dialog/dialog.component';
import { ImageMarker } from './services/map-helper.service';
import { SidenavState, UxService } from './services/ux.service';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public SidenavState = SidenavState;
  isMobile: boolean;
  title = 'geo-spatia';
  public markers: ImageMarker[];
  public userLocation: LngLat;
  public map: Map;
  public confirmOrderOpened = false;
  rightSidenavOpened: boolean;
  leftSidenavOpened: boolean;
  constructor(
    public uxService: UxService,
    public dialog: MatDialog,
    private media: MediaMatcher
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
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      backdropClass: 'backdropBackground',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
