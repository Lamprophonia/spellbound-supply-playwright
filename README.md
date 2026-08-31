# Spellbound Supply Playwright Test Suite

Cross-browser test automation for [Spellbound Supply](https://spellbound.lamprophonia.com/), built as a professional portfolio project with Playwright Test, TypeScript, and Node.js.

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── pages/
│   │   └── home.page.ts
│   ├── test-data/
│   │   └── home-page.data.ts
│   └── tests/
│       └── ui/
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
- [ ] **Milestone 3 — GitHub Actions CI**
  - Quality checks on pushes and pull requests
  - Cross-browser Playwright execution on Linux
  - Manual workflow runs
  - Playwright report artifacts

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
