/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CourtainComponent } from './courtain.component';

describe('CourtainComponent', () => {
  let component: CourtainComponent;
  let fixture: ComponentFixture<CourtainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
