import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyNftSvgComponent } from './empty-nft-svg.component';

describe('EmptyNftSvgComponent', () => {
  let component: EmptyNftSvgComponent;
  let fixture: ComponentFixture<EmptyNftSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyNftSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyNftSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
