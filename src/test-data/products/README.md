# Product test data

Product fixtures are organized by catalog category. Every fixture must
satisfy the shared `Product` contract and describe the correct expected
business behavior.

`../products.data.ts` combines the category collections into the stable
`PRODUCTS` object consumed by tests.

Scenario-specific files, such as `../catalog-navigation.data.ts`,
explicitly select which products participate in a test suite. Adding a
product fixture does not automatically add it to every test.

## Adding a product

1. Add the fixture to the appropriate category file.
2. Use the exact name, slug, SKU, price, currency, weight, and unit from
   the expected product contract.
3. Add a new category and update `../products.data.ts` only when the
   existing categories are not appropriate.
4. Opt the product into relevant scenario data files.
5. Run formatting, quality checks, and affected tests.

Known defects belong in test annotations and linked issues. Product
fixtures must continue to represent correct expected behavior.
