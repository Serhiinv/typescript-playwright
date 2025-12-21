import { Page } from '@playwright/test';
import { logAllMethods, logger} from "../../../utils/logger";

@logAllMethods
export class LNTHeaderMenuPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async logIn() {
    await this.page.locator('text=Log in').click();
      const msg = 'Logger message check';
      logger.step(msg);
      logger.info(msg);
  }

  async createAccount() {
    await this.page.locator('text=Create account').click();
  }

  async signIn() {
    await this.page.locator('text=Sign in').click();
  }

}