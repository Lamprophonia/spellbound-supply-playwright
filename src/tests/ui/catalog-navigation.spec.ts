import { expect, test } from '@playwright/test';

import { CatalogPage } from '@pages/catalog.page';
import { HomePage } from '@pages/home.page';
import { ProductPage } from '@pages/product.page';
import { CATALOG_PAGE_CONTENT } from '@test-data/catalog-page.data';
import { PRODUCTS } from '@test-data/products.data';

test.describe('Catalog navigation', () => {
  test('user can navigate from the home page to product details', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    const productPage = new ProductPage(page);
    const product = PRODUCTS.commonHealingPotion;

    await test.step('Navigate from the home page to the catalog', async () => {
      await homePage.goto();
      await homePage.navigation.openCatalog();

      await expect(page).toHaveURL(CATALOG_PAGE_CONTENT.path);
      await expect(catalogPage.mainHeading).toBeVisible();
      await expect(catalogPage.mainHeading).toHaveText(
        CATALOG_PAGE_CONTENT.mainHeading,
      );
    });

    await test.step('Open the selected product details', async () => {
      await catalogPage.openProduct(product.name);

      await expect(page).toHaveURL(`/products/${product.slug}`);
      await expect(productPage.mainHeading).toBeVisible();
      await expect(productPage.mainHeading).toHaveText(product.name);
      await expect(productPage.productSpecificationHeading).toBeVisible();
    });
  });
});
