import type { ProductCategory } from './product-categories.data';

export interface ProductPrice {
  readonly amount: number;
  readonly currency: string;
}

export interface ProductPurchaseUnit {
  readonly amount: number;
  readonly unit: string;
}

export interface Product {
  readonly name: string;
  readonly slug: string;
  readonly sku: string;
  readonly category: ProductCategory;
  readonly price: ProductPrice;
  readonly purchaseUnit: ProductPurchaseUnit;
}
