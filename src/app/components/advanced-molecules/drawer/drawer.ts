import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [],
  templateUrl: './drawer.html',
  styleUrl: './drawer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Drawer {
  title = input('');

  isOpen = input(false);
  position = input<'left' | 'right'>('left');
  closed = output<void>();

  close() {
    this.closed.emit();
  }
}
