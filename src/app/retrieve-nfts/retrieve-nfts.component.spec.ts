import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveNftsComponent } from './retrieve-nfts.component';

describe('RetrieveNftsComponent', () => {
  let component: RetrieveNftsComponent;
  let fixture: ComponentFixture<RetrieveNftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveNftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveNftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
