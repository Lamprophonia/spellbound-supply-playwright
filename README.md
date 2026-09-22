# Spellbound Supply Playwright Test Suite

UI and API test automation for [Spellbound Supply](https://spellbound.lamprophonia.com/), built as a professional portfolio project with Playwright Test, TypeScript, Node.js, and Postman.

## Project tracking and contribution workflow

The public [Spellbound QA Engineering project board](https://github.com/users/Lamprophonia/projects/2)
tracks planned work, delivery, and deferred defects. This README retains the
milestone overview; issues define individual tasks, and PRs provide implementation
and validation evidence.

Milestones 1–10 and their delivery associations were added retrospectively. They
document completed work, not planning performed at the time. Milestone 11 marks
the transition to the task-first workflow below; project setup itself is tracked
in [issue #11](https://github.com/Lamprophonia/spellbound-supply-playwright/issues/11).

1. Create a task issue with an objective, scope, acceptance criteria, and validation plan before starting new work. Use the bug-report form for defects.
2. Assign an owner and milestone, confirm project membership, and set priority and sizing as appropriate. Move scoped work from Backlog to Ready, then In progress when work begins.
3. Create a branch from current `main` with the issue number, such as `test/14-catalog-api` or `chore/11-project-tracking`.
4. Open a PR referencing the task, with a title such as `[#14] Add catalog API coverage`. Associate it with the project and milestone, summarize changes and validation, and move it to In review. Individual commits use descriptive prefixes such as `test:`, `docs:`, or `refactor:`; this is a convention, not automated enforcement.
5. Review the diff, quality checks, relevant tests, and CI evidence before squash merging. Record any expected failures explicitly rather than treating them as fixed defects.
6. Confirm the issue's acceptance criteria and record completion evidence before deliberately closing it. Use `Refs #14` when linking a PR without requesting automatic issue closure. Close a milestone only when its agreed scope is complete.

Open repository issues and PRs are automatically added to the board. Merged PRs
are reflected as Done; moving an issue to Done does not itself close it. Retained
demonstration defects remain open and Deferred, with their rationale documented.

## Project structure

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml
│   │   └── task.yml
│   ├── pull_request_template.md
│   └── workflows/
│       └── ci.yml
├── postman/
│   └── collections/
│       └── spellbound-catalog-api.postman_collection.json
├── src/
│   ├── components/
│   │   ├── site-header.component.ts
│   │   └── site-navigation.component.ts
│   ├── pages/
│   │   ├── cart.page.ts
│   │   ├── catalog.page.ts
│   │   ├── home.page.ts
│   │   └── product.page.ts
│   ├── test-data/
│   │   ├── api/
│   │   │   └── catalog-api.data.ts
│   │   ├── cart/
│   │   │   ├── cart-management.data.ts
│   │   │   └── cart-page.data.ts
│   │   ├── catalog/
│   │   │   ├── catalog-navigation.data.ts
│   │   │   ├── catalog-page.data.ts
│   │   │   └── catalog-search.data.ts
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
│   ├── workflows/
│   │   └── cart.workflow.ts
│   └── tests/
│       ├── api/
│       │   └── catalog-api.spec.ts
│       └── ui/
│           ├── cart/
│           │   ├── cart-empty-state.spec.ts
│           │   ├── cart-management.spec.ts
│           │   └── cart-pricing.spec.ts
│           ├── catalog/
│           │   ├── catalog-navigation.spec.ts
│           │   └── catalog-search.spec.ts
│           └── home/
│               └── home.spec.ts
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
- [x] **Milestone 7 — Controlled defect detection and triage**
  - [x] Cart page object with product-scoped quantity and price locators
  - [x] Common Healing Potion passing control: add to cart, verify unit price, update quantity, and verify line total
  - [x] Local cross-browser baseline: 12 passing executions
  - [x] Mandrake unit-price and line-total defect reproduced in Chromium, Firefox, and WebKit
  - [x] Failure diagnosis using Playwright reports and artifacts
  - [x] Defect documented and triaged in [issue #6](https://github.com/Lamprophonia/spellbound-supply-playwright/issues/6)
  - [x] Known-defect annotation with unchanged correct-price expectations
  - [x] Pull-request CI validation of expected-failure handling
- [x] **Milestone 8 — Repository safeguards and contribution workflow**
  - [x] Default-branch ruleset configured in GitHub settings
  - [x] Structured bug-report form and pull-request description template
  - [x] Verify required CI checks block merging while pending
  - [x] Verify merging is available after required checks pass
  - [x] Verify issue-form rendering after merge
  - [x] Verify PR-template prefilling on the next PR
- [x] **Milestone 9 — Cart state and isolation**
  - [x] Feature-based spec folders and cart-specific scenario data
  - [x] Fresh-context empty state and navigation back to the catalog
  - [x] Independent removal, clear-cart, and quantity-counter scenarios
  - [x] Shared header component with visible and accessible counter checks
  - [x] Full-suite cross-browser validation and PR CI verification
- [x] **Milestone 10 — Reusable cart setup**
  - [x] Extract repeated product-addition setup into a shared cart workflow
  - [x] Preserve independent scenarios, explicit assertions, and readable report steps
  - [x] Local cross-browser validation: 27 normal passes and 3 expected failures
  - [x] Pull-request CI verification
- [x] **Milestone 11 — Catalog search and query synchronization**
  - [x] Shared header search and brand-link navigation actions
  - [x] Brand-link navigation from catalog to home
  - [x] Initial search validates URL query, header input, result count, and product identity
  - [x] Repeated-search regression verifies sidebar synchronization after the SUT fix for [issue #12](https://github.com/Lamprophonia/spellbound-supply-playwright/issues/12)
  - [x] Catalog-specific test-data folder and independent search scenarios
  - [x] Local quality checks and cross-browser validation
  - [x] Pull-request CI verification and merge
  - Scope narrowed to prioritize API testing; no-results and filter application/clearing coverage deferred to follow-up work
- [x] **Milestone 12 — API testing fundamentals**
  - [x] Four independent HTTP scenarios in a dedicated Playwright API project
  - [x] SKU lookup/pricing, no results, invalid status, and combined-filter coverage
  - [x] Documented Postman collection with eight named tests, exported to Git
  - [x] Postman app validation against local and deployed environments; local CLI execution verified
  - [x] Combined Playwright suite: 40 normal passes and 3 expected Mandrake failures
  - [x] Separate Postman CI job configured alongside existing Playwright execution
  - [x] All three CI checks passed and implementation merged in [PR #15](https://github.com/Lamprophonia/spellbound-supply-playwright/pull/15)
  - [x] Public Postman sharing and four saved response examples
- [ ] **Milestone 13 — Network failures and recovery** (planned)
- [ ] **Milestone 14 — Accessibility checks and keyboard journeys** (planned)
- [ ] **Milestone 15 — Performance fundamentals** (planned)

Specs are grouped by feature, then by behavior: empty state, pricing, and
cart management. Each test establishes its own starting state. Page objects and
components own UI interactions; workflows coordinate reusable action sequences;
tests select scenario data and assert outcomes.

The shared `populateCart` workflow adds one purchase unit of each supplied product
to the existing cart, then opens the cart. It uses page objects sharing the same
browser page and does not clear the cart or assert outcomes. The three cart-management
tests reuse it while retaining their own assertions and report steps.

## Controlled defect demonstration

Nine-Tooth Processed Mandrake Root intentionally shows 13 Copper per packet
and a 13 Copper line total at quantity one in the cart; the expected price
is 12 Copper. Issue #6 is tracked in this automation repository to keep the
portfolio evidence and triage together. The SUT defect is retained for demonstration.

The test verifies the product row and quantity with hard assertions before
calling `test.fail()`. Soft assertions then collect both price discrepancies,
and an issue annotation connects the test result to the defect report.
Failures before the expected-failure declaration remain unexpected. An
unexpected pass requires review; failures afterward still require inspection
because `test.fail()` does not verify their cause.

Milestone 7 validation: **15 executions — 12 normal passes and 3 expected failures**.
The overall run succeeds, and the console summary may display `15 passed`;
this does not mean the SUT defect is fixed. Common Healing Potion remains
the passing cart control. Expected-failure handling and report annotations
were also verified in pull-request CI.

## Fixed-defect regression coverage

Repeated header searches exposed a stale sidebar input: the URL and results
updated while the sidebar retained the previous query. Unlike the intentional
Mandrake defect, this was discovered through exploratory testing and recorded in
[issue #12](https://github.com/Lamprophonia/spellbound-supply-playwright/issues/12).

The same Playwright test reproduced the mismatch in all three browsers, then
passed unchanged after the SUT fix was deployed. It remains a normal passing
regression test; issue #12 is closed following manual and automated verification.

## Setup

Use a [Playwright-supported Node.js version](https://playwright.dev/docs/intro#system-requirements), then install dependencies and browser binaries:

```shell
npm ci
npx playwright install chromium firefox webkit
```

## API coverage and execution

The API tests exercise `GET /api/products` over HTTP without importing SUT
implementation code. The SUT maintains the [catalog API contract](https://github.com/Lamprophonia/spellbound-supply-co/blob/main/docs/catalog-api-v1.md).
QA work is tracked in [issue #14](https://github.com/Lamprophonia/spellbound-supply-playwright/issues/14).

Playwright checks HTTP status, JSON content type, and selected response fields
and business values. This is targeted contract coverage, not exhaustive JSON
Schema validation. API tests run once in the `api` project; UI tests run in the
three browser projects. Both are included in `npm test` and its HTML report.

Run only API tests against the deployed demo:

```shell
npx playwright test --project=api
```

To target a running local API in PowerShell:

```powershell
$env:BASE_URL = 'http://127.0.0.1:8787'
npx playwright test --project=api
Remove-Item Env:BASE_URL
```

Explore the public [Spellbound Catalog API collection on Postman](https://www.postman.com/dept-of-catalog-and-commercial-interfaces/workspace/spellbound-catalog-api/collection/39686549-8924ee5a-9f5a-495d-b1fa-96b32f65b18d),
including request descriptions, eight named tests, and four saved response examples.
The examples document successful lookup, no matches, invalid status, and combined
filters; they are response snapshots, not live test results.

Postman covers the same four baseline scenarios as the Playwright API tests.
Import or fork the collection and supply a `baseUrl` environment variable set to
`https://spellbound.lamprophonia.com` for the deployed demo, or
`http://127.0.0.1:8787` for a running local API.
Its CLI is pinned as a dev dependency and installed by `npm ci`.
Run the repository export against the deployed demo:

```shell
npm run test:postman -- --env-var "baseUrl=https://spellbound.lamprophonia.com"
```

In Windows PowerShell, use `npm.cmd` for this command if npm drops the forwarded
`--env-var` flag. To run locally, replace the URL with `http://127.0.0.1:8787`;
the SUT server must be running separately. Postman's `baseUrl` and Playwright's
`BASE_URL` are independent settings.

Local-file CLI execution works without Postman login; cloud-publication warnings
do not indicate test failures. Check the exit code. After editing requests in
Postman, re-export to the same repository file and review the diff: this workflow
does not automatically synchronize cloud edits with Git.

CI runs Playwright and Postman in separate jobs after static quality succeeds.
The existing required job named `Cross-browser tests` now includes Playwright API
tests too; `Postman API tests` runs the committed collection against the deployed
demo. Postman results are currently available in the job log.

## Commands

| Command                                             | Purpose                                      |
| --------------------------------------------------- | -------------------------------------------- |
| `npm test`                                          | Run Playwright UI and API tests              |
| `npm run test:postman -- --env-var "baseUrl=<URL>"` | Run the exported Postman collection          |
| `npm run test:headed`                               | Run with visible browser windows             |
| `npm run test:ui`                                   | Open Playwright UI Mode                      |
| `npm run test:debug`                                | Run with Playwright Inspector                |
| `npm run test:report`                               | Open the latest HTML report                  |
| `npm run typecheck`                                 | Check TypeScript without emitting JavaScript |
| `npm run lint`                                      | Run ESLint with warnings treated as failures |
| `npm run lint:fix`                                  | Apply safe ESLint fixes                      |
| `npm run format`                                    | Format supported files with Prettier         |
| `npm run format:check`                              | Check formatting without changing files      |
| `npm run quality`                                   | Run all static quality checks                |

The suite uses `https://spellbound.lamprophonia.com` by default. Set the `BASE_URL` environment variable to target another environment.
