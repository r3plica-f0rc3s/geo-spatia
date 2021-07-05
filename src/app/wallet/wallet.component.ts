import { Component, OnInit } from '@angular/core';
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
  ownedNFTs$ = this.contractService.ownedNFTs$.pipe(tap(console.log));
  constructor(
    public uxService: UxService,
    private deviceDetectorService: DeviceDetectorService,
    public contractService: ContractService,
    public priceConverter: PriceConverterService,
  ) { }

  ngOnInit(): void {
    this.contractService.walletInfo$.pipe(
      filter(x => !!x),
      tap(walletInfo => this.walletInfo = walletInfo),
      switchMap(walletInfo => this.priceConverter.convertOneToUSDT(Number(walletInfo.balance)))
    ).subscribe((convertedBalance: number) => {
      this.convertedBalance = convertedBalance.toFixed(2);
    });

  }

}
