describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("renders a title", () => {
    cy.get("[data-test=app-title]").should("have.length", 1);
  });

  it("renders an explore link", () => {
    cy.get("[data-test=explore-link]").should("have.length", 1);
  });

  it("renders a visit link", () => {
    cy.get("[data-test=tickets-link]").should("have.length", 1);
  });

  it("renders 4 features", () => {
    cy.get("[data-test=feature]").should("have.length", 4);
  });

  
  it("renders a visit image", () => {
    cy.get("[data-test=visit-image]").should("have.length", 1);
  });

  it("renders an explore link", () => {
    cy.get("[data-test=visit-link]").should("have.length", 1);
  });

  it("renders a visit link", () => {
    cy.get("[data-test=visit-description]").should("have.length", 1);
  });

  it("renders 4 credentials", () => {
    cy.get("[data-test=credential]").should("have.length", 4);
  });

  it("renders an email form", () => {
    cy.get("[data-test=email-form]").should("have.length", 1);

  });
});
