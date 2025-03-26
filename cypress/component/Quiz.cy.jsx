import React from 'react'
import { mount } from 'cypress/react'
import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
  it('renders the component', () => {
    mount(<Quiz />)
  })

  it('renders the start button', () => {
    mount(<Quiz />)
    cy.get('button').contains('Start Quiz').should('be.visible')
  })

  it('shows the first question after clicking the start button', () => {
    mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()
    cy.get('h2').should('be.visible')
  })

  it('shows the four answer choices after clicking the start button', () => {
    mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()
    cy.get('button').should('have.length', 4)
  })

  it('shows the next question after clicking an answer choice', () => {
    mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()
    cy.get('button').first().click()
    cy.get('h2').should('be.visible')
  }) 
  
  it('shows the results after answering all questions', () => {
    mount(<Quiz />)
    cy.get('button').contains('Start Quiz').
    click()
    cy.get('button').first().click()
    cy.get('button').first().click()
    cy.get('button').first().click()
    cy.get('button').first().click()
    cy.get('button').first().click()
    cy.get('button').first().click()
    cy.get('button').first().click()
    cy.get('button').first().click()
    cy.get('button').first().click()
    cy.get('button').first().click()
    cy.get('h2').contains('Quiz Completed').should('be.visible')
  })

    it('shows the results after answering all questions', () => {
        mount(<Quiz />)
        cy.get('button').contains('Start Quiz').
        click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('div').contains('Your score').should('be.visible')
      })

      it('should start the quiz again after clicking the Take New Quiz button', () => {
        mount(<Quiz />)
        cy.get('button').contains('Start Quiz').
        click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').first().click()
        cy.get('button').contains('Take New Quiz').click()
        cy.get('h2').should('be.visible')
      })
})