import { Given, When } from "cypress-cucumber-preprocessor/steps";
import GoogleSearchPage from "../../pages/google/google-search-page";

Given(/^I'm at Google$/, () => {
  GoogleSearchPage.visit();
});
