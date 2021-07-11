import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit, OnDestroy {
  subscriptions = [];
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.subscriptions.push(this.activatedRoute.params.subscribe((params: Params) => {
      const tokenId = params.id;
      //
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

}
