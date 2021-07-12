import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftListItemComponent } from './nft-list-item.component';

describe('NftListItemComponent', () => {
  let component: NftListItemComponent;
  let fixture: ComponentFixture<NftListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
