# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Filter.spec.ts >> count item not having out of stock
- Location: tests\Filter.spec.ts:32:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.card').nth(1)
Expected: 3
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('.card').nth(1) with timeout 5000ms
  - waiting for locator('.card').nth(1)
    13 × locator resolved to 1 element
       - unexpected value "1"

```

```
Error: "context" and "page" fixtures are not supported in "afterAll" since they are created on a per-test basis.
If you would like to reuse a single page between tests, create context manually with browser.newContext(). See https://aka.ms/playwright/reuse-page for details.
If you would like to configure your page before each test, do that in beforeEach hook instead.
```