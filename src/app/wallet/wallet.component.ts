import { ContractService } from './../services/contract.service';
import { DeviceDetectorService } from './../services/device-detector.service';
import { UxService } from './../services/ux.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  isMobile = !this.deviceDetectorService.isDesktop();
  constructor(
    public uxService: UxService,
    private deviceDetectorService: DeviceDetectorService,
    public contractService: ContractService
    ) { }

  ngOnInit(): void {
  }

}
