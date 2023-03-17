import React from 'react'
import Navbar from './Navbar.jsx'
import { MemoryRouter as Router } from 'react-router-dom';
import '../scss/main.scss';

describe('<Home />', () => {
  beforeEach(() => {
    cy.mount(
      <Router>
        <Navbar />
      </Router>)
  })

  it('check if navbar exists', () => {
    cy.get('button').should('exist')
  })
})