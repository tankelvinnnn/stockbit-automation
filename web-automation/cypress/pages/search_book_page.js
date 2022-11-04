class searchBookPage {
    elements = {
      pageHeader: () => cy.get(".main-header"),
      searchBar: () => cy.get("#searchBox"),
      searchResult: () => cy.get(".ReactTable"),
      bookResult: () => cy.get(".action-buttons"),
      bookTitle: () => cy.get(".profile-wrapper")
    };
  
    getPageHeader(title) {
        this.elements.pageHeader().contains(title);
    }

    fillSearchBar(bookTitle) {
      this.elements.searchBar().type(bookTitle);
    }

    seeSearchResults(result){
      this.elements.searchResult().contains(result);
    }

    clickBookResult(){
      this.elements.bookResult().click();
    }

    getBookDetails(bookTitle){
      this.elements.bookTitle().contains(bookTitle);
    }
  }
  
  module.exports = new searchBookPage();