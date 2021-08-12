import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LngLat } from 'mapbox-gl';
import { ContractService } from '../services/contract.service';
import { MapHelperService } from '../services/map-helper.service';

@Component({
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.scss']
})
export class CreateNftComponent implements OnInit {
  selected: LngLat;
  creating = false;
  createNftForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    location: ['45,45', [Validators.required]],
    svg: ['', [Validators.required]],
    tillDate: [new Date(Date.now()), Validators.required]
  });
  constructor(
    private formBuilder: FormBuilder,
    private mapHelperService: MapHelperService,
    private router: Router,
    private contractServuce: ContractService,
    ) {
    // get new markers location
    this.selected = this.router.getCurrentNavigation().extras.state as LngLat;
  }

  ngOnInit(): void {
    // this.mapHelperService.setSingleMarker({

    // })
  }

  submit(): void {
    // this.contractServuce.createNft({
    //   location
    // })
  }
}
