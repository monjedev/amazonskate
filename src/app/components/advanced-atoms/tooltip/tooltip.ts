import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  input,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tooltip {
  message = input('');
  position = input<'top' | 'bottom' | 'left' | 'right'>('top');
  trigger = input<'hover' | 'click'>('hover');

  isVisible = signal(false);

  // viewChild para el DOM
  tooltipContent = viewChild<ElementRef>('tooltipContent');

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.trigger() === 'hover') this.isVisible.set(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.trigger() === 'hover') this.isVisible.set(false);
  }

  @HostListener('click')
  onClick() {
    if (this.trigger() === 'click') {
      this.isVisible.update((val) => !val);
    }
  }
}
