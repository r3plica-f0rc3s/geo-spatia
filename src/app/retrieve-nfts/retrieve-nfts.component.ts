import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ContractService, GeoNFT } from '../services/contract.service';
import { MapHelperService } from '../services/map-helper.service';

@Component({
  templateUrl: './retrieve-nfts.component.html',
  styleUrls: ['./retrieve-nfts.component.scss']
})
export class RetrieveNftsComponent implements OnInit {
  subscriptions = [];
  retrieving = false;
  nftsToRetrieve: GeoNFT[] = [];
  constructor(private contractService: ContractService, private mapHelperService: MapHelperService) { }

  ngOnInit(): void {
    this.contractService.getNftsToRetrieve$().pipe(filter(x => x.length > 0)).subscribe((nftsToRetrieve) => {
      this.mapHelperService.setMultipleMarkers(nftsToRetrieve);
      this.nftsToRetrieve = nftsToRetrieve;
    });
  }

  retrieve(): void {

  }

}
