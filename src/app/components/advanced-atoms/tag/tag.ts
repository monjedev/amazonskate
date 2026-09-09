import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tag {
  label = input.required<string>();
  removable = input(false);
  active = input(false);
  selected = output<void>();
  removed = output<void>();
}
