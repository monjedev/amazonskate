import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {
  title = input('');
  message = input('');
  type = input<'success' | 'error' | 'warning' | 'info'>('info');
  duration = input(3000);

  isVisible = signal(true);
  closed = output<void>();

  private timeoutId?: ReturnType<typeof setTimeout>;

  constructor() {
    this.timeoutId = setTimeout(() => this.close(), this.duration());
  }

  close() {
    if (!this.isVisible()) {
      return;
    }

    this.isVisible.set(false);

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.closed.emit();
  }
}
