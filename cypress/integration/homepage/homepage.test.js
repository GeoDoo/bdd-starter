import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I navigate to {string}", (url) => {
  cy.visit(url);
});

Then("I see the main header says {string}", (title) => {
  cy.findByText(title);
});

When("I search for {string}", (query) => {
  cy.get("input").type(`${query}{enter}`);
});

Then(/^I should see in the results$/, (data) => {
  data.hashes().forEach(({ title, category }) => {
    cy.get("li").should("contain", title);
    cy.get("li").should("contain", category);
  });
});
