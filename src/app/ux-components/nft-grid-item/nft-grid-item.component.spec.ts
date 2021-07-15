import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftGridItemComponent } from './nft-grid-item.component';

describe('NftGridItemComponent', () => {
  let component: NftGridItemComponent;
  let fixture: ComponentFixture<NftGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
