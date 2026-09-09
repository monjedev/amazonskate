import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { FORGERS, PRICE_RANGES, SHOP_CATEGORIES } from '../../../core/mocks/shop-mock';
import { ProductCategory } from '../../../core/models/shop-model';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterBar {
  // Inputs para permitir pasar categorías externas (con fallback al mock)
  categories = input<ProductCategory[]>(SHOP_CATEGORIES);

  priceRanges = PRICE_RANGES;
  forgers = FORGERS;

  selectedCategory = signal('all');
  categoryChange = output<string>();

  selectCategory(id: string) {
    this.selectedCategory.set(id);
    this.categoryChange.emit(id);
  }
}
