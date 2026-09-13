import type { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly mainHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.getByRole('heading', {
      level: 1,
    });
  }

  productRow(productName: string): Locator {
    // This identifies the cart's product container
    return this.page.getByRole('article').filter({
      // This identifies the specific product in the container
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

  async setQuantity(productName: string, quantity: number): Promise<void> {
    await this.quantityInput(productName).fill(String(quantity));
  }

  async goto(): Promise<void> {
    await this.page.goto('/cart');
  }
}
