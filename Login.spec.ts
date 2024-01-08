import { test, expect } from '@playwright/test';

const USERNAME_ALIES = `//input[@id="username"]`;
const USERNAME = 'osanda.randunu@gmail.com';
const PASSWORD_ALIES = `//input[@id="password"]`
const PASSWORD = '123asdAsd';
const BUTTON_ALIES = `//*[@id="pb-page-content"]/div/div[4]/div/div[2]/div[2]/form/div[5]/span/input`

test('Launch the Website', async ({ page }) => {
    await page.goto('https://onlinelibrary.wiley.com/');//visit web site

    await page.locator('text=Login / Register').click(); //Navigate to Login popup window

    await page.locator(USERNAME_ALIES).pressSequentially(USERNAME); // Input Username
    await page.locator(PASSWORD_ALIES).pressSequentially(PASSWORD); //Input Password
    await page.locator(BUTTON_ALIES).click();

    //expect the URl, I can't figur out a way to override the security check
    await expect(page).toHaveURL('https://onlinelibrary.wiley.com/action/doLogin?societyURLCode=');

});