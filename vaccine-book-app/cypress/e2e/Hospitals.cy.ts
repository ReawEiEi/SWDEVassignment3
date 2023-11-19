describe("Hospitals", () => {
  it("Should test video and pause button and hospital images", () => {
    cy.visit("/");
    cy.get("video").should("exist");
    cy.get("video").should("have.prop", "paused", false);

    cy.wait(5000);

    cy.get("#videobutton").should("exist").click();
    cy.get("video").should("have.prop", "paused", true);

    cy.get("#hospitalbutton").should("exist").click();

    cy.wait(6000);
    cy.get("img").should("have.length.at.least", 3);
  });
});
