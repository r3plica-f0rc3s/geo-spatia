import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price-picker',
  templateUrl: './price-picker.component.html',
  styleUrls: ['./price-picker.component.scss']
})
export class PricePickerComponent implements OnInit, OnChanges {
  @Input()
  minPrice: number;
  currentPrice: number;
  @Output()
  bidChanged = new EventEmitter<number>();
  constructor() { }
  ngOnInit(): void {
    this.currentPrice = Number((this.minPrice + 0.1).toPrecision(2));
    this.bidChanged.emit(this.currentPrice);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.currentPrice = Number((changes.minPrice.currentValue + 0.1).toPrecision(2));
    console.log('currentPrice', this.currentPrice);
  }
  subtract(): void {
    this.currentPrice = Math.max(this.currentPrice - 0.1, this.minPrice + 0.1);
    this.bidChanged.emit(this.currentPrice);
  }
  add(): void {
    this.currentPrice = Number((this.currentPrice + 0.1).toPrecision(2));
    this.bidChanged.emit(this.currentPrice);
  }

}
