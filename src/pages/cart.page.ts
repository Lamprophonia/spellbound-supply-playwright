import type { Locator, Page } from '@playwright/test';

import { SiteHeader } from '@components/site-header.component';

export class CartPage {
  readonly page: Page;
  readonly header: SiteHeader;

  // Shared Locators
  readonly mainHeading: Locator;

  // Populated Cart Locators
  readonly clearCartButton: Locator;

  // Empty State Locators
  readonly emptyState: Locator;
  readonly emptyStateHeading: Locator;
  readonly emptyStateMessage: Locator;
  readonly browseCatalogLink: Locator;

  constructor(page: Page) {
    // Shared Initialization
    this.page = page;
    this.header = new SiteHeader(page);
    this.mainHeading = page.getByRole('heading', {
      level: 1,
    });

    // Populated Cart Initialization
    this.clearCartButton = page.getByRole('button', {
      name: 'Clear cart',
      exact: true,
    });

    // Empty State Initialization
    this.emptyState = page.locator('.empty-state--cart');
    this.emptyStateHeading = this.emptyState.getByRole('heading', {
      level: 2,
    });
    this.emptyStateMessage = this.emptyState.locator('p');
    this.browseCatalogLink = this.emptyState.getByRole('link', {
      name: 'Browse the catalog',
      exact: true,
    });
  }

  // Product-row Locators
  productRow(productName: string): Locator {
    return this.page.getByRole('article').filter({
      has: this.page.getByRole('heading', {
        name: productName,
        level: 3,
        exact: true,
      }),
    });
  }

  quantityInput(productName: string): Locator {
    return this.productRow(productName).getByRole('spinbutton');
  }

  lineTotal(productName: string): Locator {
    return this.productRow(productName).locator('.line-total');
  }

  unitPrice(productName: string): Locator {
    return this.productRow(productName).locator(
      '.cart-line__info > p:not(.stock-number)',
    );
  }

  removeButton(productName: string): Locator {
    return this.productRow(productName).getByRole('button', {
      name: 'Remove',
      exact: true,
    });
  }

  // Actions
  async setQuantity(productName: string, quantity: number): Promise<void> {
    await this.quantityInput(productName).fill(String(quantity));
  }

  async goto(): Promise<void> {
    await this.page.goto('/cart');
  }

  async browseCatalog(): Promise<void> {
    await this.browseCatalogLink.click();
  }

  async removeProduct(productName: string): Promise<void> {
    await this.removeButton(productName).click();
  }

  async clearCart(): Promise<void> {
    await this.clearCartButton.click();
  }
}
