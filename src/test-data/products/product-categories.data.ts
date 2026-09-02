export const PRODUCT_CATEGORIES = {
  potion: 'Potion',
  ingredient: 'Ingredient',
  implement: 'Implement',
  tome: 'Tomes',
} as const;

export type ProductCategory =
  (typeof PRODUCT_CATEGORIES)[keyof typeof PRODUCT_CATEGORIES];
