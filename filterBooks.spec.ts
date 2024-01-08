import { test, expect } from '@playwright/test';

const FILTER_ELEMENT= `//*[@id="search-result"]/li[1]/div/div[1]/span`;

test('Filter all Books', async ({ page }) => {

  //Visit web site
  await page.goto('https://onlinelibrary.wiley.com/'); //Visit Wiley Online Library website

  //locate books button
  await page.locator('text=22,000+ Online Books').click(); 

  //expect the books ok web page
  await expect(page.locator(FILTER_ELEMENT)).toContainText("Books");


});