import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Avatar {
  name = input('');
  src = input('');
  initials = input('');
  size = input<'sm' | 'md' | 'lg'>('md');
}
