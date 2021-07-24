(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/coder/project/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1wIp":
/*!*****************************************************!*\
  !*** ./src/app/services/guards/route-lock.guard.ts ***!
  \*****************************************************/
/*! exports provided: RouteLockGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteLockGuard", function() { return RouteLockGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ux_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ux.service */ "m+5+");


class RouteLockGuard {
    constructor(uxService) {
        this.uxService = uxService;
    }
    canActivate(route, state) {
        return this.uxService.routeLock;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return !this.uxService.routeLock;
    }
}
RouteLockGuard.ɵfac = function RouteLockGuard_Factory(t) { return new (t || RouteLockGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ux_service__WEBPACK_IMPORTED_MODULE_1__["UxService"])); };
RouteLockGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteLockGuard, factory: RouteLockGuard.ɵfac });


/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "21Hg":
/*!************************************************!*\
  !*** ./src/app/all-nfts/all-nfts.component.ts ***!
  \************************************************/
/*! exports provided: AllNFTsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllNFTsComponent", function() { return AllNFTsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ux_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ux.service */ "m+5+");
/* harmony import */ var _services_map_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/map-helper.service */ "GLxv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/contract.service */ "oYcS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function AllNFTsComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllNFTsComponent_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.uxService.openLeftSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllNFTsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllNFTsComponent_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.uxService.openSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "view_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AllNFTsComponent {
    constructor(uxService, mapHelperService, router, media, contractService) {
        this.uxService = uxService;
        this.mapHelperService = mapHelperService;
        this.router = router;
        this.media = media;
        this.contractService = contractService;
    }
    ngOnInit() {
        this.contractService.nfts$.subscribe((nfts) => {
            if (!nfts) {
                return;
            }
            this.NFTs = nfts;
            this.mapHelperService.setMultipleMarkers(this.NFTs);
        }, (err) => {
        });
        this.isMobile = this.media.matchMedia('(max-width: 700px)').matches;
        this.uxService.enableSidenav();
        this.uxService.enableLeftSidenav();
        // this.mapHelperService.setMultipleMarkers(this.NFTs.map((nft) => {
        //   return {
        //     image: nft.svg,
        //     coordinates: nft.location
        //   }
        // }))
        // this.mapHelperService.findCurrentLocation().then((userLocation) => {
        //   this.NFTsService.randomizeLocations(userLocation, 10, 0.25);
        //   this.NFTsService.NFTs$.subscribe((nfts) => {
        //     this.mapHelperService.setNearby(nfts.map((NFT: GeoNFT) => {
        //       return {
        //         image: NFT.image,
        //         coordinates: NFT.location,
        //       };
        //     }));
        //   });
        // })
    }
}
AllNFTsComponent.ɵfac = function AllNFTsComponent_Factory(t) { return new (t || AllNFTsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ux_service__WEBPACK_IMPORTED_MODULE_1__["UxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_map_helper_service__WEBPACK_IMPORTED_MODULE_2__["MapHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_5__["ContractService"])); };
AllNFTsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllNFTsComponent, selectors: [["ng-component"]], decls: 2, vars: 2, consts: [["class", "profile-panel", "disableRipple", "", "mat-fab", "", "color", "secondary", 3, "click", 4, "ngIf"], ["class", "sidenav-open", 4, "ngIf"], ["disableRipple", "", "mat-fab", "", "color", "secondary", 1, "profile-panel", 3, "click"], [1, "sidenav-open"], ["mat-fab", "", "color", "primary", 3, "click"]], template: function AllNFTsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllNFTsComponent_button_0_Template, 3, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllNFTsComponent_div_1_Template, 4, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  top: 16px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  place-content: space-between;\n  align-items: center;\n}\n\n.sidenav-open[_ngcontent-%COMP%] {\n  padding-right: 16px;\n}\n\n.profile-panel[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FsbC1uZnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFHRiIsImZpbGUiOiJhbGwtbmZ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZGVuYXYtb3BlbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4ucHJvZmlsZS1wYW5lbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB6LWluZGV4OiA5OTk7XG4gIG1hdC1pY29uIHtcblxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "6mYC":
/*!**********************************************************!*\
  !*** ./src/app/retrieve-nfts/retrieve-nfts.component.ts ***!
  \**********************************************************/
/*! exports provided: RetrieveNftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveNftsComponent", function() { return RetrieveNftsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contract.service */ "oYcS");
/* harmony import */ var _services_map_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/map-helper.service */ "GLxv");
/* harmony import */ var _services_ux_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/ux.service */ "m+5+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ux_components_nft_grid_nft_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ux-components/nft-grid/nft-grid.component */ "ZTEg");
/* harmony import */ var _ux_components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ux-components/loading-button/loading-button.component */ "uzNG");








class RetrieveNftsComponent {
    constructor(contractService, mapHelperService, uxService, router) {
        this.contractService = contractService;
        this.mapHelperService = mapHelperService;
        this.uxService = uxService;
        this.router = router;
        this.subscriptions = [];
        this.retrieving = false;
        this.nftsToRetrieve = [];
    }
    ngOnInit() {
        this.uxService.disableLeftSidenav();
        this.uxService.disableSidenav();
        this.subscriptions.push(this.contractService.getNftsToRetrieve$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(x => x.length > 0)).subscribe((nftsToRetrieve) => {
            this.mapHelperService.setMultipleMarkers(nftsToRetrieve);
            this.nftsToRetrieve = nftsToRetrieve;
        }));
    }
    retrieve() {
        this.retrieving = true;
        this.contractService.retrieveNFTs(this.nftsToRetrieve.map(nft => String(nft.id)));
        this.subscriptions.push(this.contractService.transactions$.subscribe((transactionEvent) => {
            if (transactionEvent && transactionEvent.success !== undefined) {
                this.router.navigate(['/', 'transaction-result'], { state: Object.assign({ closable: true }, transactionEvent) });
            }
        }, (err) => {
            this.router.navigate(['/', 'transaction-result'], { state: { success: false, closable: false } });
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
RetrieveNftsComponent.ɵfac = function RetrieveNftsComponent_Factory(t) { return new (t || RetrieveNftsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_map_helper_service__WEBPACK_IMPORTED_MODULE_3__["MapHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ux_service__WEBPACK_IMPORTED_MODULE_4__["UxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RetrieveNftsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RetrieveNftsComponent, selectors: [["ng-component"]], decls: 12, vars: 2, consts: [[1, "main-container"], [1, "top-wrapper"], [1, "top-label"], [1, "close-wrapper"], [1, "grid-list"], [3, "nfts"], [1, "retrieve-button"], [3, "loading", "click"], [1, "button-label"]], template: function RetrieveNftsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " You won following auctions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-nft-grid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-loading-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RetrieveNftsComponent_Template_app_loading_button_click_9_listener() { return ctx.retrieve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Retrieve ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nfts", ctx.nftsToRetrieve);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.retrieving);
    } }, directives: [_ux_components_nft_grid_nft_grid_component__WEBPACK_IMPORTED_MODULE_6__["NftGridComponent"], _ux_components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_7__["LoadingButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 40%;\n  background-color: #212121;\n  opacity: 0.9;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  [_nghost-%COMP%] {\n    width: 35%;\n  }\n}\n\n.close-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: flex-end;\n  padding-right: 16px;\n}\n\n.top-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 68px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  place-content: space-between;\n}\n\n.top-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  padding-left: 32px;\n}\n\n.top-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 32px;\n  letter-spacing: 1px;\n  color: grey;\n  font-family: \"Kanit\", sans-serif;\n}\n\n.nft-image[_ngcontent-%COMP%] {\n  width: 70px;\n  display: flex;\n  overflow: hidden;\n  border: 1px solid white;\n  border-radius: 50%;\n}\n\n.description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  place-content: space-between;\n  align-items: center;\n  width: calc(100% - 98px);\n}\n\n.mat-h1[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.bid-label[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  margin-top: 16px;\n  margin-right: 16px;\n  padding-left: 32px;\n}\n\n.bid-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.bid-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  place-content: space-between;\n}\n\n.retrieve-button[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  place-content: center;\n  position: absolute;\n  width: 100%;\n  bottom: 8px;\n}\n\n.retrieve-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border-radius: 24px;\n}\n\n.retrieve-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.retrieve-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n  .mat-button-wrapper {\n  display: flex;\n  align-items: center;\n  place-content: center;\n}\n\n.price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.nft-name[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  align-items: center;\n  display: flex;\n  padding-left: 32px;\n  margin-bottom: 32px;\n}\n\n.nft-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.nft-name-2[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  align-items: center;\n  display: flex;\n  padding-left: 32px;\n  height: 37%;\n}\n\n.nft-name-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.mat-h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0 0 !important;\n}\n\n.divider-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background-color: grey;\n  opacity: 0.2;\n}\n\n.location-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  app-loading-button mat-icon {\n  margin-right: 10px;\n}\n\n.sold[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  width: 100%;\n}\n\n.sold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  letter-spacing: 1px;\n}\n\n.more-or-less[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: black;\n}\n\n.number[_ngcontent-%COMP%] {\n  margin: 100px;\n}\n\n.minus[_ngcontent-%COMP%], .plus[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: #f2f2f2;\n  border-radius: 4px;\n  padding: 8px 5px 8px 5px;\n  border: 1px solid #ddd;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.value[_ngcontent-%COMP%] {\n  height: 34px;\n  width: 100px;\n  text-align: center;\n  font-size: 26px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.price-picker[_ngcontent-%COMP%] {\n  place-items: center;\n  place-content: center;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  align-content: center;\n  padding-right: 32px;\n}\n\n.highest-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  width: 100%;\n  margin-top: 32px;\n}\n\n.highest-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.grid-list[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JldHJpZXZlLW5mdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxXQUFBO0VBRUY7QUFDRjs7QUFBQTtFQUNFO0lBQ0UsVUFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFIRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBS0o7O0FBREE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtBQU1GOztBQUpBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFPRjs7QUFORTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtBQU9KOztBQUpBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFPRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFRRjs7QUFQRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFTTjs7QUFQSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFTTjs7QUFMQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFTRjs7QUFSRTtFQUNFLGlCQUFBO0FBVUo7O0FBUEE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFURTtFQUNFLGVBQUE7QUFXSjs7QUFSQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBV0Y7O0FBVEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFQQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQVVGOztBQVJBO0VBQ0UsYUFBQTtBQVdGOztBQVRBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFZRjs7QUFWQTtFQUNFLFdBQUE7QUFhRjs7QUFURTtFQUNFLGtCQUFBO0FBWUo7O0FBVEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFZRjs7QUFYRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQWFKOztBQVZBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFhRjs7QUFYQTtFQUNFLGFBQUE7QUFjRjs7QUFaQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBZUY7O0FBYkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFpQkY7O0FBZEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWlCRjs7QUFoQkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFrQko7O0FBZkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQWtCRiIsImZpbGUiOiJyZXRyaWV2ZS1uZnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubWFpbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuLmNsb3NlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi50b3Atd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udG9wLWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtZmFtaWx5OiBcIkthbml0XCIsIHNhbnMtc2VyaWY7XG4gIH1cbn1cblxuLm5mdC1pbWFnZSB7XG4gIHdpZHRoOiA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGxhY2UtY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDk4cHgpO1xufVxuLm1hdC1oMSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5iaWQtbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxufVxuLmJpZC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucmV0cmlldmUtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDhweDtcbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB9XG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICB9XG59XG46Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4ubmZ0LW5hbWUge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbi5uZnQtbmFtZS0yIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgaGVpZ2h0OiAzNyU7XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5tYXQtaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbjogMCAwICFpbXBvcnRhbnQ7XG59XG4uZGl2aWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXZpZGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBvcGFjaXR5OiAwLjI7XG59XG4ubG9jYXRpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCBhcHAtbG9hZGluZy1idXR0b24ge1xuICBtYXQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG4uc29sZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG59XG4ubW9yZS1vci1sZXNzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG4ubnVtYmVyIHtcbiAgbWFyZ2luOiAxMDBweDtcbn1cbi5taW51cyxcbi5wbHVzIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA4cHggNXB4IDhweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnZhbHVlIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5wcmljZS1waWNrZXIge1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbn1cblxuLmhpZ2hlc3QtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxufVxuLmdyaWQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "7jSs":
/*!************************************************!*\
  !*** ./src/app/nft-list/nft-list.component.ts ***!
  \************************************************/
/*! exports provided: NftListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftListComponent", function() { return NftListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ux_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/ux.service */ "m+5+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/contract.service */ "oYcS");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ux_components_nft_list_item_nft_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ux-components/nft-list-item/nft-list-item.component */ "fHUf");







function NftListComponent_mat_list_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NftListComponent_mat_list_option_1_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.confirmOrder(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nft-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nft_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nftId", nft_r2.id);
} }
function NftListComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No available NFT's :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NftListComponent {
    constructor(uxService, router, contractService) {
        this.uxService = uxService;
        this.router = router;
        this.contractService = contractService;
        this.nfts = [];
        this.subscriptions = [];
    }
    ngOnChanges(changes) {
        console.log('rendering nfts list', this.nfts);
    }
    ngOnInit() {
        console.log('rendering nfts list', this.nfts);
    }
    confirmOrder(i) {
        this.uxService.closeSidenav();
        this.router.navigate(['single-nft', this.nfts[i].id]);
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
NftListComponent.ɵfac = function NftListComponent_Factory(t) { return new (t || NftListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ux_service__WEBPACK_IMPORTED_MODULE_1__["UxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_3__["ContractService"])); };
NftListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NftListComponent, selectors: [["app-nft-list"]], inputs: { nfts: "nfts" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 3, consts: [[3, "multiple"], [3, "click", 4, "ngFor", "ngForOf"], [1, "no-results"], [4, "ngIf"], [3, "click"], [3, "nftId"]], template: function NftListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-selection-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NftListComponent_mat_list_option_1_Template, 2, 1, "mat-list-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NftListComponent_p_3_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nfts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.nfts == null ? null : ctx.nfts.length) === 0);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListOption"], _ux_components_nft_list_item_nft_list_item_component__WEBPACK_IMPORTED_MODULE_6__["NftListItemComponent"]], styles: [".list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n.list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\nmat-list-option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n  .mat-list-base .mat-list-item .mat-list-text, .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-list-text[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n  display: flex;\n  align-items: center;\n}\n  .mat-list-base .mat-list-item, .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  height: 100%;\n}\n  .mat-list-base .mat-list-item .mat-list-item-content-reverse, .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-list-item-content-reverse[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n  .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text, .mat-list-base[_ngcontent-%COMP%]   .mat-list-item.mat-list-option[_ngcontent-%COMP%]   .mat-list-item-content-reverse[_ngcontent-%COMP%]   .mat-list-text[_ngcontent-%COMP%], .mat-list-base[_ngcontent-%COMP%]   .mat-list-option.mat-list-item-with-avatar[_ngcontent-%COMP%]   .mat-list-item-content-reverse[_ngcontent-%COMP%]   .mat-list-text[_ngcontent-%COMP%], .mat-list-base[_ngcontent-%COMP%]   .mat-list-option.mat-list-option[_ngcontent-%COMP%]   .mat-list-item-content-reverse[_ngcontent-%COMP%]   .mat-list-text[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n  .mat-list-text {\n  padding-right: 0 !important;\n}\n.nft-image[_ngcontent-%COMP%] {\n  width: 22%;\n  height: 100%;\n  display: flex;\n}\n.nft-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n.name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 8px !important;\n}\n.second[_ngcontent-%COMP%] {\n  width: 68%;\n}\n.label[_ngcontent-%COMP%] {\n  width: 100px;\n  font-weight: 600;\n  font-size: 12px;\n  color: #d0a0e4;\n}\n.details[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 100px);\n}\n.details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.top-label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-top: 16px;\n}\n.top-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 1px;\n  font-weight: bold;\n  color: #dddddd;\n  padding-left: 16px;\n  box-sizing: border-box;\n}\n.no-results[_ngcontent-%COMP%] {\n  display: flex;\n  place-content: center;\n  align-items: center;\n  align-content: center;\n  height: 100%;\n  margin-top: 24px;\n}\n.divider[_ngcontent-%COMP%] {\n  background-color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25mdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSjtBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDQTs7RUFFRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQUE7O0VBRUUsWUFBQTtBQUdGO0FBREE7O0VBRUUsd0JBQUE7QUFJRjtBQUZBO0VBQ0UsMkJBQUE7QUFLRjtBQUhBO0VBQ0UsMkJBQUE7QUFNRjtBQUpBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0FBTUY7QUFFRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUdFO0VBQ0UsZUFBQTtBQUFKO0FBSUE7RUFDRSw2QkFBQTtBQURGO0FBR0E7RUFFRSxVQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREY7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQURKO0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFHQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJuZnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIHNwYW4ge1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cbm1hdC1saXN0LW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG46Om5nLWRlZXAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LXRleHQsXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGlzdC10ZXh0IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtLFxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjo6bmctZGVlcCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtaXRlbS1jb250ZW50LXJldmVyc2UsXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQtcmV2ZXJzZSB7XG4gIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbS5tYXQtbGlzdC1pdGVtLXdpdGgtYXZhdGFyIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQtcmV2ZXJzZSAubWF0LWxpc3QtdGV4dCwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQtcmV2ZXJzZSAubWF0LWxpc3QtdGV4dCwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbi5tYXQtbGlzdC1pdGVtLXdpdGgtYXZhdGFyIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQtcmV2ZXJzZSAubWF0LWxpc3QtdGV4dCwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbi5tYXQtbGlzdC1vcHRpb24gLm1hdC1saXN0LWl0ZW0tY29udGVudC1yZXZlcnNlIC5tYXQtbGlzdC10ZXh0IHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtbGlzdC10ZXh0IHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuLm5mdC1pbWFnZSB7XG4gIHdpZHRoOiAyMiU7XG4gIGhlaWdodDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICAvLyBtYXJnaW4tbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG5cbn1cbi5uZnQtc3ZnIHtcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHggcmdiYSgwLDAsMCwwLjQpO1xuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuLm5hbWUge1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cbi5zZWNvbmQge1xuICAvLyB3aWR0aDogY2FsYygxMDAlIC0gNTZweCk7XG4gIHdpZHRoOiA2OCU7XG59XG5cbi5sYWJlbCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2QwYTBlNDtcbn1cblxuLmRldGFpbHMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcblxuICBzcGFuIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn1cbi50b3AtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxufVxuLm5vLXJlc3VsdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLmRpdmlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufSJdfQ== */"] });


/***/ }),

/***/ "9eaZ":
/*!**************************************************!*\
  !*** ./src/app/services/svggenerator.service.ts ***!
  \**************************************************/
/*! exports provided: SVGGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGGeneratorService", function() { return SVGGeneratorService; });
/* harmony import */ var generate_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! generate-avatar */ "thpe");
/* harmony import */ var generate_avatar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(generate_avatar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SVGGeneratorService {
    constructor() { }
    generateAvatar(str) {
        return Object(generate_avatar__WEBPACK_IMPORTED_MODULE_0__["generateFromString"])(str);
    }
}
SVGGeneratorService.ɵfac = function SVGGeneratorService_Factory(t) { return new (t || SVGGeneratorService)(); };
SVGGeneratorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SVGGeneratorService, factory: SVGGeneratorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EBTS":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ux_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/ux.service */ "m+5+");
/* harmony import */ var _services_device_detector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/device-detector.service */ "LK1k");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/contract.service */ "oYcS");
/* harmony import */ var _services_price_converter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/price-converter.service */ "kh+M");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ux_components_nft_grid_nft_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ux-components/nft-grid/nft-grid.component */ "ZTEg");
/* harmony import */ var _pipes_short_address_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pipes/short-address.pipe */ "iYjE");














function WalletComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WalletComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.uxService.closeLeftSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WalletComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Nfts with your bids ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WalletComponent_app_nft_grid_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nft-grid", 23);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nfts", ctx_r2.nftsWithBids);
} }
function WalletComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " NFT collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function WalletComponent_app_nft_grid_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nft-grid", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nfts", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx_r4.ownedNFTs$));
} }
class WalletComponent {
    constructor(uxService, deviceDetectorService, contractService, priceConverter) {
        this.uxService = uxService;
        this.deviceDetectorService = deviceDetectorService;
        this.contractService = contractService;
        this.priceConverter = priceConverter;
        this.isMobile = !this.deviceDetectorService.isDesktop();
        this.ownedNFTs$ = this.contractService.getOwnedNFTs$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(x => console.log('owned nfts', x)));
        this.nftsWithBids = [];
        this.nftsWithBids$ = this.contractService.getNftsWithMyBids$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(x => console.log('nfts with bids', x)));
    }
    ngOnInit() {
        this.contractService.walletInfo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"])(x => !!x), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(walletInfo => this.walletInfo = walletInfo), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(walletInfo => this.priceConverter.convertOneToUSDT(Number(walletInfo.balance)))).subscribe((convertedBalance) => {
            this.convertedBalance = convertedBalance.toFixed(2);
            this.loadSalesStatus();
        });
        this.contractService.getNftsWithMyBids$().subscribe((nfts) => {
            console.log('nfts with bids', nfts);
            this.nftsWithBids = nfts;
        });
    }
    loadSalesStatus() {
        this.contractService.isApprovedForAll().then((result) => {
            this.enableSales = result;
        }).catch(e => {
            console.error(e);
        });
    }
    toggleSales() {
        if (!this.enableSales) {
            this.contractService.enableResalePermission();
        }
        else {
            this.contractService.disableResalePermission();
        }
    }
    logout() {
        this.contractService.logout();
    }
}
WalletComponent.ɵfac = function WalletComponent_Factory(t) { return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ux_service__WEBPACK_IMPORTED_MODULE_2__["UxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_device_detector_service__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_4__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_price_converter_service__WEBPACK_IMPORTED_MODULE_5__["PriceConverterService"])); };
WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WalletComponent, selectors: [["app-wallet"]], decls: 41, vars: 17, consts: [["color", "secondary"], [1, "logo-nft"], ["class", "sidenav-open fab-close", 4, "ngIf"], [1, "info-wrapper"], [1, "address-bar"], ["mat-raised-button", "", "color", "primary", "aria-label", "wallet address", 1, "wallet-button-wrapper"], ["disableRipple", "", "mat-mini-fab", "", "color", "secondary", 1, "mini-fab", 3, "click"], [1, "wallet-button"], [1, "start"], ["color", "primary", 3, "ngModel", "ngModelChange"], [1, "wallet-label"], [1, "divider-2"], [1, "description-wallet"], [1, "info-inner"], [1, "amount"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "wallet-label", 4, "ngIf"], [3, "nfts", 4, "ngIf"], [1, "sidenav-open", "fab-close"], ["mat-icon-button", "", 3, "click"], ["color", "primary"], [1, "divider"], [1, "collection-label"], [3, "nfts"]], template: function WalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " GeoNFT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, WalletComponent_div_4_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_8_listener() { return ctx.uxService.openLeftSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "shortAddress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WalletComponent_Template_mat_slide_toggle_ngModelChange_16_listener() { return ctx.toggleSales(); })("ngModelChange", function WalletComponent_Template_mat_slide_toggle_ngModelChange_16_listener($event) { return ctx.enableSales = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Sales enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Wallet status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " ONE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_31_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, WalletComponent_div_35_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, WalletComponent_app_nft_grid_36_Template, 1, 1, "app-nft-grid", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, WalletComponent_div_37_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, WalletComponent_app_nft_grid_39_Template, 2, 3, "app-nft-grid", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "async");
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 11, ctx.contractService.walletInfo$)) == null ? null : tmp_1_0.address), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.enableSales);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ~ ", ctx.convertedBalance, " $ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.walletInfo == null ? null : ctx.walletInfo.balance.substring(0, 12), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nftsWithBids.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nftsWithBids.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 13, ctx.ownedNFTs$)) == null ? null : tmp_7_0.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 15, ctx.ownedNFTs$)) == null ? null : tmp_8_0.length) > 0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _ux_components_nft_grid_nft_grid_component__WEBPACK_IMPORTED_MODULE_12__["NftGridComponent"]], pipes: [_pipes_short_address_pipe__WEBPACK_IMPORTED_MODULE_13__["ShortAddressPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".wallet-button[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 74px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.wallet-button-wrapper[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  padding-left: 16px;\n}\n\n.wallet-button-wrapper[_ngcontent-%COMP%]     .mat-button-wrapper {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  max-height: 40px;\n}\n\n.wallet-button-wrapper[_ngcontent-%COMP%]     .mat-mini-fab .mat-button-wrapper {\n  width: 30px;\n  height: 30px;\n  min-height: 30px;\n  padding: 0;\n  line-height: 30px;\n}\n\n  .mat-toolbar-row, .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  place-content: space-between;\n}\n\n.sidenav-open[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 16px;\n}\n\n.logo-nft[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  color: #62c1a9;\n  font-size: 24px;\n  font-family: \"Krona One\";\n}\n\n.info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 33%;\n  padding-top: 8px;\n}\n\n.address[_ngcontent-%COMP%] {\n  display: flex;\n  place-content: center;\n  align-items: center;\n  width: 100%;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\n.info-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  place-content: center;\n}\n\n.info-inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 38px;\n  letter-spacing: 1px;\n}\n\n.big-avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  place-content: center;\n  margin-bottom: 24px;\n}\n\n.big-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n}\n\n.amount[_ngcontent-%COMP%] {\n  padding-right: 5px;\n}\n\n.mini-fab[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n  place-content: center;\n}\n\n.mini-fab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n\n  .mat-tab-group {\n  height: calc(100% - 64px);\n}\n\n  .mat-tab-body-wrapper {\n  height: 100%;\n}\n\n.address-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  place-items: center;\n  margin-bottom: 8px;\n  padding-left: 16px;\n  padding-right: 16px;\n  box-sizing: border-box;\n}\n\n.wallet-label[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-right: 16px;\n  padding-left: 16px;\n  place-content: space-between;\n  box-sizing: border-box;\n}\n\n.wallet-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: grey;\n  letter-spacing: 1px;\n  font-family: \"Kanit\", sans-serif;\n}\n\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 62%;\n  background-color: grey;\n  opacity: 0.2;\n}\n\n.divider-2[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 65%;\n  background-color: grey;\n  opacity: 0.2;\n}\n\n.description-wallet[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  place-content: center;\n  flex-direction: column;\n}\n\n.description-wallet[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 48px;\n  width: 128px;\n  height: 44px;\n}\n\n.collection-label[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBOztFQUVFLDRCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFHSjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBS0Y7O0FBSkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUhBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBTUY7O0FBTEU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFPSjs7QUFKQTtFQUNFLGtCQUFBO0FBT0Y7O0FBTEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBUUY7O0FBUEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFTSjs7QUFOQTtFQUNFLHlCQUFBO0FBU0Y7O0FBUEE7RUFDRSxZQUFBO0FBVUY7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBV0Y7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFXRjs7QUFWRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQVlKOztBQVRBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFZRjs7QUFWQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBYUY7O0FBVkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQWFGOztBQVpFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVhBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBY0YiLCJmaWxlIjoid2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndhbGxldC1idXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA3NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ud2FsbGV0LWJ1dHRvbi13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICA6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICB9XG4gIDo6bmctZGVlcCAubWF0LW1pbmktZmFiIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbn1cbjo6bmctZGVlcCAubWF0LXRvb2xiYXItcm93LFxuLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNpZGVuYXYtb3BlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAxNnB4O1xufVxuLmxvZ28tbmZ0IHtcbiAgc3BhbiB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjogIzYyYzFhOTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiS3JvbmEgT25lXCI7XG4gIH1cbn1cbi5pbmZvLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDMzJTtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5hZGRyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5pbmZvLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxufVxuLmJpZy1hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cbn1cbi5hbW91bnQge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ubWluaS1mYWIge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtaW4td2lkdGg6IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF0LWljb24ge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XG59XG46Om5nLWRlZXAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmFkZHJlc3MtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi53YWxsZXQtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcbiAgfVxufVxuLmRpdmlkZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDYyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgb3BhY2l0eTogMC4yO1xufVxuLmRpdmlkZXItMiB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBvcGFjaXR5OiAwLjI7XG5cbn1cbi5kZXNjcmlwdGlvbi13YWxsZXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cbn1cbi5jb2xsZWN0aW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59Il19 */"] });


/***/ }),

/***/ "GLxv":
/*!************************************************!*\
  !*** ./src/app/services/map-helper.service.ts ***!
  \************************************************/
/*! exports provided: CameraState, MapHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraState", function() { return CameraState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapHelperService", function() { return MapHelperService; });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _geolocation_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geolocation-service.service */ "iYr4");




var CameraState;
(function (CameraState) {
    CameraState[CameraState["IDLE"] = 0] = "IDLE";
    CameraState[CameraState["NEARBY"] = 1] = "NEARBY";
    CameraState[CameraState["SINGLE"] = 2] = "SINGLE";
})(CameraState || (CameraState = {}));
class MapHelperService {
    constructor(locationService) {
        this.locationService = locationService;
        this.mapStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            cameraState: CameraState.IDLE,
            showUser: false,
            changeCameraState: false
        });
        this.userLocation = null;
        this.mapStatus$ = this.mapStatusSubject.asObservable();
    }
    findCurrentLocation() {
        return this.locationService.getCurrentLocation().then((coords) => {
            const lngLat = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["LngLat"](coords.longitude, coords.latitude);
            this.mapStatusSubject.next({
                cameraState: this.mapStatusSubject.getValue().cameraState,
                showUser: true,
                userLocation: lngLat,
                changeCameraState: true
            });
            return lngLat;
        });
    }
    setNearby(imageMarkers) {
        this.locationService.getCurrentLocation().then((userLocation) => {
            console.log(imageMarkers);
            this.mapStatusSubject.next({
                cameraState: CameraState.NEARBY,
                showUser: true,
                markers: imageMarkers,
                userLocation: new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["LngLat"](userLocation.longitude, userLocation.latitude),
                changeCameraState: true
            });
        });
    }
    setSingleMarker(imageMarker) {
        this.mapStatusSubject.next({
            cameraState: CameraState.SINGLE,
            showUser: false,
            markers: [imageMarker],
            userLocation: this.mapStatusSubject.getValue().userLocation,
            changeCameraState: true
        });
    }
    setMultipleMarkers(imageMarkers) {
        this.mapStatusSubject.next({
            showUser: false,
            cameraState: CameraState.IDLE,
            markers: imageMarkers,
            changeCameraState: false
        });
    }
}
MapHelperService.ɵfac = function MapHelperService_Factory(t) { return new (t || MapHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_geolocation_service_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"])); };
MapHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MapHelperService, factory: MapHelperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LK1k":
/*!*****************************************************!*\
  !*** ./src/app/services/device-detector.service.ts ***!
  \*****************************************************/
/*! exports provided: DeviceDetectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetectorService", function() { return DeviceDetectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DeviceDetectorService {
    constructor() {
        this.THRESHOLD = 1000;
    }
    isDesktop() {
        if (window) {
            if (window.innerWidth > this.THRESHOLD) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
DeviceDetectorService.ɵfac = function DeviceDetectorService_Factory(t) { return new (t || DeviceDetectorService)(); };
DeviceDetectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeviceDetectorService, factory: DeviceDetectorService.ɵfac });


/***/ }),

/***/ "QYWo":
/*!**********************************************!*\
  !*** ./src/app/curtain/curtain.component.ts ***!
  \**********************************************/
/*! exports provided: CurtainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurtainComponent", function() { return CurtainComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ux_components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ux-components/loading-button/loading-button.component */ "uzNG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");






const _c0 = ["container"];
function CurtainComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8, 9);
} }
function CurtainComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CurtainComponent {
    constructor() {
        this.connectToMetamask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = false;
        this.preparingGraphics = true;
    }
    ngAfterViewInit() {
        __webpack_require__.e(/*! import() | three */ "three").then(__webpack_require__.bind(null, /*! three */ "Womt")).then((three) => {
            console.log('three loaded');
            this.preparingGraphics = false;
            window.THREE = three;
            __webpack_require__.e(/*! import() | node_modules-vanta-src-vanta-globe */ "node_modules-vanta-src-vanta-globe").then(__webpack_require__.bind(null, /*! node_modules/vanta/src/vanta.globe */ "82Ec")).then((vanta) => {
                vanta.default({
                    el: this.vantaElement.nativeElement,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: true,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x7f3bb1,
                    THREE: three
                });
            });
        });
    }
    ngOnInit() {
        // import 3d graphics
    }
    connect() {
        this.connectToMetamask.next();
    }
}
CurtainComponent.ɵfac = function CurtainComponent_Factory(t) { return new (t || CurtainComponent)(); };
CurtainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CurtainComponent, selectors: [["app-curtain"]], viewQuery: function CurtainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.vantaElement = _t.first);
    } }, inputs: { loading: "loading" }, outputs: { connectToMetamask: "connectToMetamask" }, decls: 13, vars: 3, consts: [["id", "container", 4, "ngIf", "ngIfElse"], ["spinner", ""], [1, "content"], [1, "title"], [1, "metamask-button"], [1, "location-button"], [3, "loading", "click"], [1, "metamask-logo"], ["id", "container"], ["container", ""], [1, "align-center", "centerize"]], template: function CurtainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CurtainComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurtainComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "GeoNFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-loading-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurtainComponent_Template_app_loading_button_click_9_listener() { return ctx.connect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Connect to MetaMask");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.preparingGraphics)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ux_components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_3__["LoadingButtonComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #424242;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.metamask-logo[_ngcontent-%COMP%] {\n  background: url('MetaMask-logo.svg') center no-repeat;\n  width: 24px;\n  height: 24px;\n  background-size: contain;\n  display: flex;\n  margin-right: 5px;\n}\n\n.inner-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  place-content: center;\n  height: 100%;\n}\n\n#container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  place-content: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Krona One\";\n  margin-top: 20px;\n}\n\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 40px;\n  letter-spacing: 1px;\n  color: #62c1a9;\n}\n\n.content[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  background-color: yellow;\n  width: 64px;\n  height: 64px;\n}\n\n.content[_ngcontent-%COMP%]   .metamask-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  display: flex;\n  align-items: center;\n  place-content: center;\n}\n\n.content[_ngcontent-%COMP%]   .location-button[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  place-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2N1cnRhaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UscURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQURJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdOOztBQUFFO0VBQ0UsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUVKOztBQUFFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRUoiLCJmaWxlIjoiY3VydGFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1ldGFtYXNrLWxvZ28ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvTWV0YU1hc2stbG9nby5zdmdcIikgY2VudGVyIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5pbm5lci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvZWFydGguZ2lmXCIpIG5vLXJlcGVhdDtcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogNTUlIDUwJTtcbiAgLy8gYmFja2dyb3VuZC1zaXplOiAxMDUlIDEwNSU7XG5cbn1cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJLcm9uYSBPbmVcIjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGNvbG9yOiByZ2IoOTgsIDE5MywgMTY5KTtcbiAgICB9XG4gIH1cbiAgLmxvZ28taW1hZ2Uge1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgfVxuICAubWV0YW1hc2stYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmxvY2F0aW9uLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcblxuICB9XG5cbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('disableButton', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '20px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(0.32,0,1,1)')),
            ]),
        ] } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_ux_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ux.service */ "m+5+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/contract.service */ "oYcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wallet/wallet.component */ "EBTS");
/* harmony import */ var _map_gl_map_gl_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map-gl/map-gl.component */ "oANj");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _nft_list_nft_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nft-list/nft-list.component */ "7jSs");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _curtain_curtain_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./curtain/curtain.component */ "QYWo");



















function AppComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.uxService.closeSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AppComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-curtain", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("connectToMetamask", function AppComponent_div_16_Template_app_curtain_connectToMetamask_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.connectToMetamask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx_r4.loading);
} }
const _c0 = function (a0, a1) { return { "example-container-left": a0, "example-container-mobile-left": a1 }; };
const _c1 = function (a0, a1) { return { "example-container": a0, "example-container-mobile": a1 }; };
class AppComponent {
    constructor(uxService, dialog, media, contractService, router, snackBar) {
        this.uxService = uxService;
        this.dialog = dialog;
        this.media = media;
        this.contractService = contractService;
        this.router = router;
        this.snackBar = snackBar;
        this.curtain = true;
        this.confirmOrder = true;
        this.SidenavState = _services_ux_service__WEBPACK_IMPORTED_MODULE_2__["SidenavState"];
        this.title = 'geo-spatia';
        this.confirmOrderOpened = false;
        this.loading = false;
        this.subscriptions = [];
        this.nfts = [];
        // this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        // this.isMobile.addListener(this.mobileQueryListener);
        // console.log("mobileSidenav: ", this.isMobile, "mobilequerylistener: ", this.mobileQueryListener);
    }
    ngOnInit() {
        const wasStarted = window.localStorage.getItem('wasStarted');
        if (wasStarted) {
            this.connectToMetamask();
        }
        this.isMobile = this.media.matchMedia('(max-width: 700px)').matches;
        this.uxService.sidenavOpened$.subscribe((sideNavOpened) => {
            this.rightSidenavOpened = this.isMobile
                ? sideNavOpened.rightSidenavState === _services_ux_service__WEBPACK_IMPORTED_MODULE_2__["SidenavState"].ACTIVE
                    ? true
                    : false
                : sideNavOpened.rightSidenavState === _services_ux_service__WEBPACK_IMPORTED_MODULE_2__["SidenavState"].HIDDEN ||
                    sideNavOpened.rightSidenavState === _services_ux_service__WEBPACK_IMPORTED_MODULE_2__["SidenavState"].ACTIVE
                    ? true
                    : false;
            this.leftSidenavOpened = this.isMobile
                ? sideNavOpened.leftSidenavState === _services_ux_service__WEBPACK_IMPORTED_MODULE_2__["SidenavState"].ACTIVE
                    ? true
                    : false
                : sideNavOpened.leftSidenavState === _services_ux_service__WEBPACK_IMPORTED_MODULE_2__["SidenavState"].HIDDEN ||
                    sideNavOpened.leftSidenavState === _services_ux_service__WEBPACK_IMPORTED_MODULE_2__["SidenavState"].ACTIVE
                    ? true
                    : false;
        });
        this.subscriptions.push(this.contractService.nfts$.subscribe((nfts) => {
            this.nfts = nfts;
        }));
    }
    connectToMetamask() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            window.localStorage.setItem('wasStarted', 'true');
            try {
                this.loading = true;
                yield this.contractService.init();
                this.subscriptions.push(this.contractService.getNftsToRetrieve$()
                    .subscribe((nftsToRetrieve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (nftsToRetrieve.length > 0) {
                        console.log('current url', this.router.url);
                        // if (this.router.url !== '/retrieve-nfts') {
                        yield this.router.navigate(['/', 'retrieve-nfts']);
                        console.log('nftsToRetrieve', nftsToRetrieve);
                        // }
                        this.curtain = false;
                    }
                    else {
                        if (this.router.url === '/') {
                            yield this.router.navigate(['/', 'all-nfts']);
                        }
                        this.curtain = false;
                        setTimeout(() => {
                            this.loading = false;
                        }, 2000);
                    }
                })));
                // convert nfts to imagemarkers
            }
            catch (error) {
                console.log('error happened');
                this.snackBar.open(error, 'Dismiss', {
                    duration: 3000,
                    verticalPosition: 'top',
                    panelClass: ['snackbar-error'],
                });
                console.error(error);
            }
        });
    }
    buyNft() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.navigate(['/', 'nft-bought']);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_ux_service__WEBPACK_IMPORTED_MODULE_2__["UxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_6__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 14, consts: [[1, "main-wrapper"], ["mode", "side", 3, "opened", "ngClass"], ["drawer2", ""], ["outletRef", "outlet"], ["position", "end", "mode", "side", 3, "ngClass", "opened"], ["drawer", ""], ["class", "sidenav-open fab-close", 4, "ngIf"], ["color", "secondary"], [1, "toolbar-label"], [1, "toolbar-span"], [3, "nfts"], ["class", "curtain", 4, "ngIf"], [1, "sidenav-open", "fab-close"], ["mat-icon-button", "", 3, "click"], ["color", "primary"], [1, "curtain"], [3, "loading", "connectToMetamask"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-map-gl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "router-outlet", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-drawer", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AppComponent_div_10_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-toolbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "NFTs Layer #1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-nft-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AppComponent_div_16_Template, 2, 2, "div", 11);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("opened", ctx.leftSidenavOpened)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c0, !ctx.isMobile, ctx.isMobile));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideUpIn", _r1.isActivated ? _r1.activatedRoute : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](11, _c1, !ctx.isMobile, ctx.isMobile))("opened", ctx.rightSidenavOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nfts", ctx.nfts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.curtain);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_11__["WalletComponent"], _map_gl_map_gl_component__WEBPACK_IMPORTED_MODULE_12__["MapGlComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbar"], _nft_list_nft_list_component__WEBPACK_IMPORTED_MODULE_14__["NftListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _curtain_curtain_component__WEBPACK_IMPORTED_MODULE_17__["CurtainComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 100%;\n}\n\n.example-container-mobile[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.example-container-left[_ngcontent-%COMP%] {\n  width: 23%;\n  height: 100%;\n}\n\n.example-container-mobile-left[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.start[_ngcontent-%COMP%] {\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 1;\n}\n\n.end[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  flex-basis: content;\n  flex-grow: 0;\n  flex-shrink: 0;\n  margin-left: -4px;\n  font-weight: 600;\n}\n\n.curtain[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.toolbar-label[_ngcontent-%COMP%] {\n  display: flex;\n  place-items: center;\n  justify-items: end;\n  height: 100%;\n}\n\n.toolbar-label[_ngcontent-%COMP%]   .toolbar-span[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  font-size: 16px;\n  color: grey;\n  font-family: \"Kanit\", sans-serif;\n}\n\n  .mat-drawer-content {\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU9GOztBQUpBO0VBQ0UsV0FBQTtBQU9GOztBQUpBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBUUY7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFRRjs7QUFQRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQVNKOztBQU5BO0VBQ0Usa0JBQUE7QUFTRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5leGFtcGxlLWNvbnRhaW5lci1tb2JpbGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmV4YW1wbGUtY29udGFpbmVyLWxlZnQge1xuICB3aWR0aDogMjMlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZXhhbXBsZS1jb250YWluZXItbW9iaWxlLWxlZnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW4td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdGFydCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmbGV4LXNocmluazogMTtcbn1cbi5lbmQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmbGV4LWJhc2lzOiBjb250ZW50O1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmN1cnRhaW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4udG9vbGJhci1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAudG9vbGJhci1zcGFuIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcbiAgfVxufVxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s cubic-bezier(0.32,0,1,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' })),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUpIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)', opacity: 0 })], {
                        optional: true
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)', opacity: 0 }))
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'transitionY(100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms cubic-bezier(0.32,0,1,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
                    ], { optional: true })
                ])
            ]),
        ] } });


/***/ }),

/***/ "TiO4":
/*!****************************************************!*\
  !*** ./src/app/single-nft/single-nft.component.ts ***!
  \****************************************************/
/*! exports provided: SingleNftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleNftComponent", function() { return SingleNftComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contract.service */ "oYcS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_map_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/map-helper.service */ "GLxv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _ux_components_price_picker_price_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ux-components/price-picker/price-picker.component */ "svfh");
/* harmony import */ var _ux_components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ux-components/date-picker/date-picker.component */ "h8Cj");
/* harmony import */ var _ux_components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ux-components/loading-button/loading-button.component */ "uzNG");














function SingleNftComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Time left:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r1.endedPercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.Math.floor((ctx_r1.timeLeft == null ? null : ctx_r1.timeLeft.getTime()) / (1000 * 60 * 60 * 24)), " days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", ctx_r1.timeLeft == null ? null : ctx_r1.timeLeft.getUTCHours(), "h : ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 5, ctx_r1.timeLeft, "mm"), "m : ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 8, ctx_r1.timeLeft, "ss"), "s");
} }
function SingleNftComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r2.nft.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.nft.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.minPrice, " ONE");
} }
function SingleNftComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Your bet is the highest ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SingleNftComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " You are the owner of this NFT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SingleNftComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.nft.ownerAddress, " ");
} }
function SingleNftComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Put your price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-price-picker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("bidChanged", function SingleNftComponent_div_0_div_15_Template_app_price_picker_bidChanged_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r11.bidChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("minPrice", ctx_r6.minPrice);
} }
function SingleNftComponent_div_0_div_16_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Expiration date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-date-picker", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateSelected", function SingleNftComponent_div_0_div_16_div_7_Template_app_date_picker_dateSelected_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r14.resaleDateSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SingleNftComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Put your price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "app-price-picker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("bidChanged", function SingleNftComponent_div_0_div_16_Template_app_price_picker_bidChanged_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r16.resalePriceChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SingleNftComponent_div_0_div_16_div_7_Template, 6, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("minPrice", ctx_r7.minPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.nft.owner);
} }
function SingleNftComponent_div_0_app_loading_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-loading-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SingleNftComponent_div_0_app_loading_button_18_Template_app_loading_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r18.submitBid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "shopping_basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Bid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx_r8.buying);
} }
function SingleNftComponent_div_0_app_loading_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-loading-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SingleNftComponent_div_0_app_loading_button_19_Template_app_loading_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.submitResale(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "shopping_basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Resale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("loading", ctx_r9.resaling);
} }
function SingleNftComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r10.nft.owner ? "Owned" : "Sold", " ");
} }
const _c0 = function (a0, a1) { return { "main-container-small": a0, "main-container-big": a1 }; };
const _c1 = function () { return ["/", "all-nfts"]; };
function SingleNftComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SingleNftComponent_div_0_div_10_Template, 11, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SingleNftComponent_div_0_div_11_Template, 9, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, SingleNftComponent_div_0_div_12_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SingleNftComponent_div_0_div_13_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SingleNftComponent_div_0_div_14_Template, 3, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SingleNftComponent_div_0_div_15_Template, 6, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SingleNftComponent_div_0_div_16_Template, 8, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SingleNftComponent_div_0_app_loading_button_18_Template, 5, 1, "app-loading-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SingleNftComponent_div_0_app_loading_button_19_Template, 5, 1, "app-loading-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SingleNftComponent_div_0_div_20_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](12, _c0, !ctx_r0.SoldStatus.RESALE || !ctx_r0.nft.owner && (ctx_r0.nft.status === 0 || !ctx_r0.timeLeft), ctx_r0.SoldStatus.RESALE));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.timeLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nft);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nft && !ctx_r0.nft.owner && ctx_r0.nft.bidInfo && ctx_r0.nft.bidInfo.bidderAddress.toLowerCase() === ctx_r0.contractService.selectedAddress.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nft.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.nft.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(!ctx_r0.nft.owner && (ctx_r0.nft.status === 0 || !ctx_r0.timeLeft)) && !ctx_r0.latestBidIsOwn && !ctx_r0.nft.resaleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nft.owner || ctx_r0.nft.resaleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.nft.owner && !(!ctx_r0.nft.owner && (ctx_r0.nft.status === 0 || !ctx_r0.timeLeft)) && !ctx_r0.latestBidIsOwn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nft.owner && ctx_r0.nft.status !== 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.nft.owner && (ctx_r0.nft.status === 0 || !ctx_r0.timeLeft));
} }
class SingleNftComponent {
    constructor(activatedRoute, router, contractService, mapHelperService, changeDetector) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.contractService = contractService;
        this.mapHelperService = mapHelperService;
        this.changeDetector = changeDetector;
        this.Math = Math;
        this.subscriptions = [];
        this.SoldStatus = _services_contract_service__WEBPACK_IMPORTED_MODULE_2__["SoldStatus"];
        this.buying = false;
        this.resaling = false;
        this.newBid = -1;
        this.resalePrice = 0.1;
        this.minPrice = 0;
        this.resaleForm = {
            resalePrice: 0,
            resaleDate: new Date(Date.now())
        };
    }
    ngOnInit() {
        this.subscriptions.push(this.activatedRoute.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((param) => this.contractService.getNftById$(Number(param.id))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(x => console.log('nft', x))).subscribe((nft) => {
            this.nft = nft;
            if (!this.nft) {
                this.router.navigate(['/', 'all-nfts']);
                return;
            }
            console.log(nft);
            this.minPrice = this.getMinPrice();
            this.mapHelperService.setSingleMarker(nft);
            this.calculateTimeLeft();
            this.latestBidIsOwn = nft.bidInfo && nft.bidInfo.bidderAddress.toLowerCase() === this.contractService.selectedAddress.toLowerCase();
            this.changeDetector.detectChanges();
        }));
    }
    calculateTimeLeft() {
        console.log('single-nft sale time', this.nft.saleTime);
        if (Math.max(this.nft.saleTime.getTime() - Date.now(), 0) === 0) {
            this.timeLeft = null;
        }
        else {
            this.timeLeft = new Date(Math.max(this.nft.saleTime.getTime() - Date.now(), 0));
        }
        console.log(this.timeLeft);
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000, 1000).subscribe(() => {
            if (this.timeLeft) {
                this.timeLeft = new Date(this.timeLeft.getTime() - 1000);
                const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
                this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
                this.changeDetector.detectChanges();
            }
        }));
    }
    submitBid() {
        console.log('new bid', this.newBid);
        if (this.nft.resaleId) {
            this.contractService.bidResale(this.nft.resaleId, String(this.nft.id), this.contractService.oneToWei(String(this.newBid)));
        }
        else {
            this.contractService.bidNFT(this.nft.id, this.contractService.oneToWei(String(this.newBid)));
        }
        this.buying = true;
        this.handleTransaction();
    }
    resalePriceChanged(newPrice) {
        this.resaleForm.resalePrice = newPrice;
        this.newBid = newPrice;
    }
    resaleDateSelected($event) {
        this.resaleForm.resaleDate = $event;
    }
    submitResale() {
        this.resaling = true;
        this.contractService.resaleNft(this.contractService.oneToWei(String(this.resaleForm.resalePrice)), String(this.nft.id), this.resaleForm.resaleDate.getTime());
        // listen to transactions$ to change view
        this.handleTransaction();
    }
    getMinPrice() {
        var _a;
        if (!this.nft) {
            return null;
        }
        const price = this.nft.bidInfo ? (this.nft.bidInfo.highestBid) : ((_a = this.nft) === null || _a === void 0 ? void 0 : _a.price);
        return Number(this.contractService.weiToOne(price));
    }
    bidChanged(newBid) {
        this.newBid = newBid;
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
    handleTransaction() {
        this.subscriptions.push(this.contractService.transactions$.subscribe((transactionEvent) => {
            if (transactionEvent && transactionEvent.success !== undefined) {
                this.router.navigate(['/', 'transaction-result'], { state: Object.assign({ closable: true }, transactionEvent) });
            }
        }, (err) => {
            this.router.navigate(['/', 'transaction-result'], { state: { success: false, closable: true } });
        }));
    }
}
SingleNftComponent.ɵfac = function SingleNftComponent_Factory(t) { return new (t || SingleNftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_map_helper_service__WEBPACK_IMPORTED_MODULE_5__["MapHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SingleNftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SingleNftComponent, selectors: [["ng-component"]], decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "main-container-inner"], [1, "top-wrapper"], [1, "top-label"], [1, "close-wrapper"], ["mat-icon-button", "", 3, "routerLink"], ["color", "primary"], ["class", "progress", 4, "ngIf"], ["class", "nft-name", 4, "ngIf"], ["class", "highest-label", 4, "ngIf"], ["class", "bid-wrapper", 4, "ngIf"], [4, "ngIf"], [1, "buy-button"], [3, "loading", "click", 4, "ngIf"], ["color", "accent", 3, "loading", "click", 4, "ngIf"], ["class", "sold", 4, "ngIf"], [1, "progress"], ["mode", "determinate", 3, "value"], [1, "time"], [1, "nft-name"], ["mat-fab", "", "viewBox", "0 0 300 300", 3, "innerHTML"], [1, "description"], [1, "nft-name-2"], [1, "price"], [1, "mat-h3"], [1, "highest-label"], [1, "bid-wrapper"], [1, "bid-label"], [1, "price-picker"], [3, "minPrice", "bidChanged"], [1, "resale-wrapper"], ["class", "resale-wrapper", 4, "ngIf"], [1, "date-picker"], [3, "dateSelected"], [3, "loading", "click"], [1, "button-label"], ["color", "accent", 3, "loading", "click"], [1, "sold"]], template: function SingleNftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SingleNftComponent_div_0_Template, 21, 16, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nft);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"], _ux_components_price_picker_price_picker_component__WEBPACK_IMPORTED_MODULE_10__["PricePickerComponent"], _ux_components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_11__["DatePickerComponent"], _ux_components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_12__["LoadingButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".main-container-big[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 45%;\n  background-color: #212121;\n  opacity: 0.9;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.main-container-small[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 35%;\n  background-color: #212121;\n  opacity: 0.9;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.main-container-inner[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  [_nghost-%COMP%] {\n    width: 60%;\n  }\n}\n\n.close-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: flex-end;\n  padding-right: 32px;\n}\n\n.top-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  place-content: space-between;\n}\n\n.top-label[_ngcontent-%COMP%] {\n  padding-left: 32px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.top-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 32px;\n  letter-spacing: 1px;\n  color: grey;\n  font-family: \"Kanit\", sans-serif;\n}\n\n.nft-image[_ngcontent-%COMP%] {\n  width: 70px;\n  display: flex;\n  overflow: hidden;\n  border: 1px solid white;\n  border-radius: 50%;\n}\n\n.description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  place-content: space-between;\n  align-items: center;\n  width: calc(100% - 98px);\n}\n\n.mat-h1[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.bid-label[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  margin-top: 16px;\n  margin-right: 16px;\n  padding-left: 32px;\n  width: 50%;\n  display: flex;\n  align-items: center;\n}\n\n.bid-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.bid-wrapper[_ngcontent-%COMP%], .resale-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  place-content: space-between;\n  margin-top: 24px;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  place-content: center;\n  margin-top: 40px;\n  position: absolute;\n  width: 100%;\n  bottom: 8px;\n}\n\n.buy-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border-radius: 24px;\n}\n\n.buy-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.buy-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  margin-right: 8px;\n}\n\n  .mat-button-wrapper {\n  display: flex;\n  align-items: center;\n  place-content: center;\n}\n\n.price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.nft-name[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  align-items: center;\n  display: flex;\n  padding-left: 32px;\n  margin-bottom: 16px;\n}\n\n.nft-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.nft-name-2[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  align-items: center;\n  display: flex;\n  padding-left: 32px;\n  height: 37%;\n}\n\n.nft-name-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.mat-h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0 0 !important;\n}\n\n.divider-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 100%;\n  background-color: grey;\n  opacity: 0.2;\n}\n\n.location-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  app-loading-button mat-icon {\n  margin-right: 10px;\n}\n\n.sold[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  margin-top: 100px;\n  width: 100%;\n}\n\n.sold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  letter-spacing: 1px;\n}\n\n.more-or-less[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: black;\n}\n\n.number[_ngcontent-%COMP%] {\n  margin: 100px;\n}\n\n.minus[_ngcontent-%COMP%], .plus[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background: #f2f2f2;\n  border-radius: 4px;\n  padding: 8px 5px 8px 5px;\n  border: 1px solid #ddd;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.value[_ngcontent-%COMP%] {\n  height: 34px;\n  width: 100px;\n  text-align: center;\n  font-size: 26px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.price-picker[_ngcontent-%COMP%] {\n  place-items: center;\n  place-content: center;\n  justify-content: center;\n  align-items: center;\n  align-self: center;\n  align-content: center;\n  padding-right: 32px;\n  width: 50%;\n  display: flex;\n}\n\n.progress-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  flex-direction: column;\n}\n\n.time[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  place-content: flex-end;\n  align-items: center;\n  margin-bottom: 8px;\n  margin-top: 4px;\n  padding-right: 16px;\n}\n\n.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 16px;\n  color: #9c27b0;\n}\n\n.highest-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  place-content: flex-end;\n  width: 100%;\n  margin-top: 8px;\n}\n\n.highest-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 43px;\n  font-size: 20px;\n  letter-spacing: 1px;\n}\n\n.date-picker[_ngcontent-%COMP%] {\n  margin-right: 32px;\n  width: 50%;\n  display: flex;\n  align-items: center;\n  place-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NpbmdsZS1uZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0U7SUFDRSxXQUFBO0VBSUY7QUFDRjs7QUFGQTtFQUNFO0lBQ0UsVUFBQTtFQUlGO0FBQ0Y7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSUY7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUtKOztBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFKQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU9GOztBQU5FO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0FBT0o7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFRRjs7QUFQRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFTTjs7QUFQSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFTTjs7QUFMQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBUUY7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFTRjs7QUFSRTtFQUNFLGlCQUFBO0FBVUo7O0FBUEE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFURTtFQUNFLGVBQUE7QUFXSjs7QUFSQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBV0Y7O0FBVEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFQQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQVVGOztBQVJBO0VBQ0UsYUFBQTtBQVdGOztBQVRBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFZRjs7QUFWQTtFQUNFLFdBQUE7QUFhRjs7QUFURTtFQUNFLGtCQUFBO0FBWUo7O0FBVEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVlGOztBQVhFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBYUo7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQWFGOztBQVhBO0VBQ0UsYUFBQTtBQWNGOztBQVpBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFlRjs7QUFiQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFnQkY7O0FBZEE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBaUJGOztBQWZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQW1CRjs7QUFsQkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBb0JKOztBQWhCQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFtQkY7O0FBbEJFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFvQko7O0FBakJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFvQkYiLCJmaWxlIjoic2luZ2xlLW5mdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lci1iaWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA3MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm1haW4tY29udGFpbmVyLXNtYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMzUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5tYWluLWNvbnRhaW5lci1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XG4gIDpob3N0IHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG4uY2xvc2Utd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuXG59XG4udG9wLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnRvcC1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcbiAgfVxufVxuXG4ubmZ0LWltYWdlIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gOThweCk7XG59XG4ubWF0LWgxIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmJpZC1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cbi5iaWQtd3JhcHBlciwucmVzYWxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDoyNHB4O1xufVxuLmJ1eS1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogOHB4O1xuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIH1cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gIH1cbn1cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuLnByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cbi5uZnQtbmFtZSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuLm5mdC1uYW1lLTIge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBoZWlnaHQ6IDM3JTtcbiAgXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4ubWF0LWgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDAgMCAhaW1wb3J0YW50O1xufVxuLmRpdmlkZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgb3BhY2l0eTogMC4yO1xufVxuLmxvY2F0aW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgYXBwLWxvYWRpbmctYnV0dG9uIHtcbiAgbWF0LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuLnNvbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbn1cbi5tb3JlLW9yLWxlc3Mge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5udW1iZXIge1xuICBtYXJnaW46IDEwMHB4O1xufVxuLm1pbnVzLFxuLnBsdXMge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDhweCA1cHggOHB4IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udmFsdWUge1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnByaWNlLXBpY2tlciB7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnByb2dyZXNzLXNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udGltZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgY29sb3I6ICM5YzI3YjA7XG4gIH1cblxufVxuLmhpZ2hlc3QtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZW5kO1xuICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0M3B4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG59XG4uZGF0ZS1waWNrZXIge1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_price_converter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/price-converter.service */ "kh+M");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mapbox-gl */ "Q2BN");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _single_nft_single_nft_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./single-nft/single-nft.component */ "TiO4");
/* harmony import */ var _curtain_curtain_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./curtain/curtain.component */ "QYWo");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog/dialog.component */ "ZYp2");
/* harmony import */ var _map_gl_map_gl_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./map-gl/map-gl.component */ "oANj");
/* harmony import */ var _nft_list_nft_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nft-list/nft-list.component */ "7jSs");
/* harmony import */ var _pipes_short_address_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/short-address.pipe */ "iYjE");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/contract.service */ "oYcS");
/* harmony import */ var _services_device_detector_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/device-detector.service */ "LK1k");
/* harmony import */ var _services_geolocation_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/geolocation-service.service */ "iYr4");
/* harmony import */ var _services_svggenerator_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/svggenerator.service */ "9eaZ");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./start/start.component */ "ss/J");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./wallet/wallet.component */ "EBTS");
/* harmony import */ var _transaction_result_transaction_result_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./transaction-result/transaction-result.component */ "jAUS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pipes_wei_to_one_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/wei-to-one.pipe */ "cOok");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _all_nfts_all_nfts_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./all-nfts/all-nfts.component */ "21Hg");
/* harmony import */ var _ux_components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ux-components/loading-button/loading-button.component */ "uzNG");
/* harmony import */ var _ux_components_nft_marker_nft_marker_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ux-components/nft-marker/nft-marker.component */ "lka0");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./sell/sell.component */ "hNKM");
/* harmony import */ var _ux_components_button_button_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ux-components/button/button.component */ "bEAP");
/* harmony import */ var _ux_components_nft_list_item_nft_list_item_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ux-components/nft-list-item/nft-list-item.component */ "fHUf");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ux_components_price_picker_price_picker_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ux-components/price-picker/price-picker.component */ "svfh");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _ux_components_nft_grid_nft_grid_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./ux-components/nft-grid/nft-grid.component */ "ZTEg");
/* harmony import */ var _ux_components_nft_grid_item_nft_grid_item_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ux-components/nft-grid-item/nft-grid-item.component */ "tWU4");
/* harmony import */ var _retrieve_nfts_retrieve_nfts_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./retrieve-nfts/retrieve-nfts.component */ "6mYC");
/* harmony import */ var _services_guards_route_lock_guard__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./services/guards/route-lock.guard */ "1wIp");
/* harmony import */ var _ux_components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ux-components/date-picker/date-picker.component */ "h8Cj");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/core */ "fXoL");





















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵdefineInjector"]({ providers: [
        _services_geolocation_service_service__WEBPACK_IMPORTED_MODULE_22__["GeolocationService"],
        ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_11__["MapService"],
        _services_svggenerator_service__WEBPACK_IMPORTED_MODULE_23__["SVGGeneratorService"],
        _services_contract_service__WEBPACK_IMPORTED_MODULE_20__["ContractService"],
        _services_device_detector_service__WEBPACK_IMPORTED_MODULE_21__["DeviceDetectorService"],
        _services_price_converter_service__WEBPACK_IMPORTED_MODULE_0__["PriceConverterService"],
        _services_guards_route_lock_guard__WEBPACK_IMPORTED_MODULE_45__["RouteLockGuard"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__["MatChipsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__["MatButtonToggleModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_41__["MatProgressBarModule"],
            ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_11__["NgxMapboxGLModule"].withConfig({
                accessToken: 'pk.eyJ1IjoidGhlY3liZXJkM20wbiIsImEiOiJja2FpcnNyeXowM21tMndwamxyZjU5ajJpIn0.TjWqQxlCdOZmoVFLFJBRsA',
            }),
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__["FormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_47__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_49__["MatNativeDateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__["MatFormFieldModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_50__["NgxMatNativeDateModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_50__["NgxMatTimepickerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_51__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__["DialogComponent"],
        _map_gl_map_gl_component__WEBPACK_IMPORTED_MODULE_17__["MapGlComponent"],
        _single_nft_single_nft_component__WEBPACK_IMPORTED_MODULE_14__["SingleNftComponent"],
        _start_start_component__WEBPACK_IMPORTED_MODULE_24__["StartComponent"],
        _all_nfts_all_nfts_component__WEBPACK_IMPORTED_MODULE_30__["AllNFTsComponent"],
        _nft_list_nft_list_component__WEBPACK_IMPORTED_MODULE_18__["NftListComponent"],
        _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_25__["WalletComponent"],
        _pipes_short_address_pipe__WEBPACK_IMPORTED_MODULE_19__["ShortAddressPipe"],
        _curtain_curtain_component__WEBPACK_IMPORTED_MODULE_15__["CurtainComponent"],
        _transaction_result_transaction_result_component__WEBPACK_IMPORTED_MODULE_26__["TransactionResultComponent"],
        _pipes_wei_to_one_pipe__WEBPACK_IMPORTED_MODULE_28__["WeiToOnePipe"],
        _ux_components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_31__["LoadingButtonComponent"],
        _ux_components_nft_marker_nft_marker_component__WEBPACK_IMPORTED_MODULE_32__["NftMarkerComponent"],
        _sell_sell_component__WEBPACK_IMPORTED_MODULE_33__["SellComponent"],
        _ux_components_button_button_component__WEBPACK_IMPORTED_MODULE_34__["ButtonComponent"],
        _ux_components_nft_list_item_nft_list_item_component__WEBPACK_IMPORTED_MODULE_35__["NftListItemComponent"],
        _ux_components_price_picker_price_picker_component__WEBPACK_IMPORTED_MODULE_39__["PricePickerComponent"],
        _ux_components_nft_grid_nft_grid_component__WEBPACK_IMPORTED_MODULE_42__["NftGridComponent"],
        _ux_components_nft_grid_item_nft_grid_item_component__WEBPACK_IMPORTED_MODULE_43__["NftGridItemComponent"],
        _retrieve_nfts_retrieve_nfts_component__WEBPACK_IMPORTED_MODULE_44__["RetrieveNftsComponent"],
        _ux_components_date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_46__["DatePickerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__["MatChipsModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__["MatButtonToggleModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_41__["MatProgressBarModule"], ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_11__["NgxMapboxGLModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__["MatSlideToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_38__["FormsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_47__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_49__["MatNativeDateModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__["MatFormFieldModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_50__["NgxMatNativeDateModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_50__["NgxMatTimepickerModule"]] }); })();


/***/ }),

/***/ "ZTEg":
/*!**************************************************************!*\
  !*** ./src/app/ux-components/nft-grid/nft-grid.component.ts ***!
  \**************************************************************/
/*! exports provided: NftGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftGridComponent", function() { return NftGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nft_grid_item_nft_grid_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nft-grid-item/nft-grid-item.component */ "tWU4");



function NftGridComponent_div_0_app_nft_grid_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nft-grid-item", 3);
} if (rf & 2) {
    const nft_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nftId", nft_r1.id);
} }
function NftGridComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NftGridComponent_div_0_app_nft_grid_item_1_Template, 1, 1, "app-nft-grid-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nft_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", nft_r1);
} }
class NftGridComponent {
    constructor() { }
    ngOnInit() {
    }
    openNft() { }
}
NftGridComponent.ɵfac = function NftGridComponent_Factory(t) { return new (t || NftGridComponent)(); };
NftGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NftGridComponent, selectors: [["app-nft-grid"]], inputs: { nfts: "nfts" }, decls: 1, vars: 1, consts: [["class", "container", 4, "ngFor", "ngForOf"], [1, "container"], [3, "nftId", 4, "ngIf"], [3, "nftId"]], template: function NftGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NftGridComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nfts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _nft_grid_item_nft_grid_item_component__WEBPACK_IMPORTED_MODULE_2__["NftGridItemComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 20%;\n  flex-direction: row;\n  padding: 8px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 4px;\n  box-sizing: border-box;\n  align-items: center;\n  place-content: flex-start;\n}\n\n.container-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n}\n\n.label-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  margin-top: 4px;\n}\n\n.label-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25mdC1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBRUksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR1IiLCJmaWxlIjoibmZ0LWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWluLWhlaWdodDogMjAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogOHB4O1xufVxuLmNpcmNsZSB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIFxufVxuLmNvbnRhaW5lciB7XG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGxhY2UtY29udGVudDogZmxleC1zdGFydDtcblxufVxuLmNvbnRhaW5lci1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEycHg7XG59XG4ubGFiZWwtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "ZYp2":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class DialogComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    ngOnInit() { }
    openSnackBar() {
        this.snackBar.open('Address copied', 'Dismiss', {
            duration: 3000
        });
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 25, vars: 0, consts: [[1, "header"], [1, "mat-h2"], ["mat-icon-button", "", "mat-dialog-close", ""], [1, "wallet"], [1, "mat-h4"], [1, "buttons"], ["mat-button", "", "color", "secondary"], ["mat-button", "", "color", "secondary", 3, "click"], [1, "logout"], ["mat-raised-button", "", "color", "primary"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your wallet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 6Tgdf6fDHDbh7GhBF7YGVGGHVGVgghjtfrfg77YFGBui78TFd4R4FEdE2g ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " View on BscScan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_15_listener() { return ctx.openSnackBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Copy address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".header[_ngcontent-%COMP%] {\n  padding: 24px 24px 16px 24px;\n  border-bottom: 1px solid #afafaf;\n  display: flex;\n  place-content: space-between;\n  flex-direction: row;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .mat-h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n  .mat-dialog-container {\n  padding: 0;\n  border-radius: 24px;\n}\n  .cdk-overlay-pane {\n  min-width: 80%;\n}\n.wallet[_ngcontent-%COMP%] {\n  padding: 16px 24px 16px 24px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 0px 24px 16px 24px;\n  place-content: space-between;\n  align-items: center;\n}\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  width: 49%;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  margin-left: 2px;\n}\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n  .mat-button-wrapper {\n  display: flex;\n  align-items: center;\n  place-content: center;\n}\n.logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  padding: 0px 24px 24px 24px;\n}\n.logout[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 24px;\n  width: 50%;\n}\n.logout[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLFNBQUE7QUFFUjtBQUNBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBQTtFQUNJLGNBQUE7QUFHSjtBQURBO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFJSjtBQUZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBS0o7QUFKSTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFNUjtBQUxRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFPWjtBQUxRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBT1o7QUFIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBTUo7QUFKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFPSjtBQU5JO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FBUVI7QUFQUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVNaIiwiZmlsZSI6ImRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDI0cHggMjRweCAxNnB4IDI0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzUsIDE3NSwgMTc1KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5tYXQtaDIge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xufVxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICBtaW4td2lkdGg6IDgwJTtcbn1cbi53YWxsZXQge1xuICAgIHBhZGRpbmc6IDE2cHggMjRweCAxNnB4IDI0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAwcHggMjRweCAxNnB4IDI0cHg7XG4gICAgcGxhY2UtY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgIHdpZHRoOiA0OSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG59XG46Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDI0cHggMjRweCAyNHB4O1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "bEAP":
/*!**********************************************************!*\
  !*** ./src/app/ux-components/button/button.component.ts ***!
  \**********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], decls: 2, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "button works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ "cOok":
/*!******************************************!*\
  !*** ./src/app/pipes/wei-to-one.pipe.ts ***!
  \******************************************/
/*! exports provided: WeiToOnePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeiToOnePipe", function() { return WeiToOnePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/contract.service */ "oYcS");


class WeiToOnePipe {
    constructor(contractService) {
        this.contractService = contractService;
    }
    transform(value, ...args) {
        return Number(this.contractService.weiToOne(value));
    }
}
WeiToOnePipe.ɵfac = function WeiToOnePipe_Factory(t) { return new (t || WeiToOnePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"])); };
WeiToOnePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "weiToOne", type: WeiToOnePipe, pure: true });


/***/ }),

/***/ "fHUf":
/*!************************************************************************!*\
  !*** ./src/app/ux-components/nft-list-item/nft-list-item.component.ts ***!
  \************************************************************************/
/*! exports provided: NftListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftListItemComponent", function() { return NftListItemComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contract.service */ "oYcS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _pipes_wei_to_one_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/wei-to-one.pipe */ "cOok");










function NftListItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Time left:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r0.nft.status === ctx_r0.SoldStatus.RESALE ? "accent" : "primary")("value", ctx_r0.endedPercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.nft.status === ctx_r0.SoldStatus.RESALE ? "accent" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.nft.status === ctx_r0.SoldStatus.RESALE ? "accent" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.Math.floor(ctx_r0.timeLeft.getTime() / (1000 * 60 * 60 * 24)), " days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.nft.status === ctx_r0.SoldStatus.RESALE ? "accent" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ctx_r0.timeLeft.getUTCHours(), "h : ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 9, ctx_r0.timeLeft, "mm"), "m : ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 12, ctx_r0.timeLeft, "ss"), "s");
} }
function NftListItemComponent_mat_chip_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Owned");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NftListItemComponent_mat_chip_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "On sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NftListItemComponent_mat_chip_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Resale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NftListItemComponent_mat_chip_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Highest Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NftListItemComponent_mat_chip_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Outbidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NftListItemComponent_mat_chip_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sold");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NftListItemComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "shopping_basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Bid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return [a0]; };
class NftListItemComponent {
    constructor(changeDetector, contractService) {
        this.changeDetector = changeDetector;
        this.contractService = contractService;
        this.subscriptions = [];
        this.Math = Math;
        this.SoldStatus = src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["SoldStatus"];
        this.passed = false;
        this.hasHighestBid = false;
        this.latestBidIsOwn = false;
    }
    ngOnInit() {
        // this.contractService.getNftById
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000, 1000).subscribe(() => {
            if (this.timeLeft && this.timeLeft.getTime() > 1000) {
                this.timeLeft = new Date(this.timeLeft.getTime() - 1000);
                const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
                this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
                this.changeDetector.detectChanges();
            }
            else {
                this.timePassed();
            }
        }));
        this.subscriptions.push(this.contractService.getNftById$(this.nftId).subscribe((nft) => {
            this.nft = nft;
            this.calculateTimeLeft();
            this.latestBidIsOwn = nft.bidInfo && nft.bidInfo.bidderAddress.toLowerCase() === this.contractService.selectedAddress.toLowerCase();
            this.changeDetector.detectChanges();
        }));
    }
    calculateTimeLeft() {
        if (this.nft.saleTime.getTime() < Date.now()) {
            this.timeLeft = null;
        }
        else {
            this.timeLeft = new Date(Math.max(this.nft.saleTime.getTime() - Date.now(), 0));
        }
        if (this.timeLeft) {
        }
    }
    isAddressOwn(address) {
        var _a;
        if (!this.contractService.selectedAddress || !address) {
            return false;
        }
        return ((_a = this.contractService.selectedAddress) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === address.toLowerCase();
    }
    timePassed() {
        if (!this.passed) {
            this.passed = true;
            setTimeout(() => {
                this.contractService.refresh();
            }, 1000);
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
NftListItemComponent.ɵfac = function NftListItemComponent_Factory(t) { return new (t || NftListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"])); };
NftListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NftListItemComponent, selectors: [["app-nft-list-item"]], inputs: { nftId: "nftId" }, decls: 23, vars: 20, consts: [["class", "progress", 4, "ngIf"], [1, "main-container"], [1, "nft-image", 3, "ngClass"], ["mat-fab", "", "preserveAspectRatio", "none", "viewBox", "0 0 300 300", 1, "nft-svg", 3, "innerHTML"], [1, "item-description"], [1, "section-one"], [1, "name"], ["aria-label", "labels"], ["disableRipple", "", "color", "primary", "selected", ""], ["disableRipple", "", "color", "accent", "selected", "", 4, "ngIf"], ["color", "accent", "selected", "", 4, "ngIf"], ["color", "warn", "selected", "", 4, "ngIf"], ["color", "primary", "selectable", "", 4, "ngIf"], [1, "second-section"], [1, "progress-spinner"], ["disableRipple", "", "mat-raised-button", "", "color", "primary", 4, "ngIf"], [1, "progress"], ["mode", "determinate", 3, "color", "value"], [1, "time"], [3, "ngClass"], ["disableRipple", "", "color", "accent", "selected", ""], ["color", "accent", "selected", ""], ["color", "warn", "selected", ""], ["color", "primary", "selectable", ""], ["disableRipple", "", "mat-raised-button", "", "color", "primary"]], template: function NftListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NftListItemComponent_div_0_Template, 11, 15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-chip-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-chip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "weiToOne");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "weiToOne");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, NftListItemComponent_mat_chip_14_Template, 2, 0, "mat-chip", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NftListItemComponent_mat_chip_15_Template, 2, 0, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, NftListItemComponent_mat_chip_16_Template, 2, 0, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, NftListItemComponent_mat_chip_17_Template, 2, 0, "mat-chip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, NftListItemComponent_mat_chip_18_Template, 2, 0, "mat-chip", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, NftListItemComponent_mat_chip_19_Template, 2, 0, "mat-chip", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, NftListItemComponent_button_22_Template, 4, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.timeLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c0, !ctx.nft.owner && (ctx.nft.status === 0 || !ctx.timeLeft) && !ctx.nft.resaleId ? "grayscale" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.nft == null ? null : ctx.nft.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.nft == null ? null : ctx.nft.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.nft.bidInfo ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 12, ctx.nft.bidInfo.highestBid, 4) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 15, ctx.nft == null ? null : ctx.nft.price, 4), " ONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nft.owner);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nft.owner && ctx.nft.status === 1 && !ctx.nft.hasUserBids && ctx.timeLeft && !(ctx.bidsViewModel == null ? null : ctx.bidsViewModel.outBidden));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nft.status === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nft.hasUserBids && ctx.nft.bidInfo && ctx.nft.bidInfo.bidderAddress.toLowerCase() === ctx.contractService.selectedAddress.toLowerCase() && !ctx.nft.owner);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nft.bidInfo && ctx.nft.bidInfo.bidderAddress.toLowerCase() !== ctx.contractService.selectedAddress.toLowerCase() && ctx.nft.hasUserBids && !ctx.nft.ownerAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nft.owner && (ctx.nft.status === 0 || !ctx.timeLeft) && !ctx.nft.resaleId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.nft == null ? null : ctx.nft.status) === 1 && !ctx.latestBidIsOwn && ctx.timeLeft);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], pipes: [_pipes_wei_to_one_pipe__WEBPACK_IMPORTED_MODULE_8__["WeiToOnePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.second-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n}\n\nmat-list-option[_ngcontent-%COMP%] {\n  border-bottom: #5c5c5c 1px solid;\n  display: flex;\n  flex-direction: row;\n}\n\n  .mat-list-base .mat-list-item .mat-list-text, .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-list-text[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n  display: flex;\n  align-items: center;\n}\n\n  .mat-list-base {\n  padding-top: 0 !important;\n}\n\n  .mat-fab {\n  width: 66px;\n  height: 66px;\n}\n\n  .mat-list-base .mat-list-item, .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n  .mat-list-base .mat-list-item .mat-list-item-content-reverse, .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-list-item-content-reverse[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.nft-image[_ngcontent-%COMP%] {\n  width: 26%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  place-content: center;\n}\n\n.nft-svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.name[_ngcontent-%COMP%] {\n  padding-left: 7px;\n  margin-bottom: 16px;\n}\n\n.name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.section-one[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.item-description[_ngcontent-%COMP%] {\n  width: 78%;\n  display: flex;\n  align-items: center;\n  place-content: space-between;\n}\n\n.label[_ngcontent-%COMP%] {\n  width: 100px;\n  font-weight: 600;\n  font-size: 12px;\n  color: #d0a0e4;\n}\n\n.top-label[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding-top: 16px;\n}\n\n.top-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n  letter-spacing: 1px;\n  font-weight: bold;\n  color: #dddddd;\n  padding-left: 16px;\n  box-sizing: border-box;\n}\n\n.progress-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  flex-direction: column;\n}\n\n.time[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  place-content: flex-end;\n  align-items: center;\n  margin-bottom: 8px;\n  margin-top: 4px;\n}\n\n.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-right: 4px;\n}\n\n.primary[_ngcontent-%COMP%] {\n  color: #9c27b0;\n}\n\n.accent[_ngcontent-%COMP%] {\n  color: #6DB08F;\n}\n\n  .mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: black !important;\n}\n\n.blinking[_ngcontent-%COMP%] {\n  animation: blinker 1s linear infinite;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25mdC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUdGOztBQURBO0VBQ0UsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTs7RUFFRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhBO0VBQ0UseUJBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBT0Y7O0FBSkE7O0VBRUUsWUFBQTtBQU9GOztBQUxBOztFQUVFLHdCQUFBO0FBUUY7O0FBTkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBU0Y7O0FBRkU7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSkU7RUFDRSxlQUFBO0FBTUo7O0FBRkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQU1GOztBQUhBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFNRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU1GOztBQUxFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBT0o7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFRRjs7QUFQRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVNKOztBQUxBO0VBRUksY0FBQTtBQU9KOztBQUhBO0VBRUksY0FBQTtBQUtKOztBQUZBO0VBQ0Usa0NBQUE7QUFLRjs7QUFIQTtFQUNFLHFDQUFBO0FBTUY7O0FBSEE7RUFDRTtJQUNFLFVBQUE7RUFNRjtBQUNGIiwiZmlsZSI6Im5mdC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWNvbmQtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMCU7XG59XG5tYXQtbGlzdC1vcHRpb24ge1xuICBib3JkZXItYm90dG9tOiByZ2IoOTIsIDkyLCA5MikgMXB4IHNvbGlkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuOjpuZy1kZWVwIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC10ZXh0LFxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpc3QtdGV4dCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAubWF0LWxpc3QtYmFzZSB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm1hdC1mYWIge1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiA2NnB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0sXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOjpuZy1kZWVwIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQtcmV2ZXJzZSxcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saXN0LWl0ZW0tY29udGVudC1yZXZlcnNlIHtcbiAgcGFkZGluZzogMTZweCAhaW1wb3J0YW50O1xufVxuLm5mdC1pbWFnZSB7XG4gIHdpZHRoOiAyNiU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAvLyBtYXJnaW4tbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG59XG4ubmZ0LXN2ZyB7XG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4IHJnYmEoMCwwLDAsMC40KTtcblxuICBzdmcge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5uYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4uc2VjdGlvbi1vbmUge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5pdGVtLWRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDc4JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxhYmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZDBhMGU0O1xufVxuXG4udG9wLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cbi5wcm9ncmVzcy1zcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgcGxhY2UtY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cbn1cblxuLnByaW1hcnkge1xuXG4gICAgY29sb3I6ICM5YzI3YjA7XG4gIFxufVxuXG4uYWNjZW50IHtcblxuICAgIGNvbG9yOiAjNkRCMDhGO1xuXG59XG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG59XG4uYmxpbmtpbmcge1xuICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "h8Cj":
/*!********************************************************************!*\
  !*** ./src/app/ux-components/date-picker/date-picker.component.ts ***!
  \********************************************************************/
/*! exports provided: DatePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");








const _c0 = ["picker"];
function DatePickerComponent_mat_calendar_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-calendar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function DatePickerComponent_mat_calendar_2_Template_mat_calendar_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onDateSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DatePickerComponent {
    constructor() {
        this.calendarOpened = false;
        this.currentDate = new Date(Date.now());
        this.currentTime = this.currentDate;
        this.dateSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onDateSelected(event) {
        this.selectedDate = event;
        this.calendarOpened = false;
        this.dateSelected.next(this.selectedDate);
    }
    timeChanged(event) {
        console.log(event);
        const hours = event.getHours();
        const minutes = event.getMinutes();
        this.currentDate.setHours(hours);
        this.currentDate.setMinutes(minutes);
        console.log(this.currentDate.getTime());
    }
}
DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) { return new (t || DatePickerComponent)(); };
DatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatePickerComponent, selectors: [["app-date-picker"]], viewQuery: function DatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.picker = _t.first);
    } }, outputs: { dateSelected: "dateSelected" }, decls: 11, vars: 8, consts: [[1, "date-picker"], [1, "date-time-picker"], [3, "selectedChange", 4, "ngIf"], ["ngDefaultControl", "", 3, "hidden", "showSpinners", "showSeconds", "ngModel", "ngModelChange"], ["name", "fontStyle", "aria-label", "Font Style"], ["value", "italic", 1, "middle", 3, "click"], ["color", "primary", "value", "bold", 1, "toggle", 3, "click"], [3, "selectedChange"]], template: function DatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatePickerComponent_mat_calendar_2_Template, 1, 0, "mat-calendar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngx-mat-timepicker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatePickerComponent_Template_ngx_mat_timepicker_ngModelChange_3_listener($event) { return ctx.currentTime = $event; })("ngModelChange", function DatePickerComponent_Template_ngx_mat_timepicker_ngModelChange_3_listener($event) { return ctx.timeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatePickerComponent_Template_mat_button_toggle_click_5_listener() { return ctx.calendarOpened = !ctx.calendarOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatePickerComponent_Template_mat_button_toggle_click_8_listener() { return ctx.calendarOpened = !ctx.calendarOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "calendar_today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calendarOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.calendarOpened)("showSpinners", true)("showSeconds", false)("ngModel", ctx.currentTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.selectedDate || ctx.currentDate));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatCalendar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".mat-button-toggle-standalone.mat-button-toggle-appearance-standard, .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  border-radius: 25px;\n}\n\n  .mat-calendar {\n  display: block;\n  position: absolute;\n  width: 72%;\n  background-color: black;\n  opacity: 0.93;\n  border-radius: 25px;\n  left: 0px;\n  bottom: 4px;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.date-time-picker[_ngcontent-%COMP%] {\n  display: flex;\n  place-items: center;\n  width: 100%;\n  position: absolute;\n  bottom: 50px;\n}\n\n.middle[_ngcontent-%COMP%] {\n  width: 208px;\n  border: none;\n  overflow: hidden;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  width: 40px;\n  background-color: #6f1c92;\n  border: none;\n  font-weight: bold;\n  outline: none;\n}\n\n.minus[_ngcontent-%COMP%] {\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n}\n\n.plus[_ngcontent-%COMP%] {\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n\n  .mat-button-toggle-group {\n  border: none;\n}\n\n.time-picker[_ngcontent-%COMP%] {\n  height: 50px;\n}\n\n.date-picker[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n}\n\n  .ngx-mat-timepicker {\n  position: absolute;\n  right: 0;\n  background-color: black;\n  opacity: 0.93;\n  border-radius: 25px;\n  bottom: 4px;\n}\n\n  .ngx-mat-timepicker form {\n  min-width: 62px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUtGOztBQUhBO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBQU1GOztBQUpBO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtBQVFGOztBQU5BO0VBQ0UsWUFBQTtBQVNGOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBVUY7O0FBUkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUFVRjs7QUFSQTtFQUNFLDBCQUFBO0FBV0YiLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbjo6bmctZGVlcCAubWF0LWNhbGVuZGFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuOTM7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiA0cHg7XG59XG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRhdGUtdGltZS1waWNrZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwcHg7XG59XG4ubWlkZGxlIHtcbiAgd2lkdGg6IDIwOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b2dnbGUge1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmMWM5MjtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5taW51cyB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XG59XG4ucGx1cyB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbn1cbjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBib3JkZXI6IG5vbmU7XG59XG4udGltZS1waWNrZXIge1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uZGF0ZS1waWNrZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNTBweDtcbn1cbjo6bmctZGVlcCAubmd4LW1hdC10aW1lcGlja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuOTM7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbiAgYm90dG9tOiA0cHg7XG59XG46Om5nLWRlZXAgLm5neC1tYXQtdGltZXBpY2tlciBmb3JtIHtcbiAgbWluLXdpZHRoOiA2MnB4ICFpbXBvcnRhbnQ7XG59Il19 */"] });


/***/ }),

