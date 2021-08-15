import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true
  }]
})
export class TextareaComponent implements ControlValueAccessor {
  @Input()
  public value: string = null;
  @Input()
  public cdkAutosizeMinRows: string;
  @Input()
  public cdkAutosizeMaxRows: string;
  @Input()
  error: string = null;
  @Input()
  minHeight: string;
  @Input()
  maxHeight: string;
  @Input()
  disabled = false;
  onChange;
  onTouched = () => {};
  updateChanges() {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }
  writeValue(value: any): void {
    this.value = value;
    this.updateChanges();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
