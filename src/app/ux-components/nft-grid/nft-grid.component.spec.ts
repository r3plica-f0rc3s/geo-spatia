import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftGridComponent } from './nft-grid.component';

describe('NftGridComponent', () => {
  let component: NftGridComponent;
  let fixture: ComponentFixture<NftGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
