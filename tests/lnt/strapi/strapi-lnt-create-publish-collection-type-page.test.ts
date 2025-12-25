// import {test} from '@playwright/test';
// import {StrapiHelper} from "../../../page-object/strapi/strapi-helper";
//
// test("Strapi - Test creating and publishing an instance of a collection type", async ({ page }) => {
//
//     const strapi = new StrapiHelper(page);
//   const headerValue = 'strapi update page test';
//   const slug = 'strapi-update-page-test';
//
//   await strapi.login();
//   await strapi.navigateToPages();
//   await strapi.skipTutorial();
//   await strapi.createPageEntry(headerValue, slug);
//   await strapi.addSimpleHeader(headerValue);
//   await strapi.addDesktopImage('691-Header-1.jpg');
//   await strapi.publishPage();
//   await strapi.verifyPageOnStaging(headerValue, `https://staging-lyonandturnbull.auctionfusion.com/${slug}`);
//
//   await strapi.open();
//   await strapi.navigateToPages();
//   await strapi.searchEntry(slug);
//   await strapi.openEntryByName(slug);
//   await strapi.unpublishEntry();
//   await strapi.deleteEntry();
// });