import { test, expect } from '@playwright/test';

test('Launch the Website', async ({ page }) => {

  //visit the web site
  await page.goto('https://onlinelibrary.wiley.com/');

  //expect the homepage title
  await expect(page).toHaveTitle(/Wiley Online Library | Scientific research articles, journals, books, and reference works/);


});


