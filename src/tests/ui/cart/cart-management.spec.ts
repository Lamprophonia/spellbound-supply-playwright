import { expect, test } from '@playwright/test';

import { CartPage } from '@pages/cart.page';
import { ProductPage } from '@pages/product.page';
import {
  CART_CLEAR_SCENARIO,
  CART_COUNTER_SCENARIO,
  CART_REMOVAL_SCENARIO,
} from '@test-data/cart/cart-management.data';

test.describe('Cart management', () => {
  test('removing one product preserves the other product', async ({ page }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const { productToRemove, productToKeep } = CART_REMOVAL_SCENARIO;

    await test.step('Add two different products', async () => {
      await productPage.goto(productToRemove.slug);
      await productPage.addOneToCart(productToRemove.purchaseUnit.unit);

      await productPage.goto(productToKeep.slug);
      await productPage.addOneToCart(productToKeep.purchaseUnit.unit);

      await cartPage.goto();

      await expect(cartPage.productRow(productToRemove.name)).toBeVisible();
      await expect(cartPage.quantityInput(productToRemove.name)).toHaveValue(
        '1',
      );
      await expect(cartPage.productRow(productToKeep.name)).toBeVisible();
      await expect(cartPage.quantityInput(productToKeep.name)).toHaveValue('1');
    });

    await test.step('Remove one product and verify the remaining cart', async () => {
      await cartPage.removeProduct(productToRemove.name);

      await expect(cartPage.productRow(productToRemove.name)).toHaveCount(0);
      await expect(cartPage.productRow(productToKeep.name)).toBeVisible();
      await expect(cartPage.quantityInput(productToKeep.name)).toHaveValue('1');
      await expect(cartPage.emptyState).toBeHidden();
    });
  });

  test('clearing the cart removes all products and displays the empty state', async ({
    page,
  }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const { firstProduct, secondProduct } = CART_CLEAR_SCENARIO;

    await test.step('Populate the cart with two products', async () => {
      await productPage.goto(firstProduct.slug);
      await productPage.addOneToCart(firstProduct.purchaseUnit.unit);

      await productPage.goto(secondProduct.slug);
      await productPage.addOneToCart(secondProduct.purchaseUnit.unit);

      await cartPage.goto();

      await expect(cartPage.productRow(firstProduct.name)).toBeVisible();
      await expect(cartPage.productRow(secondProduct.name)).toBeVisible();
    });

    await test.step('Clear the cart and verify the empty state', async () => {
      await cartPage.clearCart();

      await expect(cartPage.productRow(firstProduct.name)).toHaveCount(0);
      await expect(cartPage.productRow(secondProduct.name)).toHaveCount(0);
      await expect(cartPage.emptyState).toBeVisible();
      await expect(cartPage.emptyStateHeading).toBeVisible();
      await expect(cartPage.browseCatalogLink).toBeVisible();
      await expect(cartPage.clearCartButton).toBeHidden();
    });
  });

  test('cart counter sums quantities across different products', async ({
    page,
  }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const {
      firstProduct,
      secondProduct,
      firstQuantity,
      secondQuantity,
      expectedCount,
    } = CART_COUNTER_SCENARIO;

    await test.step('Add two different products', async () => {
      await productPage.goto(firstProduct.slug);
      await productPage.addOneToCart(firstProduct.purchaseUnit.unit);

      await productPage.goto(secondProduct.slug);
      await productPage.addOneToCart(secondProduct.purchaseUnit.unit);

      await cartPage.goto();

      await expect(cartPage.productRow(firstProduct.name)).toBeVisible();
      await expect(cartPage.quantityInput(firstProduct.name)).toHaveValue('1');
      await expect(cartPage.productRow(secondProduct.name)).toBeVisible();
      await expect(cartPage.quantityInput(secondProduct.name)).toHaveValue('1');
      await expect(cartPage.header.cartCount).toHaveText('2');
    });

    await test.step('Increase quantity and verify the combined count', async () => {
      await cartPage.setQuantity(firstProduct.name, firstQuantity);

      await expect(cartPage.quantityInput(firstProduct.name)).toHaveValue(
        String(firstQuantity),
      );
      await expect(cartPage.quantityInput(secondProduct.name)).toHaveValue(
        String(secondQuantity),
      );

      await expect
        .soft(cartPage.header.cartCount)
        .toHaveText(String(expectedCount));
      await expect
        .soft(cartPage.header.cartLink)
        .toHaveAccessibleName(`Cart, ${expectedCount} items`);
    });
  });
});
