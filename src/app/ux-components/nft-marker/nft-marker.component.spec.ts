import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftMarkerComponent } from './nft-marker.component';

describe('NftMarkerComponent', () => {
  let component: NftMarkerComponent;
  let fixture: ComponentFixture<NftMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
