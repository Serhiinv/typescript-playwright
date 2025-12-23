import {Page, expect, test} from '@playwright/test';
import {StrapiConfig} from './strapi-config';

export class StrapiHelper {
    constructor(private page: Page) {
    }

    // async login(): Promise<void> {
    //     await test.step('Login', async () => {
    //         await this.page.goto(StrapiConfig.loginUrl);
    //         await test.step('Enter email: ***@***.*', async () => {});
    //         await test.step('Enter password: ***', async () => {});
    //
    //         await this.page.context().tracing.stop();
    //         await this.page.getByRole('textbox', {name: 'Email'}).fill(StrapiConfig.email);
    //         await this.page.getByRole('textbox', {name: 'Password'}).fill(StrapiConfig.password);
    //
    //         await this.page.context().tracing.start();
    //         await this.page.getByRole('button', {name: 'Login'}).click();
    //     });
    // }
    async login(): Promise<void> {
        await test.step('Login', async () => {
            await this.page.goto(StrapiConfig.loginUrl);

            // Fill credentials without logging
            await this.page.evaluate((credentials) => {
                const emailInput = document.querySelector('input[name="Email"]') as HTMLInputElement;
                const passwordInput = document.querySelector('input[type="password"]') as HTMLInputElement;

                if (emailInput) emailInput.value = credentials.email;
                if (passwordInput) passwordInput.value = credentials.password;
            }, { email: StrapiConfig.email, password: StrapiConfig.password });

            await this.page.getByRole('button', {name: 'Login'}).click();
        });
    }


    // async login(): Promise<void> {
    //     await test.step('Login with credentials', async () => {
    //         await this.page.goto(StrapiConfig.loginUrl);
    //         const email = '***@***.com'; // Masked for reporting
    //         const password = '***'; // Masked for reporting
    //
    //         await this.page.getByRole('textbox', {name: 'Email'}).fill(StrapiConfig.email);
    //         await this.page.getByRole('textbox', {name: 'Password'}).fill(StrapiConfig.password);
    //         await this.page.getByRole('button', {name: 'Login'}).click();
    //     });
    // }

    // async login(): Promise<void> {
    //     await test.step(`Login with ${StrapiConfig.maskedEmail} / ${StrapiConfig.maskedPassword}`, async () => {
    //         await this.page.goto(StrapiConfig.loginUrl);
    //         await this.page.getByRole('textbox', {name: 'Email'}).fill(StrapiConfig.email);
    //         await this.page.getByRole('textbox', {name: 'Password'}).fill(StrapiConfig.password);
    //         await this.page.getByRole('button', {name: 'Login'}).click();
    //     });
    // }



    async open(): Promise<void> {
        await this.page.goto(StrapiConfig.loginUrl);
    }

    async navigateToPages(): Promise<void> {
        await test.step('Navigate to Pages', async () => {
            await this.openContentManager()
            await this.page.getByRole('link', {name: 'Page', exact: true}).click();
        });
    }

    async openContentManager(): Promise<void> {
        await this.page.getByLabel('Content Manager').click();
    }

    async openContentType(name: string): Promise<void> {
        await this.page.getByRole('link', {name: name, exact: true}).click();
    }

    async searchEntry(entryName: string): Promise<void> {
        await test.step(`Search entry by name ${entryName}`, async () => {
            await this.page.getByRole('button', {name: 'Search'}).click();
            await this.page.getByLabel('Search for Page').fill(entryName);
            await this.page.getByLabel('Search for Page').press('Enter');
        });
    }

    async openEntryByName(entryName: string): Promise<void> {
        await test.step(`Open entry by name ${entryName}`, async () => {
            await this.page.getByText(entryName).click();
        });
    }

    async openComponent(componentName: string): Promise<void> {
        await this.page.getByRole('button', {name: componentName}).click();
    }

    async updateHeaderTitle(newTitle: string): Promise<void> {
        await this.page.getByRole('textbox', {name: 'title', exact: true}).fill(newTitle);
    }

    async publishPage(): Promise<void> {
        await test.step('Publish page', async () => {
            await this.page.getByRole('button', {name: 'Publish'}).click();
            await expect(this.page.getByText('Published document')).toBeVisible()
        });
    }

    async saveDraft(): Promise<void> {
        await test.step('Save as Draft', async () => {
        await this.page.getByRole('button', {name: 'Save'}).click();
        await expect(this.page.getByText('Saved document')).toBeVisible()
        });
    }

