import type { Locator, Page } from '@playwright/test';

export class SiteHeader {
  // Cart Count Locators
  readonly cartLink: Locator;
  readonly cartCount: Locator;

  // Search Bar Locators
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  // Brand Link Locators
  readonly brandLink: Locator;

  constructor(page: Page) {
    // Cart Count Initialization
    this.cartLink = page.getByRole('link', {
      name: /^Cart, \d+ items?$/,
    });
    this.cartCount = this.cartLink.locator('strong');

    // Search Bar Initialization
    const searchRegion = page.getByRole('search');

    this.searchInput = searchRegion.getByRole('searchbox', {
      name: 'Search the catalog',
      exact: true,
    });
    this.searchButton = searchRegion.getByRole('button', {
      name: 'Search',
      exact: true,
    });

    // Brand Link Initialization
    this.brandLink = page.getByRole('link', {
      name: 'Spellbound Supply Co. home',
    });
  }
  // Cart Action Methods
  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  // Search Bar Action Methods
  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  // Brand Link Action Methods
  async openHome(): Promise<void> {
    await this.brandLink.click();
  }
}
