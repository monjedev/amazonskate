import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Spinner } from '../spinner/spinner';

@Component({
  selector: 'app-btn',
  standalone: true,
  templateUrl: 'button.html',
  styleUrls: ['./button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Spinner],
})
export class Button {
  type = input<'button' | 'submit' | 'reset'>('button');
  color = input<'primary' | 'secondary' | 'accent' | 'danger' | 'success' | 'cta'>('primary');
  style = input<'solid' | 'soft' | 'outline' | 'ghost'>('solid');
  size = input<'small' | 'medium' | 'large'>('medium');
  disabled = input(false);
  loading = input(false);

  btnClick = output<void>();

  handleClick(event: MouseEvent): void {
    if (this.disabled() || this.loading()) return;
    this.btnClick.emit();
  }
}
