# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Filter.spec.ts >> multiple element handeling
- Location: tests\Filter.spec.ts:122:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByRole('button').and(getByTitle('subscribe'))
Expected: 2
Received: 3
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" getByRole('button').and(getByTitle('subscribe')) with timeout 5000ms
  - waiting for getByRole('button').and(getByTitle('subscribe'))
    14 × locator resolved to 3 elements
       - unexpected value "3"

```

```
Error: "context" and "page" fixtures are not supported in "afterAll" since they are created on a per-test basis.
If you would like to reuse a single page between tests, create context manually with browser.newContext(). See https://aka.ms/playwright/reuse-page for details.
If you would like to configure your page before each test, do that in beforeEach hook instead.
```