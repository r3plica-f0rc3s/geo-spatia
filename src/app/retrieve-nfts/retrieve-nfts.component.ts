import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private contractService: ContractService, 
    private mapHelperService: MapHelperService,
    private router: Router) { }

  ngOnInit(): void {
    this.contractService.getNftsToRetrieve$().pipe(filter(x => x.length > 0)).subscribe((nftsToRetrieve) => {
      this.mapHelperService.setMultipleMarkers(nftsToRetrieve);
      this.nftsToRetrieve = nftsToRetrieve;
    });
  }

  retrieve(): void {
    this.retrieving = true;
    this.contractService.retrieveNFTs(this.nftsToRetrieve.map(nft => String(nft.id))).then(() => {
      this.router.navigate(['', 'all-nfts']);
    });
  }

}
