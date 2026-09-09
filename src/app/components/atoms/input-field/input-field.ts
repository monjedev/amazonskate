import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  signal,
  viewChild,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [],
  templateUrl: './input-field.html',
  styleUrl: './input-field.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputField),
      multi: true,
    },
  ],
})
export class InputField implements ControlValueAccessor {
  label = input('');
  type = input<'text' | 'email' | 'password'>('text');
  placeholder = input('');
  error = input('');
  disabled = input(false);

  // Disabled state controlled by Angular Forms
  private formDisabled = signal(false);

  value = signal('');
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;

    this.value.set(input.value);
    this.onChange(input.value);
  }

  onBlur() {
    this.onTouched();
  }
  writeValue(value: string | null) {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.formDisabled.set(isDisabled);
  }

  isDisabled() {
    return this.disabled() || this.formDisabled();
  }
}