/***/ "hNKM":
/*!****************************************!*\
  !*** ./src/app/sell/sell.component.ts ***!
  \****************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contract.service */ "oYcS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ux_components_price_picker_price_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ux-components/price-picker/price-picker.component */ "svfh");
/* harmony import */ var _ux_components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ux-components/loading-button/loading-button.component */ "uzNG");
/* harmony import */ var _pipes_wei_to_one_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/wei-to-one.pipe */ "cOok");









function SellComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "weiToOne");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.nft.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nft.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, ctx_r0.nft.price), " ONE");
} }
function SellComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-loading-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellComponent_div_11_Template_app_loading_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.placeOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "shopping_basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Buy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r1.buying);
} }
function SellComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.nft.owner ? "Owned" : "Sold", " ");
} }
const _c0 = function () { return ["/", "all-nfts"]; };
class SellComponent {
    constructor(activatedRoute, contractService) {
        this.activatedRoute = activatedRoute;
        this.contractService = contractService;
        this.subscriptions = [];
        this.buying = false;
    }
    ngOnInit() {
        this.subscriptions.push(this.activatedRoute.params.subscribe((params) => {
            const tokenId = params.id;
            const nft = this.contractService.getNftById(tokenId);
            console.log('load', tokenId);
        }));
    }
    placeOrder() {
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
SellComponent.ɵfac = function SellComponent_Factory(t) { return new (t || SellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_2__["ContractService"])); };
SellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SellComponent, selectors: [["ng-component"]], decls: 15, vars: 5, consts: [[1, "top-wrapper"], [1, "top-label"], [1, "close-wrapper"], ["mat-icon-button", "", 3, "routerLink"], ["color", "primary"], [1, "divider-wrapper"], [1, "divider"], ["class", "nft-name", 4, "ngIf"], ["class", "buy-button", 4, "ngIf"], [1, "price-picker"], ["class", "sold", 4, "ngIf"], [1, "nft-name"], ["mat-fab", "", "viewBox", "0 0 300 300", 3, "innerHTML"], [1, "description"], [1, "price"], [1, "mat-h3"], [1, "buy-button"], [3, "loading", "click"], [1, "button-label"], [1, "sold"]], template: function SellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sell ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SellComponent_div_10_Template, 10, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SellComponent_div_11_Template, 6, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-price-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SellComponent_div_14_Template, 3, 1, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nft.status === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nft.status === 0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ux_components_price_picker_price_picker_component__WEBPACK_IMPORTED_MODULE_6__["PricePickerComponent"], _ux_components_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_7__["LoadingButtonComponent"]], pipes: [_pipes_wei_to_one_pipe__WEBPACK_IMPORTED_MODULE_8__["WeiToOnePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "iYjE":
/*!*********************************************!*\
  !*** ./src/app/pipes/short-address.pipe.ts ***!
  \*********************************************/
/*! exports provided: ShortAddressPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortAddressPipe", function() { return ShortAddressPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ShortAddressPipe {
    transform(value, ...args) {
        return value ? `${value.substring(0, 4)}...${value.substr(value.length - 4)}` : '';
    }
}
ShortAddressPipe.ɵfac = function ShortAddressPipe_Factory(t) { return new (t || ShortAddressPipe)(); };
ShortAddressPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shortAddress", type: ShortAddressPipe, pure: true });


/***/ }),

/***/ "iYr4":
/*!*********************************************************!*\
  !*** ./src/app/services/geolocation-service.service.ts ***!
  \*********************************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GeolocationService {
    constructor() {
        this.allowed = false;
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };
    }
    askPermission() {
        return new Promise((resolve, reject) => {
            if (window.isSecureContext && 'geolocation' in navigator) {
                navigator.permissions
                    .query({ name: 'geolocation' })
                    .then((permissionStatus) => {
                    if ('granted' === permissionStatus.state) {
                        this.allowed = true;
                        resolve(true);
                    }
                });
            }
            else {
                reject('Geolocation not supported');
            }
        });
    }
    getCurrentLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                const crd = pos.coords;
                console.log(`Latitude : ${crd.latitude}`);
                console.log(`Longitude: ${crd.longitude}`);
                console.log(`More or less ${crd.accuracy} meters.`);
                resolve(crd);
            }, (err) => {
                console.warn(`ERROR(${err.code}): ${err.message}`);
                reject(err);
            }, this.options);
        });
    }
    randomizeLocations(latLng, count, range) {
        this.randomizedLocations = new Array(count).fill(0).map((value) => {
            return new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["LngLat"](Math.random() * (latLng.lng + range - (latLng.lng - range)) +
                (latLng.lng - range), Math.random() * (latLng.lat + range - (latLng.lat - range)) +
                (latLng.lat - range));
        });
    }
}
GeolocationService.ɵfac = function GeolocationService_Factory(t) { return new (t || GeolocationService)(); };
GeolocationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GeolocationService, factory: GeolocationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jAUS":
/*!********************************************************************!*\
  !*** ./src/app/transaction-result/transaction-result.component.ts ***!
  \********************************************************************/
