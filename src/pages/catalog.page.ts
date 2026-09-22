import type { Locator, Page } from '@playwright/test';
import { SiteHeader } from '@components/site-header.component';

export class CatalogPage {
  readonly page: Page;
  readonly mainHeading: Locator;
  readonly header: SiteHeader;
  readonly productCards: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.getByRole('heading', { level: 1 });
    this.header = new SiteHeader(page);
    this.productCards = page.locator('article.product-card');
    this.searchInput = page.getByRole('searchbox', {
      name: 'Search',
      exact: true,
    });
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
