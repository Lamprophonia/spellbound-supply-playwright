import type { Locator, Page } from '@playwright/test';

export class CatalogPage {
  readonly page: Page;
  readonly mainHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.getByRole('heading', { level: 1 });
  }

  productLink(productName: string): Locator {
    return this.page.getByRole('link', {
      name: productName,
      exact: true,
    });
  }

  async goto(): Promise<void> {
    await this.page.goto('/catalog');
  }

  async openProduct(productName: string): Promise<void> {
    await this.productLink(productName).click();
  }
}
