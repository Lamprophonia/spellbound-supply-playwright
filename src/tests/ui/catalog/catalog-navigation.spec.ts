import { expect, test } from '@playwright/test';

import { CatalogPage } from '@pages/catalog.page';
import { HomePage } from '@pages/home.page';
import { ProductPage } from '@pages/product.page';
import { CATALOG_PAGE_CONTENT } from '@test-data/catalog/catalog-page.data';
import { CATALOG_NAVIGATION_PRODUCTS } from '@test-data/catalog/catalog-navigation.data';
import { HOME_PAGE_CONTENT } from '@test-data/home-page.data';

test.describe('Catalog navigation', () => {
  for (const product of CATALOG_NAVIGATION_PRODUCTS) {
    test(`user can navigate from the home page to ${product.name} details`, async ({
      page,
    }) => {
      const homePage = new HomePage(page);
      const catalogPage = new CatalogPage(page);
      const productPage = new ProductPage(page);

      await test.step('Navigate from the home page to the catalog', async () => {
        await homePage.goto();
        await homePage.navigation.openCatalog();

        await expect(page).toHaveURL(CATALOG_PAGE_CONTENT.path);
        await expect(catalogPage.mainHeading).toBeVisible();
        await expect(catalogPage.mainHeading).toHaveText(
          CATALOG_PAGE_CONTENT.mainHeading,
        );
      });

      await test.step(`Open ${product.name} details`, async () => {
        await catalogPage.openProduct(product.name);

        await expect(page).toHaveURL(`/products/${product.slug}`);
        await expect(productPage.mainHeading).toBeVisible();
        await expect(productPage.mainHeading).toHaveText(product.name);
        await expect(productPage.productSpecificationHeading).toBeVisible();
      });
    });
  }
});

test.describe('Brand-link Navigation', () => {
  test('Navigate to home from the header brand-link', async ({ page }) => {
    const catalogPage = new CatalogPage(page);
    const homePage = new HomePage(page);

    await catalogPage.goto();
    await catalogPage.header.openHome();

    await expect(page).toHaveURL('/');
    await expect(homePage.mainHeading).toHaveText(
      HOME_PAGE_CONTENT.mainHeading,
    );
  });
});
