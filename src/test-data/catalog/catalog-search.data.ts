import { PRODUCTS } from '@test-data/products.data';

export const CATALOG_SEARCH_SCENARIO = {
  query: 'common healing',
  expectedProduct: PRODUCTS.commonHealingPotion,
  expectedResultCount: 1,
} as const;

export const CATALOG_REPEAT_SEARCH_SCENARIO = {
  initialQuery: 'common',
  updatedQuery: 'common healing',
  expectedProduct: PRODUCTS.commonHealingPotion,
  expectedResultCount: 1,
} as const;
