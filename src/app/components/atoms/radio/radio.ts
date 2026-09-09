import { Component, computed, forwardRef, input, signal } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  imports: [],
  templateUrl: './radio.html',
  styleUrl: './radio.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Radio), multi: true }],
})
export class Radio {
  name = input('');
  label = input('');
  value = input.required<string>();
  disabled = input(false);

  selected = signal<string>('');
  private formDisabled = signal(false);

  private onChangeCallback: (value: string) => void = () => {};
  private onTouchedCallback: () => void = () => {};

  isDisabled = computed(() => this.disabled() || this.formDisabled());
  onSelect() {
    const value = this.value();
    this.selected.set(this.value());
    this.onTouchedCallback();
    this.onChangeCallback(this.value());
  }
  writeValue(value: string) {
    this.selected.set(value);
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.formDisabled.set(isDisabled);
  }
}
