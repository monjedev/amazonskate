import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rating {
  value = input(0);
  readonly = input(false);
  valueChange = output<number>();

  hoverValue = signal(0);

  rate(star: number) {
    if (!this.readonly()) {
      this.valueChange.emit(star);
    }
  }
  rating = signal(0);

  onRatingChange(value: number): void {
    this.rating.set(value);
  }
}