/*! exports provided: TransactionResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionResultComponent", function() { return TransactionResultComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function TransactionResultComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TransactionResultComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TransactionResultComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Success!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TransactionResultComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Something went wrong :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TransactionResultComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.success = this.router.getCurrentNavigation().extras.state.success;
        this.closable = this.router.getCurrentNavigation().extras.state.closable;
    }
    ngOnInit() {
    }
    close() {
        if (this.success && this.closable) {
            this.router.navigate(['/', 'all-nfts']);
        }
        else {
            this.location.back();
        }
    }
}
TransactionResultComponent.ɵfac = function TransactionResultComponent_Factory(t) { return new (t || TransactionResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
TransactionResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TransactionResultComponent, selectors: [["app-transaction-result"]], decls: 12, vars: 4, consts: [[1, "container"], [1, "close-wrapper"], ["mat-icon-button", "", 3, "click"], ["color", "primary"], [1, "inner-wrapper"], [1, "bottom-icon"], ["class", "success-icon", 4, "ngIf"], ["class", "error-icon", 4, "ngIf"], [1, "label"], [4, "ngIf"], [1, "success-icon"], [1, "error-icon"]], template: function TransactionResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TransactionResultComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TransactionResultComponent_mat_icon_7_Template, 2, 0, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TransactionResultComponent_mat_icon_8_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TransactionResultComponent_span_10_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TransactionResultComponent_span_11_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.success);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  height: 40%;\n  background-color: #212121;\n  opacity: 0.9;\n  border-top-left-radius: 24px;\n  border-top-right-radius: 24px;\n  display: flex;\n  flex-direction: column;\n  place-content: space-between;\n  padding-bottom: 32px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media only screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  [_nghost-%COMP%] {\n    width: 60%;\n  }\n}\n\n.close-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  place-content: flex-end;\n}\n\n.close-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 16px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: space-between;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  place-content: center;\n}\n\n.label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 30px;\n  font-weight: bold;\n}\n\n.bottom-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n}\n\n.success-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  font-size: 80px;\n  width: 110px;\n  height: 110px;\n  color: green;\n}\n\n.error-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  place-content: center;\n  font-size: 80px;\n  width: 110px;\n  height: 110px;\n  color: red;\n}\n\n.inner-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  place-content: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RyYW5zYWN0aW9uLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxXQUFBO0VBRUY7QUFDRjs7QUFBQTtFQUNFO0lBQ0UsVUFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQURFO0VBQ0UsWUFBQTtBQUdKOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQU9GIiwiZmlsZSI6InRyYW5zYWN0aW9uLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIDpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuLmNsb3NlLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogZmxleC1lbmQ7XG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxNnB4O1xuICB9XG59XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2Vlbjtcbn1cbi5sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4uYm90dG9tLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cbn1cbi5zdWNjZXNzLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBjb2xvcjogZ3JlZW47XG59XG4uZXJyb3ItaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA4MHB4O1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG4uaW5uZXItd3JhcHBlcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('disableButton', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '20px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms cubic-bezier(0.32,0,1,1)')),
            ]),
        ] } });


/***/ }),

/***/ "kh+M":
/*!*****************************************************!*\
  !*** ./src/app/services/price-converter.service.ts ***!
  \*****************************************************/
/*! exports provided: PriceConverterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceConverterService", function() { return PriceConverterService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PriceConverterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    convertOneToUSDT(priceInOne) {
        return this.httpClient
            .get('https://api.binance.com/api/v3/ticker/price?symbol=ONEUSDT')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((priceResponse) => {
            return priceInOne * Number(priceResponse.price);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(1));
    }
}
PriceConverterService.ɵfac = function PriceConverterService_Factory(t) { return new (t || PriceConverterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PriceConverterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PriceConverterService, factory: PriceConverterService.ɵfac });


/***/ }),

/***/ "lka0":
/*!******************************************************************!*\
  !*** ./src/app/ux-components/nft-marker/nft-marker.component.ts ***!
  \******************************************************************/
/*! exports provided: NftUxState, NftMarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftUxState", function() { return NftUxState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftMarkerComponent", function() { return NftMarkerComponent; });
/* harmony import */ var src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/contract.service */ "oYcS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_wei_to_one_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/wei-to-one.pipe */ "cOok");





const _c0 = function (a0, a1) { return { height: a0, width: a1 }; };
const _c1 = function (a0, a1) { return { bounce: a0, rotate: a1 }; };
var NftUxState;
(function (NftUxState) {
    NftUxState[NftUxState["AVAILABLE"] = 0] = "AVAILABLE";
    NftUxState[NftUxState["OWNEDBYME"] = 1] = "OWNEDBYME";
    NftUxState[NftUxState["OWNEDBYSOMEBODY"] = 2] = "OWNEDBYSOMEBODY";
})(NftUxState || (NftUxState = {}));
class NftMarkerComponent {
    constructor(router) {
        this.router = router;
        this.SoldStatus = src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_0__["SoldStatus"];
    }
    ngOnInit() {
    }
    openNft() {
        this.router.navigate(['/', 'single-nft', this.nft.id]);
    }
}
NftMarkerComponent.ɵfac = function NftMarkerComponent_Factory(t) { return new (t || NftMarkerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NftMarkerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NftMarkerComponent, selectors: [["app-nft-marker"]], inputs: { nft: "nft", focused: "focused" }, decls: 5, vars: 19, consts: [[1, "circle", 3, "ngStyle", "ngClass", "click"], [1, "svg-icon", 3, "ngStyle", "ngClass", "innerHTML"], [1, "label", 3, "ngClass"]], template: function NftMarkerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NftMarkerComponent_Template_div_click_0_listener() { return ctx.openNft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "weiToOne");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c0, ctx.focused ? "72px" : "48px", ctx.focused ? "72px" : "48px"))("ngClass", ctx.nft.owner ? "owned" : ctx.nft.ownerAddress ? "ownedByOther" : "available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](13, _c0, ctx.focused ? "52px" : "32px", ctx.focused ? "52px" : "32px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](16, _c1, ctx.nft.status === ctx.SoldStatus.AVAILABLE && !ctx.focused, ctx.focused && !ctx.nft.owner))("innerHTML", ctx.nft.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.nft.owner ? "owned" : ctx.nft.ownerAddress ? "ownedByOther" : "available");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 7, ctx.nft == null ? null : ctx.nft.price, 4), " ONE");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_pipes_wei_to_one_pipe__WEBPACK_IMPORTED_MODULE_4__["WeiToOnePipe"]], styles: ["[_nghost-%COMP%] {\n  cursor: pointer;\n}\n@keyframes bounce {\n  0%, 25%, 50%, 75%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-20px);\n  }\n  60% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes rotateY {\n  to {\n    transform: rotateY(360deg);\n  }\n}\n[_nghost-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  animation: rotateY 1.5s infinite linear;\n}\n[_nghost-%COMP%]   .bounce[_ngcontent-%COMP%] {\n  animation: bounce 2s;\n  animation-iteration-count: infinite;\n}\n[_nghost-%COMP%]   .circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border-width: 40px;\n  display: flex;\n  place-content: center;\n  align-content: center;\n  justify-content: center;\n  vertical-align: middle;\n  align-items: center;\n}\n[_nghost-%COMP%]   .circle.owned[_ngcontent-%COMP%] {\n  background-color: green;\n}\n[_nghost-%COMP%]   .circle.ownedByOther[_ngcontent-%COMP%] {\n  background-color: grey;\n}\n[_nghost-%COMP%]   .circle.available[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .owned[_ngcontent-%COMP%] {\n  color: green;\n}\n[_nghost-%COMP%]   .ownedByOther[_ngcontent-%COMP%] {\n  color: grey;\n}\n[_nghost-%COMP%]   .available[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25mdC1tYXJrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxlQUFBO0FBQUY7QUFvQkU7RUFDRTtJQU1FLHdCQUFBO0VBUko7RUFVRTtJQUVFLDRCQUFBO0VBUko7RUFVRTtJQUVFLDRCQUFBO0VBUko7QUFDRjtBQWVFO0VBQ0U7SUFDRSwwQkFBQTtFQVJKO0FBQ0Y7QUFXRTtFQUVFLHVDQUFBO0FBVEo7QUFXRTtFQUVFLG9CQUFBO0VBRUEsbUNBQUE7QUFUSjtBQVlFO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFZSTtFQUNFLHVCQUFBO0FBVk47QUFZSTtFQUNFLHNCQUFBO0FBVk47QUFZSTtFQUNFLDZCQUFBO0FBVk47QUFhRTtFQUNFLFlBQUE7QUFYSjtBQWFFO0VBQ0UsV0FBQTtBQVhKO0FBYUU7RUFDRSxZQUFBO0FBWEo7QUFhRTtFQUNFLFdBQUE7QUFYSiIsImZpbGUiOiJuZnQtbWFya2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMCUsXG4gICAgMjUlLFxuICAgIDUwJSxcbiAgICA3NSUsXG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIDYwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBib3VuY2Uge1xuICAgIDAlLFxuICAgIDI1JSxcbiAgICA1MCUsXG4gICAgNzUlLFxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcbiAgICB9XG4gIH1cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVkge1xuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgcm90YXRlWSB7XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICAucm90YXRlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlWSAxLjVzIGluZmluaXRlIGxpbmVhcjtcbiAgICBhbmltYXRpb246IHJvdGF0ZVkgMS41cyBpbmZpbml0ZSBsaW5lYXI7XG4gIH1cbiAgLmJvdW5jZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJvdW5jZSAycztcbiAgICBhbmltYXRpb246IGJvdW5jZSAycztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9XG4gIFxuICAuY2lyY2xlIHtcblxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItd2lkdGg6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmLm93bmVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICAmLm93bmVkQnlPdGhlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIH1cbiAgICAmLmF2YWlsYWJsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgLm93bmVkIHtcbiAgICBjb2xvcjogZ3JlZW47XG4gIH1cbiAgLm93bmVkQnlPdGhlciB7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cbiAgLmF2YWlsYWJsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5sYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "m+5+":
/*!****************************************!*\
  !*** ./src/app/services/ux.service.ts ***!
  \****************************************/
/*! exports provided: SidenavState, UxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavState", function() { return SidenavState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UxService", function() { return UxService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var SidenavState;
(function (SidenavState) {
    SidenavState[SidenavState["DISABLED"] = 0] = "DISABLED";
    SidenavState[SidenavState["HIDDEN"] = 1] = "HIDDEN";
    SidenavState[SidenavState["ACTIVE"] = 2] = "ACTIVE";
})(SidenavState || (SidenavState = {}));
class UxService {
    constructor() {
        this.sidenavOpenedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
            leftSidenavState: SidenavState.DISABLED,
            rightSidenavState: SidenavState.DISABLED,
        });
        this.sidenavOpened$ = this.sidenavOpenedSubject.asObservable();
        this.routeLock = false;
    }
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
UxService.ɵfac = function UxService_Factory(t) { return new (t || UxService)(); };
UxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UxService, factory: UxService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oANj":
/*!********************************************!*\
  !*** ./src/app/map-gl/map-gl.component.ts ***!
  \********************************************/
/*! exports provided: MapGlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapGlComponent", function() { return MapGlComponent; });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ux_components_nft_marker_nft_marker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ux-components/nft-marker/nft-marker.component */ "lka0");
/* harmony import */ var _services_map_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/map-helper.service */ "GLxv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mapbox-gl */ "Q2BN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ux_components_nft_grid_item_nft_grid_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ux-components/nft-grid-item/nft-grid-item.component */ "tWU4");











const _c0 = ["markers"];
const _c1 = function (a0, a1) { return [a0, a1]; };
function MapGlComponent_mgl_marker_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mgl-marker", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "circle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lngLat", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](1, _c1, ctx_r0.mapStatus == null ? null : ctx_r0.mapStatus.userLocation.lng, ctx_r0.mapStatus == null ? null : ctx_r0.mapStatus.userLocation.lat));
} }
function MapGlComponent_mgl_marker_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mgl-marker", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-nft-grid-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marker_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("lngLat", marker_r3.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("small", true)("nftId", marker_r3.id);
} }
const _c2 = function () { return [0]; };
const _c3 = function (a0) { return [a0, 40]; };
class MapGlComponent {
    constructor(mapHelperService, router) {
        this.mapHelperService = mapHelperService;
        this.router = router;
        this.nfts = [];
        this.userLocation = null;
        this.subscription = [];
        this.level = 1;
        this.CameraState = _services_map_helper_service__WEBPACK_IMPORTED_MODULE_4__["CameraState"];
        this.NftUxState = _ux_components_nft_marker_nft_marker_component__WEBPACK_IMPORTED_MODULE_3__["NftUxState"];
    }
    setEvents() {
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.map, 'zoom');
        this.subscription.push(source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(500))).subscribe(() => {
            if (this.mapStatus.markers && this.mapStatus.cameraState !== _services_map_helper_service__WEBPACK_IMPORTED_MODULE_4__["CameraState"].SINGLE) {
                this.nfts = this.mapStatus.markers.filter((marker) => {
                    return Math.max(Math.floor(this.map.getZoom()), 1) === marker.layer;
                });
            }
        }));
    }
    setCamera() {
        switch (this.mapStatus.cameraState) {
            case _services_map_helper_service__WEBPACK_IMPORTED_MODULE_4__["CameraState"].NEARBY:
                this.bounds = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["LngLatBounds"]();
                this.mapStatus.markers.forEach((marker) => {
                    this.bounds.extend(marker.location);
                });
                this.bounds.extend(this.mapStatus.userLocation);
                if (this.map) {
                    this.map.fitBounds(this.bounds, { zoom: 1 });
                }
                break;
            case _services_map_helper_service__WEBPACK_IMPORTED_MODULE_4__["CameraState"].IDLE:
                if (this.map && this.mapStatus.markers) {
                    this.bounds = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["LngLatBounds"]();
                    this.mapStatus.markers.forEach((marker) => {
                        this.bounds.extend(marker.location);
                    });
                    if (this.map && !this.bounds.isEmpty()) {
                        this.map.fitBounds(this.bounds, {
                            zoom: 1,
                            bearing: 0,
                            pitch: 0,
                            offset: [-400, 1],
                        });
                    }
                }
                break;
            case _services_map_helper_service__WEBPACK_IMPORTED_MODULE_4__["CameraState"].SINGLE:
                if (!this.mapStatus.markers) {
                    return;
                }
                const coords = this.mapStatus.markers[0].location;
                this.map.flyTo({
                    center: coords,
                    essential: true,
                    pitch: 60,
                    zoom: 10,
                    offset: [-400, -60]
                });
                break;
        }
    }
    ngOnChanges(changes) {
        this.bounds = new mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["LngLatBounds"]();
        if (changes.markers.currentValue) {
            this.map.fitBounds(this.bounds, { padding: 50 });
        }
    }
    onMapLoaded($event) {
        this.map = $event;
        this.setEvents();
        this.mapHelperService.mapStatus$.subscribe((mapState) => {
            this.mapStatus = mapState;
            // apply status
            this.nfts = mapState.markers;
            this.setCamera();
            if (mapState.changeCameraState) {
            }
        });
    }
    markerClicked(marker) {
        this.router.navigate(['single-nft', marker.id]);
    }
    ngOnDestroy() {
        this.subscription.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
MapGlComponent.ɵfac = function MapGlComponent_Factory(t) { return new (t || MapGlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_map_helper_service__WEBPACK_IMPORTED_MODULE_4__["MapHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
MapGlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MapGlComponent, selectors: [["app-map-gl"]], viewQuery: function MapGlComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.markerViews = _t);
    } }, inputs: { userLocation: "userLocation" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 9, consts: [[3, "zoom", "center", "load"], [3, "lngLat", 4, "ngIf"], ["style", "text-align: center;", 3, "lngLat", 4, "ngFor", "ngForOf"], [3, "lngLat"], ["markers", ""], ["height", "100", "width", "100"], ["cx", "50", "cy", "50", "r", "10", "stroke", "white", "stroke-width", "2", "fill", "#4E8EF7"], [2, "text-align", "center", 3, "lngLat"], [3, "small", "nftId"]], template: function MapGlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mgl-map", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("load", function MapGlComponent_Template_mgl_map_load_0_listener($event) { return ctx.onMapLoaded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MapGlComponent_mgl_marker_1_Template, 4, 4, "mgl-marker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MapGlComponent_mgl_marker_2_Template, 2, 3, "mgl-marker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"]("mapbox://styles/randymarsh2137/ckqnwzq4d14x718quh7ukm7t8");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("zoom", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c2))("center", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c3, -74.5));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mapStatus == null ? null : ctx.mapStatus.showUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.nfts);
    } }, directives: [ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_7__["MapComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_7__["ɵl"], _ux_components_nft_grid_item_nft_grid_item_component__WEBPACK_IMPORTED_MODULE_9__["NftGridItemComponent"]], styles: ["mgl-map[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.marker[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n}\n\n  a.mapboxgl-ctrl-logo {\n  display: none;\n}\n\n.svg-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 50%;\n  border: 1px solid black;\n}\n\n.nft-marker[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21hcC1nbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUtGIiwiZmlsZSI6Im1hcC1nbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1nbC1tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hcmtlciBzdmcge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG46Om5nLWRlZXAgYS5tYXBib3hnbC1jdHJsLWxvZ28ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN2Zy1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuLm5mdC1tYXJrZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"] });


/***/ }),

/***/ "oYcS":
/*!**********************************************!*\
  !*** ./src/app/services/contract.service.ts ***!
  \**********************************************/
/*! exports provided: SoldStatus, ContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoldStatus", function() { return SoldStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractService", function() { return ContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "4ZJM");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _abi_ABI_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abi/ABI.json */ "v3zf");
var _abi_ABI_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./abi/ABI.json */ "v3zf", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







