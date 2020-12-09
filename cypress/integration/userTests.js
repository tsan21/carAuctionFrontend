/// <reference types="cypress"/>

const { and } = require("vuelidate/lib/validators")


describe('User tests', () => {
    const userName = 'tsan'
    const password = 'tsan123'

    it('register page', () => {
        cy.visit('http://localhost:8080/RegisterLogin')
        cy.contains('Register')
        cy.contains('Already have an account?')
    })
})