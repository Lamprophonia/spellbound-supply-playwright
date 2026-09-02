import { IMPLEMENTS } from './products/implements.data';
import { INGREDIENTS } from './products/ingredients.data';
import { POTIONS } from './products/potions.data';
import { TOMES } from './products/tomes.data';

export const PRODUCTS = {
  ...POTIONS,
  ...INGREDIENTS,
  ...TOMES,
  ...IMPLEMENTS,
} as const;
