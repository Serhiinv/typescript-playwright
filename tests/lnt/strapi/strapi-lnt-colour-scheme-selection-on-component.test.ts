import {test} from '@playwright/test';
import {StrapiHelper} from "../../../page-object/strapi/strapi-helper";
import * as allure from "allure-js-commons";

const runTag = process.env.RUN_TAG || 'all';

test('lnt strapi - Test colour scheme selection on component @lnt-strapi', async ({page}) => {
    test.skip(runTag !== 'all' && runTag !== '@lnt-strapi' && runTag !== 'lnt strapi - Test colour scheme selection', 'Not runed');
    await allure.tag(`Environment: ${process.env.TEST_ENV || 'Local'}`)
    await allure.issue( "https://binary-vision.atlassian.net/browse/AUC-2596", "Strapi regular updates");

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