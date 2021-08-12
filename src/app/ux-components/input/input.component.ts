import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  placeholder = '';
  @Input()
  type = '';
  @Input()
  error: string = null;
  @Input()
  numberOnly = false;
  @Input()
  disabled = false;
  @Input()
  label: string;

  forceShowText = false;

  @Input()
  value = '';

  onTouched = () => {};
  updateChanges(): void {
    this.onChange(this.value);
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

  onChange(searchValue: string): void {
    if (this.type === 'number' && searchValue) {
      if (searchValue.replace) {
        this.value = searchValue.replace(',', '.');
      }
    }
    // console.log(searchValue);
  }

  togglePasswordVisibility(e): void {
    e.preventDefault();
    e.stopPropagation();
    this.forceShowText = !this.forceShowText;
  }
}
