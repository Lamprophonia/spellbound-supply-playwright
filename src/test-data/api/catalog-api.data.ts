import { PRODUCTS } from '@test-data/products.data';

export const CATALOG_API = {
  path: '/api/products',
  schemaVersion: 1,
} as const;

export const CATALOG_API_LOOKUP_SCENARIO = {
  query: PRODUCTS.commonHealingPotion.sku,
  expectedProduct: PRODUCTS.commonHealingPotion,
  expectedResultCount: 1,
} as const;

export const CATALOG_API_NO_RESULTS_SCENARIO = {
  query: 'qa-no-match-7f93c2',
  expectedResultCount: 0,
} as const;

export const CATALOG_API_INVALID_STATUS_SCENARIO = {
  status: 'invalid',
  expectedErrorCode: 'INVALID_QUERY_PARAMETER',
  expectedErrorParameter: 'status',
} as const;

export const CATALOG_API_COMBINED_FILTER_SCENARIO = {
  query: PRODUCTS.commonHealingPotion.sku,
  departmentId: 'ingredients-reagents',
  expectedResultCount: 0,
} as const;
