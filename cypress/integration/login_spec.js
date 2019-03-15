import { wait } from "react-testing-library";

describe('Login test', () => {
    it('Does login', () => {
        cy.visit('http://localhost:3000')
        cy.get('input[name=username]').type('username')
        cy.get('input[name=password]').type('password')
        cy.get('button').click()
        cy.url().should('include', '/app')
        cy.get('h1').should('contain', 'hello handsome')
    })
})