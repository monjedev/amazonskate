import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { PRODUCTS, SHOP_CATEGORIES } from '../../../core/mocks/shop-mock';
import { InputField } from "../../atoms/input-field/input-field";
import { ProductCard } from '../../molecules/product-card/product-card';
import { FilterBar } from '../../organisms/filter-bar/filter-bar';
import { Product } from '../../../core/models/shop-model';
import { Toast } from "../../advanced-molecules/toast/toast";
import { SearchBar } from "../../molecules/search-bar/search-bar";

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [FilterBar, ProductCard, Toast, SearchBar],
  templateUrl: './shop-page.html',
  styleUrl: './shop-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopPage {
  products = PRODUCTS;
  categories = SHOP_CATEGORIES;

  // Filter states
  searchTerm = signal('');
  selectedCategory = signal('all');

  // Filtered list using computed
  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.products.filter((p) => {
      const matchesSearch = !term || p.title.toLowerCase().includes(term);
      const matchesCategory =
        this.selectedCategory() === 'all' || p.category === this.selectedCategory();
      return matchesSearch && matchesCategory;
    });
  });

  // Toast state
  toastMessage = signal('');
  toastType = signal<'success' | 'error'>('success');

  onSearch(term: string) {
    this.searchTerm.set(term);
  }
  onCategoryChange(categoryId: string) {
    this.selectedCategory.set(categoryId);
  }

  onBuy(product: Product) {
    if (product.stock === 'outOfStock') {
      this.toastMessage.set(`El producto ${product.title} está agotado.`);
      this.toastType.set('error');
    } else {
      this.toastMessage.set(`¡${product.title} añadido al carrito!`);
      this.toastType.set('success');
    }
    setTimeout(() => this.toastMessage.set(''), 3000);
  }
}
