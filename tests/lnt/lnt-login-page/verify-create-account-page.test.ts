import { test, expect } from "@playwright/test";
import { LNTCreateAccountPage } from "../../../page-object/lnt/lnt-pages/LNTCreateAccountPage";
import { LNTHomePage } from "../../../page-object/lnt/lnt-pages/LNTHomePage";
import { LNTHeaderMenuPage } from "../../../page-object/lnt/lnt-pages/LNTHeaderMenuPage";
import * as allure from "allure-js-commons";

const runTag = process.env.RUN_TAG || 'all';

test("tests Verify Create Account Page @smoke", async ({ page }) => {
    test.skip(runTag !== 'all' && runTag !== '@smoke' && runTag !== 'tests Verify Create Account Page', 'Not runed');
    await allure.tag(`Environment: ${process.env.TEST_ENV || 'Local'}`)

    await new LNTHomePage(page).open();
  // const headerMenu = new LNTHeaderMenuPage(page);
  // await headerMenu.logIn();
  // await headerMenu.createAccount();
  //
  // const createAccount = new LNTCreateAccountPage(page);
  // await createAccount.verifyHeader();
  // await createAccount.verifyTextDescription1();
  // await createAccount.verifyTextDescription2();
  //
  // await createAccount.verifyGoogleLogin();
  // await createAccount.verifyAppleLogin();
  // // await createAccount.verifyFacebookLogin();
  // await createAccount.verifyEmailLogin('Create an account');
});