describe("Explore Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/explore");
  });

  it("renders 3 accordions", () => {
    cy.get("[data-test=explore-accordion]").should("have.length", 3);
  });

  it("renders 11 attraction cards", () => {
    cy.get("[data-test=attraction-card]").should("have.length", 9);
  });
});
