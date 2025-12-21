import { expect, Page } from '@playwright/test';
// import { logAllMethods, logger } from '@/app/utils/logger';

// @logAllMethods
export class Main {
  constructor(private page: Page) {}

  async pageOpen(): Promise<void> {
    await this.page.goto('https://www.lyonandturnbull.com/');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.page.getByText('Oops!')).not.toBeVisible({ timeout: 3000 });
      const response = await this.page.context().request.get(this.page.url());
      if (response.status() !== 200) {
      throw new Error(`Expected status 200 but got ${response.status()}`);
    }
    await this.page.waitForTimeout(500);
  }

  async verifyNoBrokenImages(): Promise<void> {
    const images = this.page.locator('img');
    const count = await images.count();
    const brokenImages: string[] = [];

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const imgUrl = await img.getAttribute('src');

      if (!imgUrl || !imgUrl.startsWith('http')) {
        continue;
      }

      try {
        const response = await this.page.context().request.get(imgUrl, { timeout: 5000 });
        if (response.status() !== 200) {
          brokenImages.push(`Image ${i}: ${imgUrl} (status ${response.status()})`);
        }
      } catch (error) {
        brokenImages.push(`Image ${i}: ${imgUrl} - ${error}`);
      }
    }

    if (brokenImages.length > 0) {
      throw new Error(`Broken images found: ${brokenImages.join(', ')}`);
    }
  }

  async openMenu(menuName: string): Promise<void> {
    await this.page.getByText(menuName, { exact: true }).click();
  }

  async openSubMenu(menuName: string): Promise<void> {
    await this.page.getByRole('link', { name: menuName }).first().click();
  }

  async denyCookies(): Promise<void> {
    try {
      await this.page.getByRole('button', { name: 'Deny' }).click();
    } catch {
      // logger.info(`Cookies popup did not appear`);
    }
  }

  async verifyPage(): Promise<void> {
    await this.verifyPageLoaded();
    await this.verifyNoBrokenImages();
  }

  // Insert broken image for testing
  // await this.page.evaluate(() => {
  //   const img = document.createElement('img');
  //   img.src = 'https://httpstat.us/404';
  //   document.body.appendChild(img);
  // });
  // await this.verifyNoBrokenImages();
}
