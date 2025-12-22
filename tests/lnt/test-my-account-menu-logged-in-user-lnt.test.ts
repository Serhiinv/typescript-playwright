import { test, expect, Page } from '@playwright/test';
import { UserPage } from '../../page-object/lnt/user-page';
import { Users } from '../../page-object/users';

async function verifyPage(page: Page): Promise<void> {
    await expect(page.getByText("Oops!")).not.toBeVisible({ timeout: 3000 });
    const response = await page.context().request.get(page.url());
    expect(response.status()).toBe(200);
    await page.waitForTimeout(500);
}

async function verifyUserLoggedIn(page: Page): Promise<void> {
    await expect(page.getByText("Logged in as")).toBeVisible({ timeout: 5000 });
    await expect(page.getByText("Log out")).toBeVisible({ timeout: 5000 });
}

async function openUserMenu(page: Page): Promise<void> {
    await page.locator("rect").nth(2).click();
}

async function clickOnMenu(page: Page, menuName: string): Promise<void> {
    await page.getByRole("link", { name: menuName }).first().click();
}

// Run on staging
// test('test my account menu logged in user - staging', async ({ page }) => {
//     const up = new UserPage(page);
//     await up.open(Users.user_lnt_stg, Users.url_lnt_stg, Users.domain_lnt_stg);
// });

test('test my account menu logged in user @lnt-menu-logged', async ({ page }) => {
    const up = new UserPage(page);
    await up.open(Users.user_lnt, Users.url_lnt, Users.domain_lnt);

    await openUserMenu(page);
    await verifyUserLoggedIn(page);
    await clickOnMenu(page, "Buying");
    await verifyPage(page);

    await openUserMenu(page);
    await clickOnMenu(page, "Selling");
    await verifyPage(page);

    await openUserMenu(page);
    await clickOnMenu(page, "Favourites");
    await verifyPage(page);

    await openUserMenu(page);
    await clickOnMenu(page, "Lot alerts");
    await verifyPage(page);

    await openUserMenu(page);
    await clickOnMenu(page, "Following");
    await verifyPage(page);

    await openUserMenu(page);
    await clickOnMenu(page, "Profile");
    await verifyPage(page);


    await clickOnMenu(page, "Buying");
    await verifyPage(page);
    await clickOnMenu(page, "Selling");
    await verifyPage(page);
    await clickOnMenu(page, "Favourites");
    await verifyPage(page);
    await clickOnMenu(page, "Lot alerts");
    await verifyPage(page);
    await clickOnMenu(page, "Following");
    await verifyPage(page);
    await clickOnMenu(page, "My ID");
    await verifyPage(page);
    await clickOnMenu(page, "Profile");
    await verifyPage(page);
});
