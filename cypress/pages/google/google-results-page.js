const RESULT_LINK = "h3";
const SEARCHING_FOR = "span:contains(Showing results for)";

class GoogleResultsPage {
  static expect() {
    return {
      toHaveResults: () => {
        cy.get(RESULT_LINK)
          .its("length")
          .then((length) => {
            expect(length).to.be.greaterThan(5);
          });
      },
      toHaveText: () => {
        cy.get(SEARCHING_FOR).next().should("have.text", "hello world");
      },
    };
  }
}

export default GoogleResultsPage;
