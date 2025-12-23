import { test } from '@playwright/test';
import {StrapiHelper} from "../../../page-object/strapi/strapi-helper";
import * as allure from "allure-js-commons";

test('Strapi - Test colour scheme selection on component @lnt-color-scheme', async ({ page }) => {
  await allure.issue("JIRA-test name", "https://jira.test/browse/JIRA-test-name");

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