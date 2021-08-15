import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LngLat } from 'mapbox-gl';
import { LocationSelectorState } from '../select-location/select-location.component';
import { ContractService, TransactionResultEvent } from '../services/contract.service';
import { MapHelperService } from '../services/map-helper.service';
@Component({
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.scss']
})
export class CreateNftComponent implements OnInit, OnDestroy {
  selected: LngLat;
  creating = false;
  navExtras: LocationSelectorState;
  subscriptions: Subscription[] = [];
  createNftForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    location: ['45,45', [Validators.required]],
    svg: ['', [Validators.required]],
    price: ['', [Validators.required]],
    tillDate: [new Date(Date.now()), Validators.required]
  });
  constructor(
    private formBuilder: FormBuilder,
    private mapHelperService: MapHelperService,
    private router: Router,
    private contractServuce: ContractService,
    ) {
    // get new markers location
    this.navExtras = this.router.getCurrentNavigation().extras.state as LocationSelectorState;


  }

  ngOnInit(): void {
    if (this.navExtras.selectedLocation) {
      this.mapHelperService.setSingleNewNftMarker();
      this.createNftForm.patchValue({
        location: this.navExtras.selectedLocation,
        tillDate: new Date(Date.now()),

      });
      this.createNftForm.valueChanges.subscribe(data => {
          console.log(data);
      });
    }
  }

  priceChanged(price): void {
    if (!price) { return; }
    this.createNftForm.patchValue({ price });
  }

  dateChanged(event): void {
    this.createNftForm.patchValue({ tillDate: event });
  }

  submit(): void {
    this.creating = true;
    this.contractServuce.createNft(this.createNftForm.value);
    this.handleTransaction();
  }

  private handleTransaction(): void {
    this.subscriptions.push(
      this.contractServuce.transactions$.subscribe((transactionEvent: TransactionResultEvent) => {
        if (transactionEvent && transactionEvent.success !== undefined) {
          this.router.navigate(['/', 'transaction-result'], { state: { ...{ closable: true }, ...transactionEvent } });
        }
      }, (err) => {
        this.router.navigate(['/', 'transaction-result'], { state: { success: false, closable: true } });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
