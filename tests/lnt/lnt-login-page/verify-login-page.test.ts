import { test, expect } from "@playwright/test";
import { LNTCreateAccountPage } from "../../../page-object/lnt/lnt-pages/LNTCreateAccountPage";
import { LNTLoginPage } from "../../../page-object/lnt/lnt-pages/LNTLoginPage";
import { LNTHomePage } from "../../../page-object/lnt/lnt-pages/LNTHomePage";
import { LNTHeaderMenuPage } from "../../../page-object/lnt/lnt-pages/LNTHeaderMenuPage";

test("tests Verify Login Page @smoke", async ({ page }) => {

  await new LNTHomePage(page).open();
  const headerMenu = new LNTHeaderMenuPage(page);
  await headerMenu.logIn();
  await headerMenu.signIn();

  // const createAccount = new LNTCreateAccountPage(page);
  const loginPage = new LNTLoginPage(page);

  await loginPage.verifyHeader();
  // await loginPage.verifyTextDescription1();
  // await loginPage.verifyTextDescription2();
  //
  // // Using methods from CreateAccountPage as there are the same elements
  // await createAccount.verifyGoogleLogin();
  // await createAccount.verifyAppleLogin();
  // // await createAccount.verifyFacebookLogin();
  // await createAccount.verifyEmailLogin("Login");
});