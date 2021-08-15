import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs/operators';
import { ContractService, WalletInfo } from './../services/contract.service';
import { DeviceDetectorService } from './../services/device-detector.service';
import { PriceConverterService } from './../services/price-converter.service';
import { UxService } from './../services/ux.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  isMobile = !this.deviceDetectorService.isDesktop();
  balance: number;
  convertedBalance: string;
  walletInfo: WalletInfo;
  enableSales: boolean;
  isAdmin: boolean;
  ownedNFTs$ = this.contractService.getOwnedNFTs$();
  nftsWithBids = [];
  nftsWithBids$ = this.contractService.getNftsWithMyBids$().pipe(tap(x => console.log('nfts with bids', x)));
  constructor(
    public uxService: UxService,
    private deviceDetectorService: DeviceDetectorService,
    public contractService: ContractService,
    public priceConverter: PriceConverterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contractService.walletInfo$.pipe(
      filter(x => !!x),
      tap(walletInfo => this.walletInfo = walletInfo),
      tap(walletInfo => this.isAdmin = walletInfo.isContractOwner),
      switchMap(walletInfo => this.priceConverter.convertOneToUSDT(Number(walletInfo.balance)))
    ).subscribe((convertedBalance: number) => {
      this.convertedBalance = convertedBalance.toFixed(2);
      this.loadSalesStatus();
    });

    this.contractService.getNftsWithMyBids$().subscribe((nfts) => {
      console.log('nfts with bids', nfts);
      this.nftsWithBids = nfts;
    });

  }

  loadSalesStatus(): void {
    this.contractService.isApprovedForAll().then((result) => {
      this.enableSales = result;
    }).catch(e => {
      console.error(e);
    });
  }

  toggleSales(): void {
    if (!this.enableSales) {
      this.contractService.enableResalePermission();
    } else {
      this.contractService.disableResalePermission();
    }
  }

  async logout(): Promise<void> {
    await this.router.navigate(['/']);
    this.contractService.logout();
  }

}
