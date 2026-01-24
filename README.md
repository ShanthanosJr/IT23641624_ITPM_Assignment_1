# SwiftTranslator Playwright Test Suite - IT3040 Assignment 1

## Overview
This repository contains a comprehensive Playwright automation test suite for testing the SwiftTranslator application 
(Singlish → Sinhala conversion). The suite includes 24 positive functional tests, 10 negative functional tests, and 
1 UI real-time behavior test, covering all requirements from Appendix 1 of Assignment 1.

## Test Coverage
- **Positive Functional Tests (24)**: Test correct conversion across all sentence structures, grammar forms, 
  input lengths (S/M/L), mixed languages, punctuation, formatting, and day-to-day expressions.
- **Negative Functional Tests (10)**: Stress-test robustness with joined words, slang, typos, complex formats, 
  empty input, and edge cases.
- **UI Tests (1+)**: Verify real-time output updating behavior as user types.

All tests are mapped to Appendix 1 categories (1-20) to ensure complete coverage.

## Prerequisites
- Node.js 18 or higher
- npm

## Installation

```bash
git clone https://github.com/[YOUR-USERNAME]/swifttranslator-playwright.git
cd swifttranslator-playwright
npm install
```
This installs Playwright and test dependencies.

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run only functional tests:
```bash
npx playwright test tests/functional/functional.spec.js
```

Run only UI tests:
```bash
npx playwright test tests/ui/ui.spec.js
```

Run a single test:
```bash
npx playwright test -g "Pos_Fun_0001"
```

View test report:
```bash
npx playwright test
npx playwright show-report
```

## Project Structure
```text
swifttranslator-playwright/
├── tests/
│   ├── functional/
│   │   └── functional.spec.js       (24+ functional tests)
│   ├── ui/
│   │   └── ui.spec.js               (UI tests)
│   └── test-data.js                 (Test case data store)
├── playwright.config.js             (Playwright configuration)
├── package.json
├── README.md
└── node_modules/
```

## Test Case Organization
Test IDs follow convention: `Pos_Fun_xxxx`, `Neg_Fun_xxxx`, `Pos_UI_xxxx`

Each test includes: input text, expected output, actual output (captured), status, and justification.

All test cases are stored in `tests/test-data.js` for easy reference and update.

Excel template with all test case details: `test-cases-[REGNUM].xlsx`

## Key Selectors
- Singlish input: `textarea[placeholder*="Singlish"]`
- Sinhala output: `div.bg-slate-50`

## Notes
- Tests run against https://www.swifttranslator.com/ (live application)
- Each test waits for real-time output update (~1.5 seconds)
- No convert button required; output auto-updates as user types
- Negative tests verify expected failures and robustness issues

## Submission
This repository is part of IT3040 Assignment 1 submission.

Repository Link: https://github.com/[YOUR-USERNAME]/swifttranslator-playwright

Author: [Your Name]
Registration Number: [YOUR-REGNUM]
Date: January 2026
