import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Badge } from "../../atoms/badge/badge";
import { PriceDisplay } from "../../advanced-atoms/price-display/price-display";
import { Button } from "../../atoms/button/button";
import { Product } from '../../../core/models/shop-model';
import { Rating } from "../../advanced-atoms/rating/rating";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [Badge, PriceDisplay, Button, Rating],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  product = input.required<Product>();
   // En un proyecto real, tipar como interface Product
  buy = output<Product>();
}
