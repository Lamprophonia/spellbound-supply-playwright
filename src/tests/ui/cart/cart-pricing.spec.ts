import { expect, test } from '@playwright/test';

import { CartPage } from '@pages/cart.page';
import { ProductPage } from '@pages/product.page';
import { CART_PAGE_CONTENT } from '@test-data/cart/cart-page.data';
import { PRODUCTS } from '@test-data/products.data';

test.describe('Cart pricing', () => {
  test('Common Healing Potion retains its price when quantity changes', async ({
    page,
  }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const product = PRODUCTS.commonHealingPotion;
    const updatedQuantity = 2;

    await test.step('Add one unit and verify cart pricing', async () => {
      await productPage.goto(product.slug);
      await productPage.addOneToCart(product.purchaseUnit.unit);
      await cartPage.goto();

      await expect(page).toHaveURL(CART_PAGE_CONTENT.path);
      await expect(cartPage.mainHeading).toHaveText(
        CART_PAGE_CONTENT.mainHeading,
      );
      await expect(cartPage.productRow(product.name)).toBeVisible();
      await expect(cartPage.quantityInput(product.name)).toHaveValue('1');
      await expect
        .soft(cartPage.unitPrice(product.name))
        .toHaveText(
          `${product.price.amount} ${product.price.currency} per ${product.purchaseUnit.unit}`,
        );
      await expect(cartPage.lineTotal(product.name)).toHaveText(
        `${product.price.amount} ${product.price.currency}`,
      );
    });

    await test.step('Change quantity and verify the updated line total', async () => {
      await cartPage.setQuantity(product.name, updatedQuantity);

      await expect(cartPage.quantityInput(product.name)).toHaveValue(
        String(updatedQuantity),
      );
      await expect(cartPage.lineTotal(product.name)).toHaveText(
        `${product.price.amount * updatedQuantity} ${product.price.currency}`,
      );
    });
  });

  test('Nine-Tooth Processed Mandrake Root uses the correct cart unit price', async ({
    page,
  }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const product = PRODUCTS.nineToothProcessedMandrakeRoot;

    await productPage.goto(product.slug);
    await productPage.addOneToCart(product.purchaseUnit.unit);
    await cartPage.goto();

    await expect(cartPage.productRow(product.name)).toBeVisible();
    await expect(cartPage.quantityInput(product.name)).toHaveValue('1');

    // This adds a structured note to the test results, because we want this to fail for demonstration purposes
    test.info().annotations.push({
      type: 'issue',
      description:
        'https://github.com/Lamprophonia/spellbound-supply-playwright/issues/6',
    });

    // This tells the playwright that beyond this point, the test is expected to fail.
    test.fail(
      true,
      'Known defect #6: Mandrake cart pricing uses 13 instead of 12 Copper',
    );

    await expect
      .soft(cartPage.unitPrice(product.name))
      .toHaveText(
        `${product.price.amount} ${product.price.currency} per ${product.purchaseUnit.unit}`,
      );
    await expect
      .soft(cartPage.lineTotal(product.name))
      .toHaveText(`${product.price.amount} ${product.price.currency}`);
  });
});