    async verifyPageOnStaging(headerValue: string, stagingUrl: string): Promise<void> {
        await this.page.goto(stagingUrl);
        const maxRetries = 20;
        const retryInterval = 10000;

        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                await expect(this.page.getByText(headerValue)).toBeVisible();
                return;
            } catch {
                if (attempt < maxRetries - 1) {
                    await this.page.waitForTimeout(retryInterval);
                    await this.page.reload();
                } else {
                    // logger.warn(`Failed to verify '${headerValue}' on staging after ${maxRetries} attempts.`);
                    throw new Error(`Failed to verify '${headerValue}' on staging after ${maxRetries} attempts.`);
                }
            }
        }
        await this.page.waitForTimeout(1000);
    }

    async createPageEntry(shortName: string, slug: string): Promise<void> {
        await test.step(`Create page entry with slug: ${slug}`, async () => {
        await this.page.getByRole('link', {name: 'Create new entry'}).click();
        await this.page.getByRole('textbox', {name: 'shortName'}).fill(shortName);

        await this.page.getByLabel('slug').fill(slug);
        await this.page.getByRole('button', {name: 'Add a component to header'}).click();
        await this.page.getByRole('button', {name: 'Simple header'}).click();
        });
    }

    async addSimpleHeader(title: string): Promise<void> {
        await test.step(`Add Simple header with title: ${title}`, async () => {
        await this.page.getByRole('button', {name: 'Simple header'}).click();
        await this.page.getByRole('textbox', {name: 'title'}).fill(title);
        });
    }

    async addDesktopImage(imageName: string): Promise<void> {
        await test.step(`Add desktop image: ${imageName}`, async () => {
        await this.page.getByLabel('desktopImage').getByRole('button', {name: 'Click to add an asset or drag'}).click();
        await this.page.getByRole('button', {name: 'Search'}).click();
        await this.page.getByPlaceholder('e.g: the first dog on the moon').fill(imageName);
        await this.page.getByPlaceholder('e.g: the first dog on the moon').press('Enter');
        await this.page.getByRole('checkbox', {name: imageName}).click();
        await this.page.getByRole('button', {name: 'Finish'}).click();
        });
    }

    async unpublishEntry(): Promise<void> {
        await this.page.getByRole('button', {name: 'More document actions'}).click();
        await this.page.getByText('Unpublish').click();
        await expect(this.page.getByText('Unpublished document')).toBeVisible()
    }

    async deleteEntry(): Promise<void> {
        await this.page.locator('div').filter({hasText: /^More actions$/}).getByRole('button').click();
        await this.page.getByText('Delete entry').click();
        await this.page.getByRole('button', {name: 'Confirm'}).click();
    }

    async selectArtistColourScheme(): Promise<string> {
        return await test.step('Select Artist color scheme', async () => {
            await this.page.getByRole('button', {name: '/50 Artist'}).click();

            try {
                await expect(this.page.getByText('Diego')).toBeVisible();
                await this.page.getByRole('button', {name: 'Remove'}).nth(1).click();
                await this.page.getByLabel('colourScheme').click();
                await this.page.getByText('Giulia').click();
                return 'rgb(244, 164, 165)';
            } catch {
                await this.page.getByRole('button', {name: 'Remove'}).nth(1).click();
                await this.page.getByLabel('colourScheme').click();
                await this.page.getByText('Diego').click();
                return 'rgb(32, 149, 196)';
            }
        });
    }

    async verifyArtistComponentBackground(
        bgColor: string,
        stagingUrl: string = 'https://staging-lyonandturnbull.auctionfusion.com/sn-page-at'
    ): Promise<void> {
        await test.step('Verify Artist component background on FE', async () => {
            await this.page.goto(stagingUrl);
            const maxRetries = 20;
            const retryInterval = 10000;

            for (let attempt = 0; attempt < maxRetries; attempt++) {
                try {
                    await expect(
                        this.page.locator('div').filter({hasText: /^ArtistsAlan Davie/}).nth(2)
                    ).toHaveCSS('background-color', bgColor);
                    return;
                } catch {
                    if (attempt < maxRetries - 1) {
                        await this.page.waitForTimeout(retryInterval);
                        await this.page.reload();
                    } else {
                        // logger.warn(`Failed to verify artist component background color: ${bgColor}`);
                        throw new Error(`Failed to verify artist component background color: ${bgColor}`);
                    }
                }
            }
        });
    }

    async openGlobalStringsEditor(): Promise<void> {
        await this.page.getByLabel('Global Strings Editor').first().click();
    }

    async openArtistsSection(): Promise<void> {
        await this.page.getByRole('button', {name: 'Artists'}).click();
    }

    async updateGlobalStringField(fieldName: string, value: string): Promise<void> {
        await this.page.locator(`input[name="${fieldName}"]`).fill(value);
    }

    async saveGlobalStrings(): Promise<void> {
        await this.page.getByRole('button', {name: 'Save Changes'}).first().click();
        await this.waitForGlobalStringsSave();
    }

    async waitForGlobalStringsSave(): Promise<void> {
        await expect(this.page.getByText('Success', {exact: true})).toBeVisible();
    }

    async setArtistFollowValue(): Promise<string> {
        try {
            await expect(this.page.locator('input[name="artists\\.follow"]')).toHaveValue('Follow');
            const fieldValue = 'Add';
            await this.updateGlobalStringField('artists.follow', fieldValue);
            return fieldValue;
        } catch {
            const fieldValue = 'Follow';
            await this.updateGlobalStringField('artists.follow', fieldValue);
            return fieldValue;
        }
    }

    async verifyArtistFollowValue(fieldValue: string): Promise<void> {
        const maxRetries = 10;
        const retryInterval = 10000;

        for (let attempt = 0; attempt < maxRetries; attempt++) {
            try {
                await expect(this.page.getByRole('button', {name: fieldValue})).toBeVisible();
                return;
            } catch {
                if (attempt < maxRetries - 1) {
                    await this.page.waitForTimeout(retryInterval);
                    await this.page.reload();
                } else {
                    throw new Error(`Failed to verify artist follow field value: ${fieldValue}`);
                }
            }
        }
    }

    async skipTutorial(): Promise<void> {
        await test.step('Skip tutorial', async () => {
            try {
                await this.page.getByRole('button', {name: 'Skip'}).click({timeout: 5000});
            } catch {
                // Tutorial skip failed, continuing
            }
        });
    }

    async verifyEntryInListOnly(entryName: string): Promise<void> {
        await expect(this.page.getByText(entryName)).toBeVisible();
        await expect(this.page.getByText('Published')).toBeVisible();
        await expect(this.page.getByText('Draft')).not.toBeVisible();
    }

    async clearSearch(): Promise<void> {
        await this.page.getByRole('button', {name: 'Clear'}).click();
    }

    async addFilter(filterDate: string): Promise<void> {
        await this.page.getByRole('button', {name: 'Filters'}).click();
        await this.page.getByRole('button', {name: 'Filters'}).click();
        await this.page.getByPlaceholder('MM/DD/YYYY').click();
        await this.page.getByPlaceholder('MM/DD/YYYY').fill(filterDate);
        await this.page.keyboard.press('Enter');
        await this.page.getByRole('button', {name: 'Add filter'}).click();
    }

    async verifyNoEntryInList(): Promise<void> {
        await expect(this.page.getByRole('button', {name: 'shortName'})).not.toBeVisible();
    }

    async clearFilter(): Promise<void> {
        await this.page.getByRole('button').filter({hasText: /^$/}).click();
    }

    async clickOnSortNaneColumn(columnName: string): Promise<void> {
        try {
            await this.page.getByText(columnName, {exact: true}).click();
        } catch {
            await this.page.getByRole("button", {name: `Sort on ${columnName}`}).click();
        }
    }

    async verifyRowWithTextIsVisible(text: string): Promise<void> {
        await expect(this.page.getByText(text, {exact: true})).toBeVisible();
    }

    async verifyRowWithTextIsNotVisible(text: string): Promise<void> {
        await expect(this.page.getByText(text, {exact: true})).not.toBeVisible();
    }

    async clickOnBtnByName(btnName: string): Promise<void> {
        await this.page.getByRole('button', {name: btnName}).click();
    }

    async checkBoxColumnVisibility(columnName: string, checked: boolean): Promise<void> {
        const checkbox = this.page.getByRole('checkbox', { name: columnName });

        await expect(checkbox).toBeVisible();
        await expect(checkbox).toBeEnabled();
        if (checked) {
            await checkbox.check();
        } else {
            await checkbox.uncheck();
        }
        await expect(checkbox).toHaveAttribute('aria-checked', checked ? 'true' : 'false');
    }

    async verifyColumnVisibility(columnName: string, shouldBeVisible: boolean): Promise<void> {
        const columnLocator = this.page.locator('#main-content').getByText(columnName);
        if (shouldBeVisible) {
            await expect(columnLocator).toBeVisible();
        } else {
            await expect(columnLocator).not.toBeVisible();
        }
    }

}
