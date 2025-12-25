// import {StrapiHelper} from "../../../page-object/strapi/strapi-helper";
// import {test} from '@playwright/test';
//
// test('Strapi - Test editing and publishing an instance of a collection type', async ({ page }) => {
//
//     const slug = 'sn-page-at';
//   const strapi = new StrapiHelper(page);
//
//   await strapi.login();
//   await strapi.navigateToPages();
//   await strapi.skipTutorial();
//   await strapi.searchEntry(slug);
//   await strapi.openEntryByName(slug);
//   await strapi.openComponent('Simple header');
//
//   const headerValue = await page.getByRole('textbox', { name: 'title' }).getAttribute('value');
//   const newHeader = headerValue === 'old header' ? 'new header' : 'old header';
//
//   await strapi.updateHeaderTitle(newHeader);
//   await strapi.publishPage();
//
//   await strapi.verifyPageOnStaging(newHeader, 'https://staging-lyonandturnbull.auctionfusion.com/sn-page-at');
// });