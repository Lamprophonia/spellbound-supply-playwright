import type { Locator, Page } from '@playwright/test';

export class SiteNavigation {
  readonly navigation: Locator;
  readonly allGoodsLink: Locator;

  constructor(page: Page) {
    this.navigation = page.getByRole('navigation');
    this.allGoodsLink = this.navigation.getByRole('link', {
      name: 'All goods',
      exact: true,
    });
  }

  async openCatalog(): Promise<void> {
    await this.allGoodsLink.click();
  }
}
