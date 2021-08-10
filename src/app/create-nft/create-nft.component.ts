import { Component, OnInit } from '@angular/core';
import { MapHelperService } from '../services/map-helper.service';

@Component({
  templateUrl: './create-nft.component.html',
  styleUrls: ['./create-nft.component.scss']
})
export class CreateNftComponent implements OnInit {

  constructor(private mapHelperService: MapHelperService) { }

  ngOnInit(): void {
  }

}
