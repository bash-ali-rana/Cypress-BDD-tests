import { When, Then } from "cypress-cucumber-preprocessor/steps";
import GoogleSearchPage from "../../../pages/google/google-search-page";
import GoogleResultsPage from "../../../pages/google/google-results-page";

When(/^I type "hello werld" into the search$/, () => {
  GoogleSearchPage.type("hello werld");
});

And(/^Press 'Search'$/, () => {
  GoogleSearchPage.pressSearch();
});

Then(/^I should see that the results are for "hello world".$/, () => {
  GoogleResultsPage.expect().toHaveText();
});
