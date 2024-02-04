import { expect } from '@playwright/test';

export class BasePage {
    constructor(page) {
        this.page = page
        this.whatWeDo = this.page.locator('#menu-item-39');
        this.products = this.page.locator('#menu-item-40').getByRole('link', { name: 'Products' });
        this.casinoGuide = this.page.locator('.nectar-cta').first();
        this.casinoGuideWebLinkIcon = this.page.getByRole('link', { name: '' });

    }

    async goTo() {
        await this.page.goto('/');
    }

    async hoverAction() {
        if (expect(this.whatWeDo).toBeVisible());
        await this.whatWeDo.hover();
    }

    async productPageClick() {
        if (expect(this.products).toBeVisible()) {
            await this.products.click();
        }
    }

    async casinoGuideClick() {
        if (expect(this.casinoGuide).toBeVisible()) {
            await this.casinoGuide.click();
        }
    }

    async casinoGuideWebLinkClick() {
        if (expect(this.casinoGuideWebLinkIcon).toBeVisible()) {
            await this.casinoGuideWebLinkIcon.click();
        }
    }

    async popupEvent() {
        return this.page.waitForEvent('popup');
    }

}