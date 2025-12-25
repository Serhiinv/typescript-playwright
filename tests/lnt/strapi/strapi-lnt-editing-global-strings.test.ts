// import {test} from '@playwright/test';
// import {StrapiHelper} from "../../../page-object/strapi/strapi-helper";
//
//
// test('Strapi - Test editing global strings', async ({ page }) => {
//
//     const strapi = new StrapiHelper(page);
//
//     await strapi.login();
//     await strapi.openGlobalStringsEditor();
//     await strapi.skipTutorial();
//     await strapi.openArtistsSection();
//     const fieldValue = await strapi.setArtistFollowValue();
//     await strapi.saveGlobalStrings();
//
//     await page.goto("https://staging-lyonandturnbull.auctionfusion.com/artists/lemuel-abbott");
//     await strapi.verifyArtistFollowValue(fieldValue);
//
//     await strapi.open();
//     await strapi.openGlobalStringsEditor();
//     await strapi.openArtistsSection();
//     await strapi.updateGlobalStringField("artists.follow", "Follow");
//     await strapi.saveGlobalStrings();
// });
