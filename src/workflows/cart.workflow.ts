import type { CartPage } from '@pages/cart.page';
import type { ProductPage } from '@pages/product.page';
import type { Product } from '@test-data/products/product.types';

export async function populateCart(
  productPage: ProductPage,
  cartPage: CartPage,
  products: readonly Product[],
): Promise<void> {
  for (const product of products) {
    await productPage.goto(product.slug);
    await productPage.addOneToCart(product.purchaseUnit.unit);
  }

  await cartPage.goto();
}
