describe('Quiz', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should show the start button', () => {
        cy.get('button').contains('Start Quiz').should('be.visible')
    })

    it('should show the first question after clicking the start button', () => {
        cy.get('button').contains('Start Quiz').click()
        cy.get('h2').should('be.visible')
    })

    it('should show the four answer choices after clicking the start button', () => {
        cy.get('button').contains('Start Quiz').click()
        cy.get('button').should('have.length', 4)
    })

    it('should show the next question after clicking an answer choice', () => {
        cy.get('button').contains('Start Quiz').click()
        cy.get('button').first().click()
        cy.get('h2').should('be.visible')
    })

    it('should show the complete screen after answering all questions', () => {
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

      it('should show the results after answering all questions', () => {
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