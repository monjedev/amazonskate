import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  standalone: true,
  imports: [],
  templateUrl: './price-display.html',
  styleUrl: './price-display.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceDisplay {
  // =========================================================
  // Public API
  // =========================================================

  /**
   * Precio actual.
   * Es obligatorio.
   */
  price = input.required<number>();

  /**
   * Precio anterior/original.
   * Si no se proporciona, no se muestra descuento.
   */
  originalPrice = input<number | null>(null);

  /**
   * Símbolo o texto de moneda.
   */
  currency = input('$');

  // =========================================================
  // Derived state
  // =========================================================

  /**
   * Porcentaje de descuento calculado automáticamente.
   *
   * Ejemplo:
   * price = 80
   * originalPrice = 100
   * resultado = 20
   */
  discountPercentage = computed(() => {
    const price = this.price();
    const originalPrice = this.originalPrice();

    if (originalPrice === null || originalPrice <= 0 || originalPrice <= price) {
      return 0;
    }

    return Math.round(((originalPrice - price) / originalPrice) * 100);
  });
}
