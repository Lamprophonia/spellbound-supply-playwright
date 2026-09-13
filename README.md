# Spellbound Supply Playwright Test Suite

Cross-browser test automation for [Spellbound Supply](https://spellbound.lamprophonia.com/), built as a professional portfolio project with Playwright Test, TypeScript, and Node.js.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── components/
│   │   └── site-navigation.component.ts
│   ├── pages/
│   │   ├── cart.page.ts
│   │   ├── catalog.page.ts
│   │   ├── home.page.ts
│   │   └── product.page.ts
│   ├── test-data/
│   │   ├── cart-page.data.ts
│   │   ├── catalog-navigation.data.ts
│   │   ├── catalog-page.data.ts
│   │   ├── home-page.data.ts
│   │   ├── products/
│   │   │   ├── README.md
│   │   │   ├── implements.data.ts
│   │   │   ├── ingredients.data.ts
│   │   │   ├── potions.data.ts
│   │   │   ├── product-categories.data.ts
│   │   │   ├── product.types.ts
│   │   │   └── tomes.data.ts
│   │   └── products.data.ts
│   └── tests/
│       └── ui/
│           ├── cart.spec.ts
│           ├── catalog-navigation.spec.ts
│           └── home.spec.ts
├── .prettierignore
├── .prettierrc.json
├── eslint.config.mjs
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── package-lock.json
```

## Milestones

- [x] **Milestone 1 — Playwright foundation**
  - Strict TypeScript configuration
  - Chromium, Firefox, and WebKit projects
  - Page Object Model and externalized expected content
  - Cross-browser home-page smoke test
  - GitHub repository baseline
- [x] **Milestone 2 — Automated code quality**
  - ESLint for TypeScript and Playwright-specific rules
  - Prettier for consistent formatting
  - Reproducible npm validation commands
- [x] **Milestone 3 — GitHub Actions CI**
  - Quality checks on pushes and pull requests
  - Cross-browser Playwright execution on Linux
  - Manual workflow runs
  - Playwright report artifacts
- [x] **Milestone 4 — Catalog navigation journey**
  - Reusable site-navigation component
  - Catalog and product page objects
  - Accessible navigation and user-visible assertions
  - Pull-request validation through CI
- [x] **Milestone 5 — Scalable product data and expanded coverage**
  - Product-category constants and category-specific data modules
  - Unified product-data entry point for stable test imports
  - Additional product navigation coverage using existing page objects
  - Shared product-data contract enforced by TypeScript
- [x] **Milestone 6 — Data-driven catalog testing**
  - Replace intentionally duplicated scenarios with test-case data
  - Generate an independently reported Playwright test for each selected product
  - Preserve readable product-specific test names and failure reporting
- [ ] **Milestone 7 — Controlled defect detection and triage**
  - [x] Cart page object with product-scoped quantity and price locators
  - [x] Common Healing Potion passing control: add to cart, verify unit price, update quantity, and verify line total
  - [x] Local cross-browser baseline: 12 passing executions
  - [ ] Automated detection of intentional defects represented by dedicated SUT products
  - [ ] Failure diagnosis using Playwright reports and artifacts
  - [ ] Structured GitHub defect reports with severity, priority, and evidence
  - [ ] Known-defect annotations linked to open issues while assertions continue to test correct behavior

## Setup

Use a [Playwright-supported Node.js version](https://playwright.dev/docs/intro#system-requirements), then install dependencies and browser binaries:

```shell
npm ci
npx playwright install chromium firefox webkit
```

## Commands

| Command                | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `npm test`             | Run the full suite headlessly                |
| `npm run test:headed`  | Run with visible browser windows             |
| `npm run test:ui`      | Open Playwright UI Mode                      |
| `npm run test:debug`   | Run with Playwright Inspector                |
| `npm run test:report`  | Open the latest HTML report                  |
| `npm run typecheck`    | Check TypeScript without emitting JavaScript |
| `npm run lint`         | Run ESLint with warnings treated as failures |
| `npm run lint:fix`     | Apply safe ESLint fixes                      |
| `npm run format`       | Format supported files with Prettier         |
| `npm run format:check` | Check formatting without changing files      |
| `npm run quality`      | Run all static quality checks                |

The suite uses `https://spellbound.lamprophonia.com` by default. Set the `BASE_URL` environment variable to target another environment.
