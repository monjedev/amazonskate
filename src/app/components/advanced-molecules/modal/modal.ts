import { ChangeDetectionStrategy, Component, DOCUMENT, ElementRef, HostListener, inject, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Modal {
  title = input('');
  isOpen = input(false);
  closed = output<void>();

  // Inyección moderna
  private doc = inject(DOCUMENT);

  // viewChild para el foco
  closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');

  // Efecto secundario para el foco (ejecutado cuando el componente se monta)
  constructor() {
    setTimeout(() => this.closeBtn()?.nativeElement.focus(), 0);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isOpen()) this.close();
  }

  close() {
    this.closed.emit();
  }
}
