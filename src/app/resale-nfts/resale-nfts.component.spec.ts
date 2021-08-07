import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaleNftsComponent } from './resale-nfts.component';

describe('ResaleNftsComponent', () => {
  let component: ResaleNftsComponent;
  let fixture: ComponentFixture<ResaleNftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResaleNftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaleNftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
