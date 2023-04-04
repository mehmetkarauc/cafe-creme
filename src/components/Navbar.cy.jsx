import React from 'react';
import Navbar from './Navbar.jsx';
import { MemoryRouter as Router } from 'react-router-dom';
import '../scss/main.scss';

describe('Navbar Tests', () => {
  beforeEach(() => {
    cy.viewport(1024, 1366)
    cy.mount(
      <Router>
        <Navbar />
      </Router>
    )
  })

  it('check if logo is visible', () => {
    cy.get('#logo')
      .should('be.visible')
      .and('have.text', ' Cafe Creme ')
  })

  it('check if Home link is visible and redirects to correct URL', () => {
    cy.get('a')
      .contains('Home')
      .should('be.visible')

    cy.get('[data-cy="homeLink"]')
      .should('have.attr', 'href')
      .and('eq', '/')
  })
})