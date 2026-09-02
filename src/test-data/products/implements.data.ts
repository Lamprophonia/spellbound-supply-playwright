import { PRODUCT_CATEGORIES } from './product-categories.data';
import type { Product } from './product.types';

export const IMPLEMENTS = {
  commonChannelingWand: {
    name: 'Common Channeling Wand',
    slug: 'common-channeling-wand',
    sku: 'SSC-WND-0001',
    category: PRODUCT_CATEGORIES.implement,
    price: {
      amount: 10,
      currency: 'Silver',
    },
    weight: {
      amount: 1,
      unit: 'wand',
    },
  },
} as const satisfies Record<string, Product>;
