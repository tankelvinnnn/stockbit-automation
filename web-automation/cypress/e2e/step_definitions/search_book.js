import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
const page = require("../../pages/search_book_page");

  Then("User search book {string}", bookTitle => {
    page.fillSearchBar(bookTitle)
  });

  Then("User see {string}", result => {
    page.seeSearchResults(result)
  });

  Then("User click book {string}", bookTitle => {
    page.clickBookResult()
    page.getBookDetails(bookTitle)
  });

  Then("User see book {string}", bookTitle => {
    page.getBookDetails(bookTitle)
  });