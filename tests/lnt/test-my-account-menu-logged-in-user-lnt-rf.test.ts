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

    const menuItems = ['Buying', 'Selling', 'Favourites', 'Lot alerts', 'Following', 'Profile'];

    // First pass: open menu and verify logged in
    await test.step('Verify user is logged in', async () => {
        await openUserMenu(page);
        await verifyUserLoggedIn(page);
    });

    // First pass: click each menu item
    for (const item of menuItems) {
        await test.step(`Navigate to ${item}`, async () => {
            await openUserMenu(page);
            await clickOnMenu(page, item);
            await test.step(`Verify page`, async () => {
                await verifyPage(page);
            });
        });
    }

    // Second pass: additional menu items
    const additionalItems = ['My ID'];
    for (const item of [...menuItems, ...additionalItems]) {
        await test.step(`Navigate to ${item}`, async () => {
            await clickOnMenu(page, item);
            await verifyPage(page);
        });
    }
});
