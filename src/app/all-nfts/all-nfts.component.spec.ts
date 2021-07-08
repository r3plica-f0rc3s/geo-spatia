import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNFTsComponent } from './all-nfts.component';

describe('NearbyComponent', () => {
  let component: AllNFTsComponent;
  let fixture: ComponentFixture<AllNFTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNFTsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNFTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
