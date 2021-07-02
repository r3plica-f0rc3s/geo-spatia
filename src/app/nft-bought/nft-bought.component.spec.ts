import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftBoughtComponent } from './nft-bought.component';

describe('NftBoughtComponent', () => {
  let component: NftBoughtComponent;
  let fixture: ComponentFixture<NftBoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftBoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
