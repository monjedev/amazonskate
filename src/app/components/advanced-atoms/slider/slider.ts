import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Slider {
  min = input(0);
  max = input(100);
  step = input(1);
  value = input(0);
  valueChange = output<number>();
  onInput(event: Event) {
    this.valueChange.emit(Number((event.target as HTMLInputElement).value));
  }
}
