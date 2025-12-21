import {test} from '@playwright/test';
import {StrapiHelper} from "../../../page-object/strapi/strapi-helper";


test('Strapi - Test browsing, searching and editing the sorting of a collection type', async ({page}) => {

    const slug = "sn-page-at";
    const strapi = new StrapiHelper(page);

    await strapi.login();
    await strapi.navigateToPages();
    await strapi.skipTutorial();
    await strapi.searchEntry(slug);

    await strapi.verifyEntryInListOnly(slug);
    await strapi.clearSearch();

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const filterDate = `${(tomorrow.getMonth() + 1).toString().padStart(2, '0')}/${tomorrow.getDate().toString().padStart(2, '0')}/${tomorrow.getFullYear()}`;

    await strapi.addFilter(filterDate); // Future date
    await strapi.verifyNoEntryInList();
    await strapi.clearFilter();

    await strapi.clickOnSortNaneColumn('shortName');
    await strapi.verifyRowWithTextIsVisible('About');

    await strapi.clickOnSortNaneColumn('shortName');
    await strapi.verifyRowWithTextIsVisible('Website Terms of Use');

    await strapi.clickOnSortNaneColumn('slug');
    await strapi.verifyRowWithTextIsVisible('/');

    await strapi.clickOnSortNaneColumn('slug');
    await strapi.verifyRowWithTextIsVisible('Website Terms of Use');

    await strapi.clickOnSortNaneColumn('updatedAt');
    await strapi.verifyRowWithTextIsNotVisible('Website Terms of Use');
    await strapi.clickOnSortNaneColumn('updatedAt');

    await strapi.clickOnBtnByName('View settings');

    await strapi.checkBoxColumnVisibility('body', true);
    await strapi.verifyColumnVisibility('body', true);

    await strapi.checkBoxColumnVisibility('body', false);
    await strapi.verifyColumnVisibility('body', false);
});
