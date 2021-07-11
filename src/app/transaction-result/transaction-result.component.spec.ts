import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionResultComponent } from './transaction-result.component';

describe('NftBoughtComponent', () => {
  let component: TransactionResultComponent;
  let fixture: ComponentFixture<TransactionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
