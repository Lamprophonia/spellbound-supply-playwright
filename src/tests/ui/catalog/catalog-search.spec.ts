import { expect, test } from '@playwright/test';

import { CatalogPage } from '@pages/catalog.page';
import { HomePage } from '@pages/home.page';
import { CATALOG_PAGE_CONTENT } from '@test-data/catalog/catalog-page.data';
import {
  CATALOG_REPEAT_SEARCH_SCENARIO,
  CATALOG_SEARCH_SCENARIO,
} from '@test-data/catalog/catalog-search.data';

test.describe('Catalog search', () => {
  test('header search returns the matching product', async ({ page }) => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    const { query, expectedProduct, expectedResultCount } =
      CATALOG_SEARCH_SCENARIO;

    await test.step('Search from the home page', async () => {
      await homePage.goto();
      await homePage.header.search(query);
    });

    await test.step('Verify the search destination and results', async () => {
      await expect(page).toHaveURL(
        (url) =>
          url.pathname === CATALOG_PAGE_CONTENT.path &&
          url.searchParams.get('q') === query,
      );

      await expect(catalogPage.header.searchInput).toHaveValue(query);
      await expect(catalogPage.productCards).toHaveCount(expectedResultCount);
      await expect(catalogPage.productLink(expectedProduct.name)).toBeVisible();
    });
  });

  test('repeated header search updates the sidebar query', async ({ page }) => {
    const homePage = new HomePage(page);
    const catalogPage = new CatalogPage(page);
    const { initialQuery, updatedQuery, expectedProduct, expectedResultCount } =
      CATALOG_REPEAT_SEARCH_SCENARIO;

    await test.step('Establish the initial search', async () => {
      await homePage.goto();
      await homePage.header.search(initialQuery);

      await expect(page).toHaveURL(
        (url) =>
          url.pathname === CATALOG_PAGE_CONTENT.path &&
          url.searchParams.get('q') === initialQuery,
      );
      await expect(catalogPage.searchInput).toHaveValue(initialQuery);
    });

    await test.step('Search again and verify the updated state', async () => {
      await catalogPage.header.search(updatedQuery);

      await expect(page).toHaveURL(
        (url) =>
          url.pathname === CATALOG_PAGE_CONTENT.path &&
          url.searchParams.get('q') === updatedQuery,
      );
      await expect(catalogPage.header.searchInput).toHaveValue(updatedQuery);
      await expect(catalogPage.productCards).toHaveCount(expectedResultCount);
      await expect(catalogPage.productLink(expectedProduct.name)).toBeVisible();

      await expect(catalogPage.searchInput).toHaveValue(updatedQuery);
    });
  });
});
