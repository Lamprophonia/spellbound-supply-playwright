# Spellbound Supply Playwright Test Suite

A portfolio test-automation project for [Spellbound Supply](https://spellbound.lamprophonia.com/), a controlled web application.

The suite uses Node.js, Playwright Test, and TypeScript to demonstrate maintainable UI automation, cross-browser testing, and modern test architecture.

## Project objectives

- Build a professional Playwright test suite incrementally.
- Apply maintainable test-automation patterns.
- Use strict TypeScript checking.
- Exercise Chromium, Firefox, and WebKit.
- Keep tests isolated, readable, and suitable for continuous integration.
- Expand into broader UI and API coverage as the application evolves.

## Current coverage

The initial smoke test verifies that the home page:

- Loads with the expected document title.
- Displays its primary heading.
- Presents the expected heading content.

The test runs against Chromium, Firefox, and WebKit.

## Technology

- Node.js
- npm
- TypeScript
- Playwright Test
- Playwright-managed Chromium, Firefox, and WebKit browsers

## Project structure

```text
.
├── src/
│   ├── pages/
│   │   └── home.page.ts
│   ├── test-data/
│   │   └── home-page.data.ts
│   └── tests/
│       └── ui/
│           └── home.spec.ts
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── package-lock.json
```

## Prerequisites

- Git
- npm
- A [Playwright-supported Node.js version](https://playwright.dev/docs/intro#system-requirements)

Playwright currently supports the latest Node.js 22.x, 24.x, and 26.x releases.

## Installation

Install the dependencies recorded in `package-lock.json`:

```shell
npm ci
```

Install the project’s browser binaries:

```shell
npx playwright install chromium firefox webkit
```

`npm ci` is intended for reproducible installation from the lockfile. Use `npm install` when deliberately adding or updating dependencies.

## Running the tests

| Command | Purpose |
| --- | --- |
| `npm test` | Run the complete Playwright suite headlessly |
| `npm run test:headed` | Run tests with visible browser windows |
| `npm run test:ui` | Open Playwright UI Mode |
| `npm run test:debug` | Run using Playwright Inspector |
| `npm run test:report` | Open the most recently generated HTML report |
| `npm run typecheck` | Check TypeScript without generating JavaScript |

## Environment configuration

The default system under test is configured in `playwright.config.ts`.

Override it with the `BASE_URL` environment variable when testing another deployed environment.

PowerShell example:

```powershell
$env:BASE_URL = 'https://spellbound.lamprophonia.com'
npm test
```

## Design approach

The project currently uses:

- Page objects to encapsulate page locators and behavior.
- Separate test-data modules for expected business content.
- Accessibility-oriented locators such as `getByRole`.
- Playwright web-first assertions with automatic retrying.
- Strict TypeScript checks.
- Isolated Playwright browser contexts.
- Cross-browser projects.
- Failure artifacts including screenshots, video, and traces.

Additional abstractions will be introduced when they represent a clear, reusable responsibility.

## Planned development

- Expand home-page and navigation coverage.
- Add product and shopping workflows.
- Introduce reusable Playwright fixtures.
- Add API-level tests where supported by the application.
- Add linting and automated formatting.
- Add continuous integration and publish test results.