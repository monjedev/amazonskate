import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Badge {
  label = input('');
  variant = input<'neutral' | 'secondary' |'primary' | 'success' | 'danger' | 'warning'>('neutral');
}
