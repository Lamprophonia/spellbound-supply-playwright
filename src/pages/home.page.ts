import type { Locator, Page } from '@playwright/test';
import { SiteNavigation } from '@components/site-navigation.component';
import { SiteHeader } from '@components/site-header.component';

export class HomePage {
  readonly page: Page;
  readonly navigation: SiteNavigation;
  readonly mainHeading: Locator;
  readonly header: SiteHeader;

  constructor(page: Page) {
    this.page = page;
    this.navigation = new SiteNavigation(page);
    this.mainHeading = page.getByRole('heading', { level: 1 });
    this.header = new SiteHeader(page);
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }
}
