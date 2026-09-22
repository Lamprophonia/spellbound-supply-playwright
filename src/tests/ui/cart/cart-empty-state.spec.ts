import { expect, test } from '@playwright/test';

import { CartPage } from '@pages/cart.page';
import { CART_PAGE_CONTENT } from '@test-data/cart/cart-page.data';
import { CATALOG_PAGE_CONTENT } from '@test-data/catalog/catalog-page.data';
import { CatalogPage } from '@pages/catalog.page';

test.describe('Cart empty state', () => {
  test('a fresh browser context starts with an empty cart', async ({
    page,
  }) => {
    const cartPage = new CartPage(page);

    await cartPage.goto();

    await expect(page).toHaveURL(CART_PAGE_CONTENT.path);
    await expect(cartPage.mainHeading).toHaveText(
      CART_PAGE_CONTENT.mainHeading,
    );
    await expect(cartPage.emptyState).toBeVisible();
    await expect(cartPage.emptyStateHeading).toHaveText(
      CART_PAGE_CONTENT.emptyState.heading,
    );
    await expect(cartPage.emptyStateMessage).toHaveText(
      CART_PAGE_CONTENT.emptyState.message,
    );
    await expect(cartPage.browseCatalogLink).toBeVisible();
    await expect(cartPage.browseCatalogLink).toHaveText(
      CART_PAGE_CONTENT.emptyState.browseCatalogLabel,
    );
    await expect(cartPage.browseCatalogLink).toHaveAttribute(
      'href',
      CATALOG_PAGE_CONTENT.path,
    );
  });

  test('opens the catalog from the empty-cart link', async ({ page }) => {
    const cartPage = new CartPage(page);
    const catalogPage = new CatalogPage(page);

    await cartPage.goto();
    await expect(cartPage.emptyState).toBeVisible();

    await cartPage.browseCatalog();

    await expect(page).toHaveURL(CATALOG_PAGE_CONTENT.path);
    await expect(catalogPage.mainHeading).toBeVisible();
    await expect(catalogPage.mainHeading).toHaveText(
      CATALOG_PAGE_CONTENT.mainHeading,
    );
  });
});
