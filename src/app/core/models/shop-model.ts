export interface ProductCategory {
  id: string;
  label: string;
  icon?: string;
  count: number;
}

export interface PriceRange {
  id: string;
  label: string;
  min: number;
  max: number | null;
}

export interface Forger {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  description: string;
  stock: 'inStock' | 'outOfStock';
  image: string;
  tag?: 'Elite' | 'Professional' | 'Advanced';
}
