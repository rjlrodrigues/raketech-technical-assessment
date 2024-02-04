import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage.js';

test('test', async ({ page }) => {
  const basePage = new BasePage(page);

  await basePage.goTo();
  await basePage.hoverAction();
  await basePage.productPageClick();
  await expect(basePage.page).toHaveTitle('Products | Raketech');

  await basePage.casinoGuideClick();
  await basePage.casinoGuideWebLinkClick();
  const popupEvent = basePage.popupEvent();
  const redirectPage = await popupEvent;
  await expect(redirectPage.url()).toEqual('https://www.casinoguide.se/');
});