import type { ProductCategory } from './product-categories.data';

export interface ProductPrice {
  readonly amount: number;
  readonly currency: string;
}

export interface ProductWeight {
  readonly amount: number;
  readonly unit: string;
}

export interface Product {
  readonly name: string;
  readonly slug: string;
  readonly sku: string;
  readonly category: ProductCategory;
  readonly price: ProductPrice;
  readonly weight: ProductWeight;
}
