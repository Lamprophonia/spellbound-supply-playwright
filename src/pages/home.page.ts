import type { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly mainHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.getByRole('heading', { level: 1 });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }
}
