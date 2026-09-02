import type { Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly mainHeading: Locator;
  readonly productSpecificationHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.getByRole('heading', { level: 1 });
    this.productSpecificationHeading = page.getByRole('heading', {
      name: 'Product specification',
      level: 2,
      exact: true,
    });
  }

  async goto(productSlug: string): Promise<void> {
    await this.page.goto(`/products/${productSlug}`);
  }
}
