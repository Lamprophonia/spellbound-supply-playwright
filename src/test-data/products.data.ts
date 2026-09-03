import { IMPLEMENTS } from './products/implements.data';
import { INGREDIENTS } from './products/ingredients.data';
import { POTIONS } from './products/potions.data';
import { TOMES } from './products/tomes.data';

// Provide tests with one stable catalog while product records remain organized by category.
export const PRODUCTS = {
  ...POTIONS,
  ...INGREDIENTS,
  ...TOMES,
  ...IMPLEMENTS,
} as const;
