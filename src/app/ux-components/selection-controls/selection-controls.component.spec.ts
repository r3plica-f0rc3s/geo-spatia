import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionControlsComponent } from './selection-controls.component';

describe('SelectionControlsComponent', () => {
  let component: SelectionControlsComponent;
  let fixture: ComponentFixture<SelectionControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
