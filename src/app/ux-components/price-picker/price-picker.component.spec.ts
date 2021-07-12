import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePickerComponent } from './price-picker.component';

describe('PricePickerComponent', () => {
  let component: PricePickerComponent;
  let fixture: ComponentFixture<PricePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