const Web3 = __webpack_require__(/*! web3 */ "meUc");
var SoldStatus;
(function (SoldStatus) {
    SoldStatus[SoldStatus["SOLD"] = 0] = "SOLD";
    SoldStatus[SoldStatus["AVAILABLE"] = 1] = "AVAILABLE";
    SoldStatus[SoldStatus["OWNED"] = 2] = "OWNED";
    SoldStatus[SoldStatus["RESALE"] = 3] = "RESALE";
})(SoldStatus || (SoldStatus = {}));
class ContractService {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.contractAddress = '0x2111Fb953b5C0b4748060953A08ea9938c4A9eEc';
        this.blockNumber = 12664489;
        this.loggedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.logged$ = this.loggedSubject.asObservable();
        this.walletInfoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.walletInfo$ = this.walletInfoSubject.asObservable();
        this.errorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.error$ = this.errorSubject.asObservable();
        this.nftsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.nfts$ = this.nftsSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(nfts => nfts.sort((a, b) => new Date(b.saleTime).getTime() - new Date(a.saleTime).getTime())));
        this.nftsOnSale$ = this.nftsSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(x => !!x), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(nfts => {
            return nfts.filter(((nft) => {
                return nft.saleTime.getTime() > Date.now() && !nft.hasUserBids;
            }));
        }));
        this.nftNotSold$ = this.nftsSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(x => !!x), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(nfts => {
            return nfts.filter(((nft) => {
                return nft.saleTime.getTime() > Date.now() && !(nft.ownerAddress);
            }));
        }));
        this.ownedNFTsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.ownedNFTs$ = this.ownedNFTsSubject.asObservable();
        this.transactionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.transactions$ = this.transactionsSubject.asObservable();
        this.bidsMap = new Map();
        this.bidsMapSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
        this.bidsMap$ = this.bidsMapSubject.asObservable();
        // resalesMap = new Map<string, ResaleInfo[]>();
        // resalesMapSubject = new BehaviorSubject<Map<string, ResaleInfo[]>>(new Map<string, ResaleInfo[]>());
        // resalesMap$ = this.resalesMapSubject.asObservable();
        this.newBidsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newBids$ = this.newBidsSubject.asObservable();
        this.newNftsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.newNfts$ = this.newNftsSubject.asObservable();
        this.initializing = false;
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.initializing = true;
            this.wallet = window.ethereum || window.onewallet;
            if (!this.wallet) {
                throw new Error('No supported wallet');
            }
            // Ask User permission to connect to Metamask
            //   await window.ethereum.enable();
            try {
                if (!this.wallet.selectedAddress) {
                    yield this.wallet.enable(); // <<< ask for permission
                }
                this.currentWeb3 = new Web3(this.wallet);
                this.contract = new this.currentWeb3.eth.Contract(_abi_ABI_json__WEBPACK_IMPORTED_MODULE_4__, this.contractAddress);
                this.selectedAddress = this.wallet.selectedAddress;
                console.log('selected address', this.selectedAddress);
                yield this.loadWalletInfo();
                // await this.loadOwnedNFTs();
                // await this.loadNFTs(1);
                yield this.loadPassedEvents();
                this.setEvents();
                this.initializing = false;
            }
            catch (error) {
                this.initializing = false;
                this.errorSubject.next(error);
                throw new Error(error);
            }
        });
    }
    setEvents() {
        this.wallet.on('networkChanged', (networkId) => {
            // Time to reload your interface with the new networkId
            console.log('New network ID:', networkId);
            if (networkId !== '0x6357d2e0') {
                console.error('You are not connected to harmony testnet s0');
                this.errorSubject.next('You are not connected to harmony testnet s0');
                return;
            }
        });
        this.contract.events.NFTCreation({})
            .on('data', (nft) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('nft created', nft);
            this.newNftsSubject.next(nft);
            const newGeoNftList = yield this.applyNftCreation(this.nftsSubject.getValue(), nft);
            this.nftsSubject.next(newGeoNftList);
        }));
        this.contract.events.NFTBid({})
            .on('data', (bidEvent) => {
            // TODO: update bidsMap
            // console.log('nft created', nft);
            const nft = this.getNftById(Number(bidEvent.returnValues.tokenId));
            const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(bidEvent.returnValues.tokenId));
            const nfts = this.nftsSubject.getValue();
            // set status to resale
            // nft.price = resaleEvent.
            // set date to new date
            nfts[nftIdx] = this.applyNftBid(nft, bidEvent);
            this.nftsSubject.next(nfts);
        });
        this.contract.events.SaleRetrieve({})
            .on('data', (saleEvent) => {
            const nft = this.getNftById(Number(saleEvent.returnValues.tokenID));
            const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(saleEvent.returnValues.tokenID));
            const nfts = this.nftsSubject.getValue();
            nft.owner = saleEvent.returnValues.UserAddress.toLowerCase() === this.selectedAddress;
            nft.ownerAddress = saleEvent.returnValues.UserAddress;
            // nft.bidInfo = null;
            nfts[nftIdx] = this.applySaleRetrieve(nft, saleEvent);
            nfts[nftIdx] = nft;
            this.nftsSubject.next(nfts);
        });
        this.contract.events.ResaleCreation({})
            .on('data', (resaleEvent) => {
            console.log('ResaleCreation', resaleEvent);
            const nft = this.getNftById(Number(resaleEvent.returnValues.tokenID));
            const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(resaleEvent.returnValues.tokenID));
            const nfts = this.nftsSubject.getValue();
            nfts[nftIdx] = this.applyResaleCreationToNft(nft, resaleEvent);
            this.nftsSubject.next(nfts);
        });
        this.contract.events.ResaleBid({})
            .on('data', (resaleBidEvent) => {
            // add resaleBid to bidsMap, just reusing existing bids system
            console.log('ResaleBid', resaleBidEvent);
            const nft = this.getNftById(Number(resaleBidEvent.returnValues.tokenID));
            const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(resaleBidEvent.returnValues.tokenID));
            const nfts = this.nftsSubject.getValue();
            nfts[nftIdx] = this.applyResaleBidToNft(nft, resaleBidEvent);
            this.nftsSubject.next(nfts);
        });
        this.contract.events.ResaleRetrieve({})
            .on('data', (resaleRetrieveEvent) => {
            // same as sale retrieve
            const nft = this.getNftById(Number(resaleRetrieveEvent.returnValues.tokenID));
            const nftIdx = this.nftsSubject.getValue().findIndex(x => x.id === Number(resaleRetrieveEvent.returnValues.tokenID));
            const nfts = this.nftsSubject.getValue();
            nfts[nftIdx] = this.applyResaleRetrieveToNft(nft, resaleRetrieveEvent);
            this.nftsSubject.next(nfts);
        });
    }
    epochToDate(epoch) {
        const date = new Date(0);
        const utcSeconds = Number(epoch);
        date.setUTCSeconds(utcSeconds);
        return date;
    }
    getSvg$(tokenId) {
        const svgSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        const svg$ = svgSub.asObservable();
        this.contract.methods
            .GetTokenSVG(tokenId).call({ from: this.selectedAddress })
            .then((svg) => {
            svgSub.next(this.domSanitizer.bypassSecurityTrustHtml(decodeURIComponent(svg)));
            svgSub.complete();
        });
        return svg$;
    }
    getSvg(tokenId) {
        return this.contract.methods
            .GetTokenSVG(tokenId).call({ from: this.selectedAddress })
            .then((svg) => {
            return this.domSanitizer.bypassSecurityTrustHtml(decodeURIComponent(svg));
        });
    }
    getNftById(tokenId) {
        return this.nftsSubject.getValue().find(x => x.id === tokenId);
    }
    getNftById$(tokenId) {
        return this.nfts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(nfts => nfts.find(x => x.id === tokenId)));
    }
    loadWalletInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const address = this.wallet.selectedAddress;
                this.currentWeb3.eth
                    .getBalance(this.selectedAddress)
                    .then((balance) => {
                    const displayBalance = this.currentWeb3.utils.fromWei(balance, 'ether');
                    this.walletInfoSubject.next({
                        address,
                        balance: displayBalance,
                    });
                    resolve();
                }, (err) => reject(err));
            });
        });
    }
    bidNFT(tokenId, amount) {
        // TODO: make it observable
        const result = this.contract.methods
            .Bid(tokenId)
            .send({ from: this.selectedAddress, value: amount });
        this.listenToTransaction(result);
    }
    bidResale(resaleId, tokenId, amount) {
        console.log('bidResale', resaleId, tokenId, amount);
        const transaction = this.contract.methods.bidResale(resaleId, tokenId).send({ from: this.selectedAddress, value: amount });
        this.listenToTransaction(transaction);
    }
    resaleNft(price, tokenId, resaleTime) {
        // TODO: return transaction, push to resales events stream
        console.log('resale token', price, tokenId, 600);
        const result = this.contract.methods
            .putTokenForResale(price, tokenId, 600) // TODO: MOCKED 5mins!!
            .send({ from: this.selectedAddress });
        this.listenToTransaction(result);
    }
    loadPassedEvents() {
        return Promise.all([
            this.contract.getPastEvents('NFTCreation', { fromBlock: this.blockNumber }),
            this.contract.getPastEvents('NFTBid', { fromBlock: this.blockNumber }),
            this.contract.getPastEvents('ResaleCreation', { fromBlock: this.blockNumber }),
            this.contract.getPastEvents('ResaleBid', { fromBlock: this.blockNumber }),
            this.contract.getPastEvents('ResaleRetrieve', { fromBlock: this.blockNumber })
        ])
            .then(([nftCreations, nftBids, resaleCreations, resaleBids, resaleRetrieves]) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // assign resales as bids here
            let nftList = [];
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < nftCreations.length; i++) {
                nftList = yield this.applyNftCreation(nftList, nftCreations[i]);
            }
            nftBids.forEach((nftBid) => {
                const nftId = nftBid.returnValues.tokenId;
                const nft = nftList.find(x => String(x.id) === nftId);
                const nftIdx = nftList.findIndex(x => String(x.id) === nftId);
                nftList[nftIdx] = this.applyNftBid(nft, nftBid);
            });
            resaleCreations.forEach((resaleCreation) => {
                const nftId = resaleCreation.returnValues.tokenID;
                const nft = nftList.find(x => String(x.id) === nftId);
                const nftIdx = nftList.findIndex(x => String(x.id) === nftId);
                nftList[nftIdx] = this.applyResaleCreationToNft(nft, resaleCreation);
            });
            resaleBids.forEach((resaleBid) => {
                const nftId = resaleBid.returnValues.tokenId;
                const nft = nftList.find(x => String(x.id) === nftId);
                const nftIdx = nftList.findIndex(x => String(x.id) === nftId);
                nftList[nftIdx] = this.applyResaleBidToNft(nft, resaleBid);
            });
            resaleRetrieves.forEach((resaleRetrieve) => {
                const nftId = resaleRetrieve.returnValues.tokenID;
                const nft = nftList.find(x => String(x.id) === nftId);
                const nftIdx = nftList.findIndex(x => String(x.id) === nftId);
                nftList[nftIdx] = this.applyResaleRetrieveToNft(nft, resaleRetrieve);
            });
            // filter out nfts we can delete for sure
            nftList = this.cleanupNfts(nftList);
            // const resaleRetrieve = resaleEvents[2] as ResaleRetir
            this.nftsSubject.next(nftList);
            // this.startNFTWatch();
        }))
            .catch(e => {
            console.error(e);
        });
    }
    cleanupNfts(nfts) {
        return nfts.filter((nft) => {
            return !(!nft.bidInfo && nft.saleTime.getTime() < Date.now() && !nft.ownerAddress);
        });
    }
    // as we're scanning whole history of contract events, "appliers" are desired way to load only newest state of nfts to RAM memory
    // limiting this resource usage by browser. Historical data should be lost or applied to GeoNFT entity in minimal way if needed on view
    // appliers can be used also on new events. Check which tokenID has an event, find GeoNFT and process it by respective to event applier
    // TODO:  refactor code to use that approach with all of events
    applyNftCreation(nftList, nftEvent) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.applyNftProcessing) {
                return nftList;
            }
            this.applyNftProcessing = true;
            if (nftList.find(x => String(x.id) === nftEvent.returnValues.tokenID)) {
                return nftList;
            }
            const geoNft = yield this.mapNFTCreationEventToGeoNFT(nftEvent);
            nftList.push(geoNft);
            this.applyNftProcessing = false;
            return nftList;
        });
    }
    applyNftBid(nft, nftBid) {
        // set BidInfo if not exist or exists with lower value
        if (nftBid.returnValues.newBid.bidderAddress.toLowerCase() === this.selectedAddress.toLowerCase()) {
            nft.hasUserBids = true;
        }
        nft.bidInfo = nftBid.returnValues.newBid;
        return nft;
    }
    applySaleRetrieve(nft, saleRetrieveEvent) {
        // if (nft.)
        nft.owner = saleRetrieveEvent.returnValues.UserAddress.toLowerCase() === this.selectedAddress;
        nft.ownerAddress = saleRetrieveEvent.returnValues.UserAddress;
        nft.status = SoldStatus.OWNED;
        return nft;
    }
    applyResaleCreationToNft(nft, resaleCreation) {
        console.log('ResaleCreation', resaleCreation, Date.now());
        if (this.epochToDate(resaleCreation.returnValues.Info.resaleTime).getTime() > Date.now()) {
            nft.status = SoldStatus.RESALE;
            // set price to new price
            nft.bidInfo = null;
            nft.price = resaleCreation.returnValues.Info.resalePrice;
            // console.log('resaleCreation', this.epochToDate(resaleCreation.returnValues.Info.resaleTime));
            nft.saleTime = this.epochToDate(resaleCreation.returnValues.Info.resaleTime);
            nft.resaleTime = this.epochToDate(resaleCreation.returnValues.creationTime);
            nft.resaleId = resaleCreation.returnValues.resaleID;
        }
        return nft;
    }
    applyResaleBidToNft(nft, resaleBidEvent) {
        // set price to new price, set latest bidInfo to new bid
        nft.price = resaleBidEvent.returnValues.latestInfo.resalePrice;
        nft.bidInfo = {
            bidderAddress: resaleBidEvent.returnValues.latestInfo.bidderAddress,
            highestBid: resaleBidEvent.returnValues.latestInfo.highestBid
        };
        return nft;
    }
    applyResaleRetrieveToNft(nft, resaleRetrieve) {
        // change owner to new owner, change status to "OWNED"
        nft.owner = resaleRetrieve.returnValues.newOwner.toLowerCase() === this.selectedAddress.toLowerCase();
        nft.ownerAddress = resaleRetrieve.returnValues.newOwner;
        nft.status = nft.owner ? SoldStatus.OWNED : SoldStatus.SOLD;
        return nft;
    }
    getOwnedNFTs$() {
        return this.nfts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((nfts) => {
            return nfts.filter(nft => {
                return nft.owner;
            });
        }));
    }
    refresh() {
        console.log('refreshing list');
        this.nftsSubject.next(this.cleanupNfts(this.nftsSubject.getValue()));
    }
    mapNFTCreationEventToGeoNFT(nftCreation) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                try {
                    const image = yield this.getSvg(Number(nftCreation.returnValues.tokenID));
                    const owner = yield this.ownerOf(Number(nftCreation.returnValues.tokenID));
                    const status = nftCreation.returnValues.Info.status === '1' ? SoldStatus.AVAILABLE :
                        (owner === this.selectedAddress ? SoldStatus.OWNED : SoldStatus.SOLD);
                    resolve({
                        id: Number(nftCreation.returnValues.tokenID),
                        layer: Number(nftCreation.returnValues.Info.layer),
                        location: new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["LngLat"](Number(nftCreation.returnValues.Info.location.split(',')[1]), Number(nftCreation.returnValues.Info.location.split(',')[0])),
                        name: nftCreation.returnValues.Info.name,
                        ownerAddress: owner,
                        owner: owner ? owner.toLowerCase() === this.selectedAddress.toLowerCase() : false,
                        saleTime: this.epochToDate(nftCreation.returnValues.saleTime),
                        creationTime: this.epochToDate(nftCreation.returnValues.creationTime),
                        price: nftCreation.returnValues.Info.price,
                        image,
                        status,
                    });
                }
                catch (e) {
                    reject(e);
                }
            }));
        });
    }
    auctionInfo$(tokenID) {
        const bidSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        const bid$ = bidSubject.asObservable();
        this.contract.methods.AuctionInfo(tokenID)
            .call({ from: this.selectedAddress })
            .then((bidInfo) => {
            bidSubject.next(bidInfo);
            bidSubject.complete();
        });
        return bid$;
    }
    auctionInfo(tokenID) {
        return this.contract.methods.AuctionInfo(tokenID)
            .call({ from: this.selectedAddress });
    }
    ownerOf(tokenId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // TODO: treat error as lack of owner
            return new Promise((resolve) => {
                this.contract.methods
                    .ownerOf(tokenId)
                    .call({ from: this.selectedAddress })
                    .then((result) => {
                    resolve(result);
                })
                    .catch(e => {
                    resolve(null);
                });
            });
        });
    }
    getNftsWithMyBids$() {
        return this.nftsSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((nfts) => {
            return nfts.filter(x => (x.status === SoldStatus.AVAILABLE || x.status === SoldStatus.RESALE) &&
                (x.saleTime.getTime() > Date.now()) && x.hasUserBids && !x.owner);
        }));
    }
    getNftsToRetrieve$() {
        return this.nfts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(nfts => nfts.filter(nft => nft.bidInfo && nft.bidInfo.bidderAddress.toLowerCase() === this.selectedAddress.toLowerCase() &&
            nft.saleTime.getTime() < Date.now() && !nft.owner)));
    }
    enableResalePermission() {
        const transaction = this.contract.methods
            .enableResale()
            .send({ from: this.selectedAddress });
        this.listenToTransaction(transaction);
    }
    disableResalePermission() {
        const transaction = this.contract.methods
            .disableResale()
            .send({ from: this.selectedAddress });
        this.listenToTransaction(transaction);
    }
    isApprovedForAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.contract.methods.isApprovedForAll(this.selectedAddress, this.contractAddress);
        });
    }
    retrieveNFTs(tokenIds) {
        const transaction = this.contract.methods.RetrieveNFT(tokenIds).send({ from: this.selectedAddress });
        this.listenToTransaction(transaction);
    }
    /**
     * TODO: retrieve many NFTs at once
     * @param tokenId
     */
    retrieveResaleNFT(tokenId) {
        const transaction = this.contract.methods.RetrieveReSale(tokenId).send({ from: this.selectedAddress });
        this.listenToTransaction(transaction);
    }
    listenToTransaction(transaction) {
        transaction
            .on('transactionHash', (hash) => {
            console.log('Transaction sent successfully. Check console for Transaction hash');
            this.transactionsSubject.next({
                txid: hash
            });
            console.log('Transaction Hash is ', hash);
        })
            .on('error', (error) => {
            this.transactionsSubject.error(error);
        })
            .once('confirmation', (confirmationNumber, receipt) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (receipt.status) {
                console.log('Transaction processed successfully', receipt);
                this.transactionsSubject.next({
                    fee: receipt.fee,
                    success: true,
                    txid: receipt.id,
                    confirmationNumber
                });
            }
            else {
                this.transactionsSubject.error({
                    fee: receipt.fee,
                    success: false,
                    txid: receipt.id,
                    confirmationNumber
                });
            }
            yield this.loadWalletInfo();
            console.log(receipt);
        }));
    }
    weiToOne(balance) {
        return this.currentWeb3.utils.fromWei(balance, 'ether');
    }
    oneToWei(balance) {
        return this.currentWeb3.utils.toWei(balance, 'ether');
    }
    logout() {
        // TODO: to implement
        this.currentWeb3 = null;
        this.contract = null;
        this.selectedAddress = null;
        this.nftsSubject.next([]);
    }
}
ContractService.ɵfac = function ContractService_Factory(t) { return new (t || ContractService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
ContractService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ContractService, factory: ContractService.ɵfac });


