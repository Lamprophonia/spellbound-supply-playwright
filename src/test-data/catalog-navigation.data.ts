import type { Product } from './products/product.types';
import { PRODUCTS } from './products.data';

// Keep navigation coverage explicit so new fixtures do not automatically become test cases.
export const CATALOG_NAVIGATION_PRODUCTS = [
  PRODUCTS.commonHealingPotion,
  PRODUCTS.hedgeDraughtOfRestfulness,
] as const satisfies readonly Product[];
