import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox-component',
  imports: [],
  templateUrl: './checkbox-component.html',
  styleUrl: './checkbox-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  label = input('');
  disabled = input(false);

  value = signal(false);
  private formDisabled = signal(false);

  private onChangeCallback: (value: boolean) => void = () => {};
  private onTouchedCallback: () => void = () => {};

  isDisabled = () => this.disabled() || this.formDisabled();

  onCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;

    this.value.set(checkbox.checked);
    this.onChangeCallback(checkbox.checked);
    this.onTouchedCallback();
  }

  writeValue(value: boolean | null) {
    this.value.set(value ?? false);
  }

  registerOnChange(fn: (value: boolean) => void) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.formDisabled.set(isDisabled);
  }
}
