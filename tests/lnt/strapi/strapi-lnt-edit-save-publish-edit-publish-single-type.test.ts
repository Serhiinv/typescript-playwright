// import {test} from '@playwright/test';
// import {StrapiHelper} from "../../../page-object/strapi/strapi-helper";
//
//
// test('Strapi - Test editing and saving as draft, publishing draft, editing and publishing an instance of a single type', async ({page}) => {
//
//     const strapi = new StrapiHelper(page);
//     let headerValue = 'Artists, Designers & Makers AT-TEST';
//
//     await strapi.login();
//     await strapi.openContentManager();
//     await strapi.skipTutorial();
//     await strapi.openContentType('Artists landing');
//     await strapi.openComponent("Simple header");
//     await strapi.updateHeaderTitle(headerValue);
//     await strapi.saveDraft();
//     await strapi.publishPage();
//
//     await strapi.verifyPageOnStaging(headerValue, `https://staging-lyonandturnbull.auctionfusion.com/artists`);
//
//     await strapi.open();
//     await strapi.openContentManager();
//     await strapi.skipTutorial();
//     await strapi.openContentType('Artists landing');
//     headerValue = 'Artists, Designers & Makers TEST';
//     await strapi.openComponent("Simple header");
//     await strapi.updateHeaderTitle(headerValue);
//     await strapi.publishPage();
//
//     await strapi.verifyPageOnStaging(headerValue, `https://staging-lyonandturnbull.auctionfusion.com/artists`);
// });
