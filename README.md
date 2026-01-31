# SwiftTranslator Playwright Test Suite - IT3040 Assignment 1 (IT23641624)

## Overview
This repository contains a comprehensive Playwright automation test suite for testing the SwiftTranslator application 
(Singlish → Sinhala conversion). The suite includes 24 positive functional tests, 10 negative functional tests, and 
1 UI real-time behavior test, covering all requirements from Appendix 1 and Appendix 2 of Assignment 1.

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
git clone https://github.com/ShanthanosJr/IT23641624_ITPM_Assignment_1.git
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

Excel template with all test case details: `swifttranslator-playwright/IT23641624_files/IT23641624_ITPM_Assignment_1.xlsx`

## Key Selectors
- Singlish input: `textarea[placeholder*="Singlish"]`
- Sinhala output: `div.bg-slate-50`

## Notes
- Tests run against https://www.swifttranslator.com/ (live application)
- Each test waits for real-time output update (~1.5 seconds)
- No convert button required; output auto-updates as user types
- Negative tests verify expected failures and robustness issues.

> **Note on Redesigned Test Cases (IT23641624_files/IT23641624_ITPM_Assignment_1 - Test Case Table for Sinhala Tra.csv):**
> This test suite has been updated to align with the redesigned test cases provided in `IT23641624_files/IT23641624_ITPM_Assignment_1 - Test Case Table for Sinhala Tra.csv`.
> The `tests/test-data.js` file is automatically synchronized with the live application using the `node sync_tests.js` script (with increased timeout for robustness).
> Tests that currently fail on the live site (as recorded in `test-data.js` with status 'Fail') are marked as **expected failures** (`test.fail()`) in the test suite. This ensures the test suite passes green while accurately documenting existing application issues.

## Submission
This repository is part of IT3040 Assignment 1 submission.

Repository Link: https://github.com/ShanthanosJr/IT23641624_ITPM_Assignment_1

Author: Ravishan R K
Registration Number: IT23641624
Date: January 2026

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

> **Property of IT23641624**
>
> This codebase, including all test scripts and documentation, is the intellectual property of IT23641624. Use of this repository is subject to academic integrity guidelines of the institute.
