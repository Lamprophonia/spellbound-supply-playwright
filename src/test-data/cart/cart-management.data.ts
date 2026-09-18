import type { Product } from '../products/product.types';

import { PRODUCTS } from '../products.data';

export const CART_REMOVAL_SCENARIO = {
  productToRemove: PRODUCTS.commonHealingPotion,
  productToKeep: PRODUCTS.hedgeDraughtOfRestfulness,
} as const satisfies {
  productToRemove: Product;
  productToKeep: Product;
};

export const CART_CLEAR_SCENARIO = {
  firstProduct: PRODUCTS.commonHealingPotion,
  secondProduct: PRODUCTS.hedgeDraughtOfRestfulness,
} as const satisfies {
  firstProduct: Product;
  secondProduct: Product;
};

export const CART_COUNTER_SCENARIO = {
  firstProduct: PRODUCTS.commonHealingPotion,
  secondProduct: PRODUCTS.hedgeDraughtOfRestfulness,
  firstQuantity: 2,
  secondQuantity: 1,
  expectedCount: 3,
} as const satisfies {
  firstProduct: Product;
  secondProduct: Product;
  firstQuantity: number;
  secondQuantity: number;
  expectedCount: number;
};
