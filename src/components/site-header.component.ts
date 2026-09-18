import type { Locator, Page } from '@playwright/test';

export class SiteHeader {
  readonly cartLink: Locator;
  readonly cartCount: Locator;

  constructor(page: Page) {
    this.cartLink = page.getByRole('link', {
      name: /^Cart, \d+ items?$/,
    });

    this.cartCount = this.cartLink.locator('strong');
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
