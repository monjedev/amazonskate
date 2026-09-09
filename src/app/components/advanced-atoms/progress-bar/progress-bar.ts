import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBar {
  // =========================================================
  // Public API
  // =========================================================

  /**
   * Valor del progreso.
   * Se espera un valor entre 0 y 100.
   */
  valueProgressBar = input.required<number>();

  /**
   * Muestra el porcentaje debajo de la barra.
   */
  showLabel = input(false);

  // =========================================================
  // Derived state
  // =========================================================

  /**
   * Garantiza que el valor visual siempre esté
   * dentro del rango permitido: 0 - 100.
   */
  normalizedValue = computed(() => Math.min(100, Math.max(0, this.valueProgressBar())));
}