/***/ }),

/***/ "ss/J":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StartComponent {
    constructor() { }
    ngOnInit() { }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(); };
StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 0, vars: 0, template: function StartComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "svfh":
/*!**********************************************************************!*\
  !*** ./src/app/ux-components/price-picker/price-picker.component.ts ***!
  \**********************************************************************/
/*! exports provided: PricePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricePickerComponent", function() { return PricePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");



class PricePickerComponent {
    constructor() {
        this.bidChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.currentPrice = Number((this.minPrice + 0.1).toPrecision(2));
        this.bidChanged.emit(this.currentPrice);
    }
    ngOnChanges(changes) {
        this.currentPrice = Number((changes.minPrice.currentValue + 0.1).toPrecision(2));
        console.log('currentPrice', this.currentPrice);
    }
    subtract() {
        this.currentPrice = Math.max(this.currentPrice - 0.1, this.minPrice + 0.1);
        this.bidChanged.emit(this.currentPrice);
    }
    add() {
        this.currentPrice = Number((this.currentPrice + 0.1).toPrecision(2));
        this.bidChanged.emit(this.currentPrice);
    }
}
PricePickerComponent.ɵfac = function PricePickerComponent_Factory(t) { return new (t || PricePickerComponent)(); };
PricePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricePickerComponent, selectors: [["app-price-picker"]], inputs: { minPrice: "minPrice" }, outputs: { bidChanged: "bidChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 1, consts: [[1, "price-ticker"], ["name", "fontStyle", "aria-label", "Font Style"], ["color", "primary", "value", "bold", 1, "toggle", "minus", 3, "click"], ["value", "italic", 1, "middle"], ["color", "primary", "value", "bold", 1, "toggle", "plus", 3, "click"]], template: function PricePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-button-toggle-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricePickerComponent_Template_mat_button_toggle_click_2_listener() { return ctx.subtract(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-button-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricePickerComponent_Template_mat_button_toggle_click_6_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentPrice, " ONE");
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggle"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.price-ticker[_ngcontent-%COMP%] {\n  display: flex;\n  place-items: center;\n  width: 100%;\n}\n\n.middle[_ngcontent-%COMP%] {\n  width: 168px;\n  border: none;\n  overflow: hidden;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  width: 40px;\n  background-color: #6F1C92;\n  border: none;\n  font-weight: bold;\n  outline: none;\n}\n\n.minus[_ngcontent-%COMP%] {\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n}\n\n.plus[_ngcontent-%COMP%] {\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n\n  .mat-button-toggle-group {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByaWNlLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFHSjs7QUFEQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUFJSjs7QUFGQTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7QUFLSjs7QUFGQTtFQUNJLFlBQUE7QUFLSiIsImZpbGUiOiJwcmljZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucHJpY2UtdGlja2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWlkZGxlIHtcbiAgICB3aWR0aDogMTY4cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b2dnbGUge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2RjFDOTI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ubWludXMge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcbn1cbi5wbHVzIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcbiAgXG59XG46Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBib3JkZXI6IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ "tWU4":
/*!************************************************************************!*\
  !*** ./src/app/ux-components/nft-grid-item/nft-grid-item.component.ts ***!
  \************************************************************************/
/*! exports provided: NftGridItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NftGridItemComponent", function() { return NftGridItemComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contract.service */ "oYcS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _pipes_wei_to_one_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/wei-to-one.pipe */ "cOok");









function NftGridItemComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", 100 - ctx_r0.endedPercent)("diameter", ctx_r0.small ? 59 : 81)("color", ctx_r0.nft.status === ctx_r0.SoldStatus.RESALE ? "accent" : "primary");
} }
function NftGridItemComponent_mat_chip_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "weiToOne");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "weiToOne");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r1.nft.status === ctx_r1.SoldStatus.RESALE ? "accent" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.nft.bidInfo ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, ctx_r1.nft.bidInfo.highestBid, 4) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 5, ctx_r1.nft == null ? null : ctx_r1.nft.price, 4), " ONE");
} }
const _c0 = function (a2) { return ["/", "single-nft", a2]; };
const _c1 = function (a0, a1) { return [a0, a1]; };
const _c2 = function (a0) { return [a0]; };
class NftGridItemComponent {
    constructor(contractService, changeDetector) {
        this.contractService = contractService;
        this.changeDetector = changeDetector;
        this.small = false;
        this.subscriptions = [];
        this.SoldStatus = src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["SoldStatus"];
        this.Math = Math;
    }
    ngOnInit() {
        this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000, 1000).subscribe(() => {
            if (this.timeLeft && this.nft) {
                this.timeLeft = new Date(this.timeLeft.getTime() - 1000);
                // console.log('endedPercent', this.endedPercent);
                const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
                this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
                this.changeDetector.detectChanges();
            }
        }));
        this.subscriptions.push(this.contractService.getNftById$(this.nftId).subscribe((nft) => {
            this.nft = nft;
            console.log('rendering grid item', this.nft);
            if (this.nft.saleTime.getTime() < Date.now()) {
                this.timeLeft = null;
            }
            else {
                this.timeLeft = new Date(Math.max(this.nft.saleTime.getTime() - Date.now(), 0));
            }
            const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
            this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
            this.changeDetector.detectChanges();
        }));
    }
    calculateTimeLeft() {
        if (this.timeLeft) {
            this.subscriptions.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000, 1000).subscribe(() => {
                if (this.timeLeft) {
                    this.timeLeft = new Date(this.timeLeft.getTime() - 1000);
                    const timeFromCreated = this.nft.saleTime.getTime() - Date.now();
                    this.endedPercent = (100 - (timeFromCreated / (this.nft.saleTime.getTime() - this.nft.creationTime.getTime())) * 100);
                    this.changeDetector.detectChanges();
                }
            }));
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
NftGridItemComponent.ɵfac = function NftGridItemComponent_Factory(t) { return new (t || NftGridItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_1__["ContractService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
NftGridItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NftGridItemComponent, selectors: [["app-nft-grid-item"]], inputs: { nftId: "nftId", small: "small" }, decls: 10, vars: 21, consts: [[3, "routerLink", "ngClass"], [1, "spinner"], ["mode", "determinate", "strokeWidth", "3", 3, "value", "diameter", "color", 4, "ngIf"], [3, "ngClass"], [1, "svg-icon", 3, "innerHTML"], ["disableRipple", "", "selected", "", 3, "color", 4, "ngIf"], ["mode", "determinate", "strokeWidth", "3", 3, "value", "diameter", "color"], ["disableRipple", "", "selected", "", 3, "color"]], template: function NftGridItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NftGridItemComponent_mat_spinner_2_Template, 1, 3, "mat-spinner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NftGridItemComponent_mat_chip_9_Template, 4, 8, "mat-chip", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.nft.id))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c1, ctx.small ? "container-inner-small" : "container-inner-big", !ctx.nft.owner && (ctx.nft.status === 0 || !ctx.timeLeft) && !ctx.nft.resaleId ? "grayscale" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nft.status !== ctx.SoldStatus.SOLD);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c2, ctx.small ? "nftname-small" : "nftname-big"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.nft == null ? null : ctx.nft.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](16, _c1, (ctx.nft == null ? null : ctx.nft.owner) ? "owned" : (ctx.nft == null ? null : ctx.nft.ownerAddress) ? "ownedByOther" : "available", ctx.small ? "circle-small" : "circle-big"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.nft.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c2, ctx.small ? "label-wrapper-small" : "label-wrapper-big"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(!ctx.nft.owner && (ctx.nft.status === 0 || !ctx.timeLeft)));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChip"]], pipes: [_pipes_wei_to_one_pipe__WEBPACK_IMPORTED_MODULE_7__["WeiToOnePipe"]], styles: [".container-inner-small[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 82px;\n  align-items: center;\n  place-content: center;\n  position: relative;\n}\n.container-inner-small[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container-inner-big[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 96px;\n  align-items: center;\n  place-content: center;\n  position: relative;\n}\n.container-inner-big[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.circle-big[_ngcontent-%COMP%] {\n  width: 67px;\n  height: 67px;\n  margin-bottom: 4px;\n  position: absolute;\n  top: 35px;\n  left: 15px;\n}\n.circle-small[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  margin-bottom: 4px;\n  position: absolute;\n  top: 35px;\n  left: 15px;\n}\n.label-wrapper-big[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 115px;\n}\n.label-wrapper-small[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90px;\n  left: 7px;\n}\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 28px;\n  left: 8px;\n}\n.nft-name[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 20px;\n  font-size: 12px;\n}\n.nft-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n.nftname-small[_ngcontent-%COMP%] {\n  width: 60px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 4px;\n  line-height: 26px;\n}\n.nftname-big[_ngcontent-%COMP%] {\n  width: 96px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 4px;\n  place-content: center;\n  align-items: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25mdC1ncmlkLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7QUFFSjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVGO0FBREU7RUFDRSxlQUFBO0FBR0o7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSUY7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUtGO0FBSEE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FBTUY7QUFKQTtFQUNFLGtCQUFBO0VBRUEsU0FBQTtFQUNBLFNBQUE7QUFNRjtBQUpBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFPRjtBQUxFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFPSjtBQUpBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFFQSxpQkFBQTtBQU1GO0FBSkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBT0YiLCJmaWxlIjoibmZ0LWdyaWQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaW5uZXItc21hbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLmNvbnRhaW5lci1pbm5lci1iaWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLmNpcmNsZS1iaWcge1xuICB3aWR0aDogNjdweDtcbiAgaGVpZ2h0OiA2N3B4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNXB4O1xuICBsZWZ0OiAxNXB4O1xufVxuLmNpcmNsZS1zbWFsbCB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1cHg7XG4gIGxlZnQ6IDE1cHg7XG59XG4ubGFiZWwtd3JhcHBlci1iaWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTE1cHg7XG59XG4ubGFiZWwtd3JhcHBlci1zbWFsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5MHB4O1xuICBsZWZ0OiA3cHg7XG59XG4uc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDI4cHg7XG4gIGxlZnQ6IDhweDtcbn1cbi5uZnQtbmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuLm5mdG5hbWUtc21hbGwge1xuICB3aWR0aDogNjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1hcmdpbi10b3A6IDRweDtcblxuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbi5uZnRuYW1lLWJpZyB7XG4gIHdpZHRoOiA5NnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "uzNG":
/*!**************************************************************************!*\
  !*** ./src/app/ux-components/loading-button/loading-button.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoadingButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonComponent", function() { return LoadingButtonComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");






function LoadingButtonComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoadingButtonComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class LoadingButtonComponent {
    constructor() {
        this.color = 'primary';
    }
    ngOnInit() {
    }
}
LoadingButtonComponent.ɵfac = function LoadingButtonComponent_Factory(t) { return new (t || LoadingButtonComponent)(); };
LoadingButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingButtonComponent, selectors: [["app-loading-button"]], inputs: { loading: "loading", label: "label", color: "color" }, ngContentSelectors: _c0, decls: 4, vars: 5, consts: [[1, "button-container"], ["mat-raised-button", "", 3, "disabled", "color"], ["class", "inner-button", 4, "ngIf"], [4, "ngIf"], [1, "inner-button"], ["diameter", "20"]], template: function LoadingButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoadingButtonComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoadingButtonComponent_mat_icon_3_Template, 2, 0, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@disableButton", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading)("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]], styles: [".button-container[_ngcontent-%COMP%] {\n  width: 65px;\n}\n.button-container[_ngcontent-%COMP%]   .inner-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  place-content: center;\n  height: 100%;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  border-radius: 24px;\n}\nbutton[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 20px;\n}\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 24px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtBQUFGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBbUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWhCRjtBQWlCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBZko7QUFpQkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZkoiLCJmaWxlIjoibG9hZGluZy1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDY1cHg7XG4gIC5pbm5lci1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAvLyA6Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gICBoZWlnaHQ6IDQ0cHg7XG4gIC8vICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLy8gICAvLyBtYXQtaWNvbiB7XG4gIC8vICAgLy8gICBmb250LXNpemU6IDE2cHg7XG4gIC8vICAgLy8gICBoZWlnaHQ6IDIwcHg7XG4gIC8vICAgLy8gfVxuICAvLyAgIC8vIHNwYW4ge1xuICAvLyAgIC8vICAgZm9udC1zaXplOiAxOHB4O1xuICAvLyAgIC8vICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIC8vICAgLy8gICBmb250LXdlaWdodDogNjAwO1xuICAvLyAgIC8vICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgLy8gICAvLyB9XG4gIC8vIH1cblxufVxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('disableButton', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '300px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '65px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false <=> true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')),
            ]),
        ] }, changeDetection: 0 });


/***/ }),

/***/ "v3zf":
/*!***************************************!*\
  !*** ./src/app/services/abi/ABI.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"highestBid\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"bidderAddress\",\"type\":\"address\"}],\"indexed\":false,\"internalType\":\"struct GeoTokens.bidInfo\",\"name\":\"newBid\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"NFTBid\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"location\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"uint16\",\"name\":\"layer\",\"type\":\"uint16\"}],\"indexed\":false,\"internalType\":\"struct GeoTokens.tokenInfo\",\"name\":\"Info\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"saleTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creationTime\",\"type\":\"uint256\"}],\"name\":\"NFTCreation\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"highestBid\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"bidderAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"resalePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"resaleTime\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct GeoTokens.resaleInfo\",\"name\":\"latestInfo\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"resaleId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"ResaleBid\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"resaleID\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"highestBid\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"bidderAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"resalePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"resaleTime\",\"type\":\"uint256\"}],\"indexed\":false,\"internalType\":\"struct GeoTokens.resaleInfo\",\"name\":\"Info\",\"type\":\"tuple\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"creationTime\",\"type\":\"uint256\"}],\"name\":\"ResaleCreation\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"resaleID\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"ResaleRetrieve\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"UserAddress\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"SaleRetrieve\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"layerNumber\",\"type\":\"uint16\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"layerStatus\",\"type\":\"bool\"}],\"name\":\"layerLock\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"UserAddress\",\"type\":\"address\"}],\"name\":\"ApproveUser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"AuctionInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"highestBid\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"bidderAddress\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"Bid\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"location\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"uint16\",\"name\":\"layer\",\"type\":\"uint16\"}],\"internalType\":\"struct GeoTokens.tokenInfo[]\",\"name\":\"MetaData\",\"type\":\"tuple[]\"},{\"internalType\":\"string[]\",\"name\":\"svg\",\"type\":\"string[]\"},{\"internalType\":\"uint256[]\",\"name\":\"DaysLater\",\"type\":\"uint256[]\"}],\"name\":\"CreateNew\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"GetTokenSVG\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"ResaleTokens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"highestBid\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"bidderAddress\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"resalePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"resaleTime\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"tokenID\",\"type\":\"uint256[]\"}],\"name\":\"RetrieveNFT\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"resaleID\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"TokenID\",\"type\":\"uint256[]\"}],\"name\":\"RetrieveReSale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_price\",\"type\":\"uint256\"}],\"name\":\"SetPrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"TokenSaleTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"approvedUsers\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"resaleID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"TokenID\",\"type\":\"uint256\"}],\"name\":\"bidResale\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint16\",\"name\":\"layerNumber\",\"type\":\"uint16\"},{\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"changeLayerLock\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"newDaysLater\",\"type\":\"uint256\"}],\"name\":\"changeSaleTime\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"len\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getAllNFT\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"location\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"uint16\",\"name\":\"layer\",\"type\":\"uint16\"}],\"internalType\":\"struct GeoTokens.tokenInfo[]\",\"name\":\"\",\"type\":\"tuple[]\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenID\",\"type\":\"uint256\"}],\"name\":\"getMetadata\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"location\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"uint16\",\"name\":\"layer\",\"type\":\"uint16\"}],\"internalType\":\"struct GeoTokens.tokenInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalNFTs\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUserOwnedNFT\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"location\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"status\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"uint16\",\"name\":\"layer\",\"type\":\"uint16\"}],\"internalType\":\"struct GeoTokens.tokenInfo[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"price\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"TokenID\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"daysAfter\",\"type\":\"uint256\"}],\"name\":\"putTokenForResale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"retrieve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"salesBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _single_nft_single_nft_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-nft/single-nft.component */ "TiO4");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ "ss/J");
/* harmony import */ var _transaction_result_transaction_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-result/transaction-result.component */ "jAUS");
/* harmony import */ var _all_nfts_all_nfts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-nfts/all-nfts.component */ "21Hg");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sell/sell.component */ "hNKM");
/* harmony import */ var _retrieve_nfts_retrieve_nfts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./retrieve-nfts/retrieve-nfts.component */ "6mYC");
/* harmony import */ var _services_guards_route_lock_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/guards/route-lock.guard */ "1wIp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    {
        path: '*',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        component: _start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"],
        path: 'start',
    },
    {
        component: _all_nfts_all_nfts_component__WEBPACK_IMPORTED_MODULE_4__["AllNFTsComponent"],
        path: 'all-nfts',
    },
    {
        component: _single_nft_single_nft_component__WEBPACK_IMPORTED_MODULE_1__["SingleNftComponent"],
        path: 'single-nft/:id',
    },
    {
        component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_5__["SellComponent"],
        path: 'sell/:id'
    },
    {
        component: _transaction_result_transaction_result_component__WEBPACK_IMPORTED_MODULE_3__["TransactionResultComponent"],
        path: 'transaction-result',
    },
    {
        component: _retrieve_nfts_retrieve_nfts_component__WEBPACK_IMPORTED_MODULE_6__["RetrieveNftsComponent"],
        path: 'retrieve-nfts',
        canDeactivate: [_services_guards_route_lock_guard__WEBPACK_IMPORTED_MODULE_7__["RouteLockGuard"]],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map