import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe('Main page', () => {
  test('has page title', async ({ page }) => {
    await expect(page).toHaveTitle(/RecoLabs/);
  });

  test('has H2 header', async ({ page }) => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    await expect(page.getByTestId('header-title')).toHaveText(/Process library/);
  });
});
