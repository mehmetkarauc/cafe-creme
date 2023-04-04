import React from 'react';
import ProductList from './ProductList';
import products from '../data/products.json';
import '../scss/main.scss';

describe('<ProductList />', () => {
  beforeEach(() => {
    cy.viewport(1024, 1366)
    cy.mount(<ProductList data={products}/>)
  })

  it('check if basket button exists', () => {
    cy.get('button')
      .should('have.text', 'View Basket')
  })
})