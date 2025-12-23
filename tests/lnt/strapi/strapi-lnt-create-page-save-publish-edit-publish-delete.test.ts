import { test } from '@playwright/test';
import {StrapiHelper} from "../../../page-object/strapi/strapi-helper";

test('Strapi - Test create page save publish edit publish delete', async ({ page }) => {

  const strapi = new StrapiHelper(page);
  let headerValue = "strapi update page test";
  const slug = "strapi-update-page-test";

  await strapi.login();
  await strapi.navigateToPages();
  await strapi.skipTutorial();
  await strapi.createPageEntry(headerValue, slug);
  await strapi.addSimpleHeader(headerValue);
  await strapi.addDesktopImage("691-Header-1.jpg");
  await strapi.saveDraft();
  await strapi.publishPage();

  await strapi.verifyPageOnStaging(headerValue, `https://staging-lyonandturnbull.auctionfusion.com/${slug}`);

  await strapi.open();
  await strapi.navigateToPages();
  await strapi.searchEntry(slug);
  await strapi.openEntryByName(slug);
  headerValue = "strapi update page edited";
  await strapi.openComponent("Simple header");

  await strapi.updateHeaderTitle(headerValue);
  await strapi.publishPage();

  await strapi.verifyPageOnStaging(headerValue, `https://staging-lyonandturnbull.auctionfusion.com/${slug}`);

  await strapi.open();
  await strapi.navigateToPages();
  await strapi.searchEntry(slug);
  await strapi.openEntryByName(slug);
  await strapi.unpublishEntry();
  await strapi.deleteEntry();
});

// await test.step('Navigate to Pages', async () => {
// });