import { getGreeting } from '../support/app.po';

describe('transloco-poc', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to transloco-poc!');
  });
});
