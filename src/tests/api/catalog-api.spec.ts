import { expect, test } from '@playwright/test';

import {
  CATALOG_API,
  CATALOG_API_LOOKUP_SCENARIO,
  CATALOG_API_NO_RESULTS_SCENARIO,
  CATALOG_API_INVALID_STATUS_SCENARIO,
  CATALOG_API_COMBINED_FILTER_SCENARIO,
} from '@test-data/api/catalog-api.data';

test.describe('Catalog API', () => {
  test('SKU lookup returns the expected product and price', async ({
    request,
  }) => {
    const { query, expectedProduct, expectedResultCount } =
      CATALOG_API_LOOKUP_SCENARIO;

    const response = await request.get(CATALOG_API.path, {
      params: { q: query },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body: unknown = await response.json();

    expect(body).toMatchObject({
      schemaVersion: CATALOG_API.schemaVersion,
      total: expectedResultCount,
      products: [
        {
          sku: expectedProduct.sku,
          slug: expectedProduct.slug,
          name: expectedProduct.name,
          price: {
            amount: expectedProduct.price.amount,
            denomination: expectedProduct.price.currency,
            unit: expectedProduct.purchaseUnit.unit,
          },
        },
      ],
    });
  });

  test('a search with no matches returns an empty successful response', async ({
    request,
  }) => {
    const { query, expectedResultCount } = CATALOG_API_NO_RESULTS_SCENARIO;

    const response = await request.get(CATALOG_API.path, {
      params: { q: query },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body: unknown = await response.json();

    expect(body).toMatchObject({
      schemaVersion: CATALOG_API.schemaVersion,
      products: [],
      total: expectedResultCount,
    });
  });

  test('an invalid status filter returns a validation error', async ({
    request,
  }) => {
    const { status, expectedErrorCode, expectedErrorParameter } =
      CATALOG_API_INVALID_STATUS_SCENARIO;

    const response = await request.get(CATALOG_API.path, {
      params: { status },
    });

    expect(response.status()).toBe(400);
    expect(response.headers()['content-type']).toContain('application/json');

    const body: unknown = await response.json();

    expect(body).toMatchObject({
      error: {
        code: expectedErrorCode,
        parameter: expectedErrorParameter,
        message: expect.any(String),
      },
    });
    expect(body).toHaveProperty('error.message', expect.stringMatching(/\S/));
  });

  test('search and department filters must both match', async ({ request }) => {
    const { query, departmentId, expectedResultCount } =
      CATALOG_API_COMBINED_FILTER_SCENARIO;

    const response = await request.get(CATALOG_API.path, {
      params: { q: query, departmentId },
    });

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body: unknown = await response.json();

    expect(body).toMatchObject({
      schemaVersion: CATALOG_API.schemaVersion,
      products: [],
      total: expectedResultCount,
    });
  });
});
