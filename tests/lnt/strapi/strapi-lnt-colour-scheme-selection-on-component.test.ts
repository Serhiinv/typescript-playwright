import { test } from '@playwright/test';
import {StrapiHelper} from "../../../page-object/strapi/strapi-helper";

test('Strapi - Test colour scheme selection on component @lnt-color-scheme', async ({ page }) => {

  const strapi = new StrapiHelper(page);
  const slug = 'sn-page-at';

  await strapi.login();
  await strapi.navigateToPages();
  await strapi.skipTutorial();
  await strapi.searchEntry(slug);
  await strapi.openEntryByName(slug);

  const bgColor = await strapi.selectArtistColourScheme();

  await strapi.publishPage();
  await strapi.verifyArtistComponentBackground(bgColor);
});
