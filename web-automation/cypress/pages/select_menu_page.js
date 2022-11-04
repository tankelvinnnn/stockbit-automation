class selectMenuPage {
    elements = {
      pageHeader: () => cy.get(".main-header"),
      valueDropdown: () => cy.get("#withOptGroup"),
      oneDropdown: () => cy.get("#selectOne"),
      oldStyleDropdown: () => cy.get("#oldSelectMenu"),
      multiSelectDropdown: () => cy.get(':nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control'),
      standarMultiSelect: () => cy.get('#cars'),
      multiSelectItem: () => cy.get('.css-12jo7m5')
    };
  
    getPageHeader(title) {
        this.elements.pageHeader().contains(title);
    }

    selectValue(value) {
      this.elements.valueDropdown().type(`${value}{enter}`);
    }

    selectOne(value) {
      this.elements.oneDropdown().type(`${value}{enter}`);
    }

    selectOldStyle(value) {
      this.elements.oldStyleDropdown().select(value).should('have.value',10);
    }

    selectMultipleDropdown() {
      this.elements.multiSelectDropdown().type('Green{enter}Blue{enter}Black{enter}Red{enter}');
    }

    successInput() {
      this.elements.valueDropdown().should('contain','Another root option')
      this.elements.oneDropdown().should('contain','Other')
      this.elements.oldStyleDropdown().should('contain','Aqua')
      this.elements.multiSelectItem()
        .should('contain','Green')
        .and('contain','Blue')
        .and('contain','Black')
        .and('contain','Red')
    }
  }
  
  module.exports = new selectMenuPage();