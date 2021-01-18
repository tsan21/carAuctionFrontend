/// <reference types="cypress"/>

const { and } = require("vuelidate/lib/validators")


describe('User tests', () => {
    const userName = 'tsan'
    const password = 'tsan'

    it('opens register page', () => {
        cy.visit('http://localhost:8080/RegisterLogin')
        cy.contains('Register')
        cy.contains('Already have an account?')
    })

    it('opens register page 2', () => {
        cy.visit('http://localhost:8080/RegisterLogin')
        cy.contains('Register')
        cy.contains('Already have an account?')
    })

    it('opens login component', () => {
        cy.get('#btnSignIn').click()
        cy.contains('Login')
    })

    it('logs user in', () => {
        cy.get('#userName').type(userName)
        cy.get('#password').type(password)
        cy.get('#btnLogin').click()
        cy.location().should((loc) => {
            expect(loc.pathname.toString()).to.eq('/')
        })
    })

    it('logs user out', () => {
        cy.get('#btnLogout').click()
        cy.location().should((loc) => {
            expect(loc.pathname.toString()).to.eq('/RegisterLogin')
        })
    })

    it('opens home page', () => {
        cy.visit('http://localhost:8080/')
        cy.contains('View auction')
    })
})