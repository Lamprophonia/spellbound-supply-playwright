import { PRODUCT_CATEGORIES } from './product-categories.data';
import type { Product } from './product.types';

export const INGREDIENTS = {
  nineToothProcessedMandrakeRoot: {
    name: 'Nine-Tooth Processed Mandrake Root',
    slug: 'nine-tooth-processed-mandrake-root',
    sku: 'SSC-REA-0018',
    category: PRODUCT_CATEGORIES.ingredient,
    price: {
      amount: 12,
      currency: 'Copper',
    },
    purchaseUnit: {
      amount: 1,
      unit: 'packet',
    },
  },
} as const satisfies Record<string, Product>;
