import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('I navigate to {string}', (url) => {
  cy.visit(url);
});

Then('I see the main header says {string}', (title) => {
  cy.findByText(title);
});
