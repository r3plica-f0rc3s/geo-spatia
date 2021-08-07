import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-price-picker',
  templateUrl: './price-picker.component.html',
  styleUrls: ['./price-picker.component.scss']
})
export class PricePickerComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input()
  minPrice: number;
  currentPrice: number;
  @Input()
  value = '';
  @Output()
  bidChanged = new EventEmitter<number>();
  onTouched: any;
  onChange: any;
  disabled: boolean;
  constructor() { }
  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
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
