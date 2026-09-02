import { PRODUCT_CATEGORIES } from './product-categories.data';
import type { Product } from './product.types';

export const TOMES = {
  principlesofThaumaturgicConduction: {
    name: 'Principles of Thaumaturgic Conduction',
    slug: 'principles-of-thaumaturgic-conduction',
    sku: 'SSC-TOM-0108',
    category: PRODUCT_CATEGORIES.tome,
    price: {
      amount: 9,
      currency: 'Silver',
    },
    weight: {
      amount: 1,
      unit: 'copy',
    },
  },
} as const satisfies Record<string, Product>;
