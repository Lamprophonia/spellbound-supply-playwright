import { PRODUCT_CATEGORIES } from './product-categories.data';
import type { Product } from './product.types';

export const POTIONS = {
  commonHealingPotion: {
    name: 'Common Healing Potion',
    slug: 'common-healing-potion',
    sku: 'SSC-POT-0001',
    category: PRODUCT_CATEGORIES.potion,
    price: {
      amount: 5,
      currency: 'Copper',
    },
    weight: {
      amount: 1,
      unit: 'ounce',
    },
  },

  hedgeDraughtOfRestfulness: {
    name: 'Hedge Draught of Restfulness',
    slug: 'hedge-draught-of-restfulness',
    sku: 'SSC-POT-0201',
    category: PRODUCT_CATEGORIES.potion,
    price: {
      amount: 15,
      currency: 'Copper',
    },
    weight: {
      amount: 1,
      unit: 'ounce',
    },
  },

  hearthEaseDigestiveCordial: {
    name: 'Hearth-Ease Digestive Cordial',
    slug: 'hearth-ease-digestive-cordial',
    sku: 'SSC-POT-0310',
    category: PRODUCT_CATEGORIES.potion,
    price: {
      amount: 8,
      currency: 'Copper',
    },
    weight: {
      amount: 1,
      unit: 'ounce',
    },
  },

  marinersReserveWaterBreathingDraught: {
    name: 'Mariner’s Reserve Water-Breathing Draught',
    slug: 'mariners-reserve-water-breathing-draught',
    sku: 'SSC-POT-0450',
    category: PRODUCT_CATEGORIES.potion,
    price: {
      amount: 3,
      currency: 'Silver',
    },
    weight: {
      amount: 1,
      unit: 'vial',
    },
  },
} as const satisfies Record<string, Product>;
