describe("Tickets Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/tickets");
    });
  
    it("renders child ticket selector", () => {
      cy.get("[data-test=child-ticket-selector]").should("have.length", 1);
    });

    it("renders adult ticket selector", () => {
        cy.get("[data-test=adult-ticket-selector]").should("have.length", 1);
    });

    it("increases quantity by 1 on clicking add button child ticket selector", () => {
        cy.get("[data-test=child-ticket-increment").click();
        cy.get("[data-test=child-ticket-amount]").should("have.text", "1");
    });

    it("increases quantity by 1 on clicking add button child ticket selector", () => {
        cy.get("[data-test=child-ticket-increment").click().click().click();
        cy.get("[data-test=child-ticket-decrement").click();

        cy.get("[data-test=child-ticket-amount]").should("have.text", "2");
    });
  });
