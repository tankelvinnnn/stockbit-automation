import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const page = require("../../pages/select_menu_page");
  
  Given("User go to {string}", (url) => {
    cy.visit(url)
  });

  When("User in {string} page", title => {
    page.getPageHeader(title)
  });

  Then("User choose select value {string}", value => {
    page.selectValue(value)
  });

  Then("User choose select one {string}", value => {
    page.selectOne(value)
  });

  Then("User choose old style select menu {string}", value => {
    page.selectOldStyle(value)
  });

  Then(`User choose multi select drop down "all color"`, () => {
    page.selectMultipleDropdown()
  });
  
  Then("User success input all select menu", ()=> {
    page.successInput()
  });  