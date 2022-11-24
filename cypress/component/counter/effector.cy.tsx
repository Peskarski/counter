import React from 'react';
import { EffectorCounter } from '../../../src/features';

describe('<Counter>', () => {
  beforeEach(() => {
    cy.mount(<EffectorCounter />);
  });

  it('mounts with default value', () => {
    cy.get('span').should('have.text', '0');
  });

  it('increments correctly', () => {
    cy.get('[data-cy=increment]').click();
    cy.get('span').should('have.text', '1');
  });

  it('decrements correctly', () => {
    cy.get('[data-cy=decrement]').click();
    cy.get('span').should('have.text', '0');
  });
});